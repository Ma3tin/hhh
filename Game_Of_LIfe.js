
let interval;
let map = [];

window.onload = () => {

    generateMap(10, 10);
}

function generateMap(width, height) {
    let table = document.createElement("table");
    table.id = "map";

    for (let i = 0; i < width; i++) {
        let tr = document.createElement("tr");
        let row = []
        for (let j = 0; j < height; j++) {
            row.push(false)
            let td = document.createElement("td");
            td.innerHTML = "&nbsp"
            td.addEventListener("click", function (e){
                if (e.target.className == "clicked") e.target.className = "onClicked"
                else e.target.className = "clicked"
                map[i][j] = true
                console.log(map[i][j])
            })
            tr.appendChild(td)
            //console.log(td)
        }
        map.push(row)
        table.appendChild(tr)
    }
    document.body.append(table)
}