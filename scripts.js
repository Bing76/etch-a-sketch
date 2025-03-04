
const container = document.querySelector(".container");
const dimensionsBtn = document.querySelector(".dimensions");

function setupGrid(dimension) {
    const width = 960 / dimension;
    const height = 960 / dimension;


    for (let i = 0; i < dimension; i++) {
        const row = document.createElement("div");
        row.setAttribute("class", "row");
        
        for (let j = 0; j < dimension; j++) {
            const col = document.createElement("div");
            col.setAttribute("class", "col");
            col.style.width = `${width}px`;
            col.style.height = `${height}px`;

            // Trail effect
            col.addEventListener("mouseover", () => {
                col.style.backgroundColor = "black";
            })

            row.appendChild(col);
        }

        container.appendChild(row);
    }
}

dimensionsBtn.addEventListener("click", () => {
    let dimension = 0;
    while (isNaN(dimension) || dimension < 1 || dimension > 100) {
        dimension = prompt("Please enter new number of squares per side. (No more than 100)");
    }

    container.replaceChildren();
    setupGrid(dimension);
})

setupGrid(100);

