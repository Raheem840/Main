document.addEventListener("DOMContentLoaded", () => {
  const title = document.querySelector(".title");
  const cursor = document.createElement("div");
  const cursorwidth = 25;
  const cursorheight = 25;
  const cursorwidthhover = 100;
  const cursorheighthover = 100;

  cursor.classList.add("cursor");
  document.body.appendChild(cursor);

  document.body.addEventListener("mousemove", (e) => {
    let x = e.clientX;
    let y = e.clientY;

    const rect = title.getBoundingClientRect();
    const inTitle =
      x > rect.left && x < rect.right && y > rect.top && y < rect.bottom;

    if (inTitle) {
      cursor.style.top = y - cursorheighthover / 2 + "px";
      cursor.style.left = x - cursorwidthhover / 2 + "px";
      cursor.style.width = cursorwidthhover + "px";
      cursor.style.height = cursorheighthover + "px";
    } else {
      cursor.style.top = y - cursorheight / 2 + "px";
      cursor.style.left = x - cursorwidth / 2 + "px"; // Fixed this line
      cursor.style.width = cursorwidth + "px";
      cursor.style.height = cursorheight + "px";
    }
  });
});
