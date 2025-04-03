function addEmployee(){
    //Fetching the values of the input elements
    const name = document.getElementById('employee').value;
    const hours = parseFloat(document.getElementById('hours').value); 
    const rate = parseFloat(document.getElementById('rate').value);
   //Checking whether there is an invalid entry ie empty fields
    if(name == "" || isNaN(hours) || isNaN(rate)){
        alert("Please fill all the fields");
        return;
    }
    //Calculating the salary
    const salary = hours * rate;
    //Acessing the table body
    const table = document.getElementById('employeeTable');
   // console.log("Table element:",table);

    //Inserting rows to the table body
    const row = table.insertRow();
    
    row.insertCell(0).textContent = name;
    row.insertCell(1).textContent = hours;
    row.insertCell(2).textContent = rate;
    row.insertCell(3).textContent = `$${salary.toFixed(2)}`;

    document.getElementById('employee').value = "";
    document.getElementById('hours').value = "";
    document.getElementById('rate').value = "";
}    