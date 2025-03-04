

// Create 16 x 16 grid of divs
const container = document.querySelector(".container");

for (let i = 0; i < 16; i++) {
    const row = document.createElement("div");
    row.setAttribute("class", "row");
    
    for (let j = 0; j < 16; j++) {
        const col = document.createElement("div");
        col.setAttribute("class", "col");

        // Trail effect
        col.addEventListener("mouseover", () => {
            col.style.backgroundColor = "black";
        })

        row.appendChild(col);
    }

    container.appendChild(row);
}
