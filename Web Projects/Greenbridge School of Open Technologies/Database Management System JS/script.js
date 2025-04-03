//This code runs when the entire webpage is loaded
document.addEventListener("DOMContentLoaded",()=>{
    //Step 1 is to fetch data from our form elemnts
    const form = document.getElementById("recordForm");//Form for adding records
    const nameInput = document.getElementById("name");//Input for name
    const dobInput = document.getElementById("dob");//Input for DOB
    const imageInput = document.getElementById("image");//Input for image
    const previewImg = document.getElementById("previewImage")//preview image 
    const recordsContainer = document.getElementById("recordsContainer");//Container for records will be displayed


    let editIndex = null; // Track index of record being edited
    const defaultImage = "user-profile-icon.png"; // Path to default image

    //Step 2 is to load data from local storage
    let records = JSON.parse(localStorage.getItem("records")) || [];


    //Step 3 is to save data to local storage
    function saveToLocalStorage(){
        localStorage.setItem("records",JSON.stringify(records));
    }

    //step 4 is to display records on the page
    function renderRecords(){
        recordsContainer.innerHTML = "";                           //clears previous records
        records.forEach((record, index) => {                      // loops through all records
            const recordDiv = document.createElement("div");     //creates a div for each record
            recordDiv.classList.add("record");                  //adds a class to the div

            recordDiv.innerHTML = `
            <img src = ${record.image} alt = "Profile image" >
            <div class = "details" >
            <p><strong>Name:</strong> ${record.name}</p><!--Displays name-->
            <p><strong>Date of Birth:</strong> ${record.dob}</p><!--Displays Date of Birth-->
            </div>
            <button class="edit" onclick="editRecord(${index})">Edit</button>
            <button class="delete" onclick="deleteRecord(${index})">Delete</button>
            `;
            recordsContainer.appendChild(recordDiv);     //appends the record div to the records container

        });
    }

    // When user selects an image, update preview
    imageInput.addEventListener("change", () => {
        const file = imageInput.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function (event) {
            previewImage.src = event.target.result;
            };
            reader.readAsDataURL(file);
        }
    });
        
    

    //step 5 is handle form submission ie adding records
    // Add or Update a Record
    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const reader = new FileReader();
        reader.onload = function (event) {
        const imageUrl = event.target.result || defaultImage;//use uploaded image or default

            if (editIndex !== null) {
                // Update existing record
                records[editIndex].name = nameInput.value;
                records[editIndex].dob = dobInput.value;
                if (imageInput.files.length > 0) {
                    records[editIndex].image = imageUrl; // Update image if a new one is selected
                }

                editIndex = null; // Reset editIndex
            } else {
                // Add a new record
                const newRecord = {
                    name: nameInput.value,
                    dob: dobInput.value,
                    image: imageUrl
                };
                records.push(newRecord);
            }

            saveToLocalStorage();
            renderRecords();
            form.reset();

        // Reset preview image to default
        previewImage.src = defaultImage;
        imageInput.value = ""; // Clear file input field
        };

        if (imageInput.files.length > 0) {
            reader.readAsDataURL(imageInput.files[0]);
        } else {
            if (editIndex !== null) {
                // If editing and no new image is chosen, update text fields only
                records[editIndex].name = nameInput.value;
                records[editIndex].dob = dobInput.value;
                records[editIndex].image = defaultImage;

                saveToLocalStorage();
                renderRecords();
                form.reset();
                editIndex = null;
            }
        }
    });

    //step 6 is deleting a record
    window.deleteRecord = function(index){
        records.splice(index, 1);//remove the record at the specified index
        saveToLocalStorage();//save the updated records to local storage
        renderRecords();//update the display with new data
    };

   //step 7 is editing records
   window.editRecord = function (index) {
    const record = records[index];

    nameInput.value = record.name;
    dobInput.value = record.dob;
    previewImg.src = record.image;
    editIndex = index; // Store index for updating
};
    renderRecords();    
});