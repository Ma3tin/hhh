
let interval =  null;
let map = [];
const width = 15;
const height = 15;

window.onload = () => {
    generateMap(width, height);

}

function startGenerations() {
    if (interval == null) {
        interval = setInterval(() => {
            map = nextGeneration(map, width, height)
            toHTML(map, width, height)
        }, 1000)
    }
}

function stopGenerations() {
    clearInterval(interval)
    interval = null
}
function generateMap(width, height) {
    let table = document.createElement("table");
    table.id = "map";

    for (let i = 0; i < width; i++) {
        let tr = document.createElement("tr");
        tr.id = "tr" + i
        let row = []
        for (let j = 0; j < height; j++) {
            row.push(false)
            let td = document.createElement("td");
            td.id = ("td" + i)  + "a" + j
            td.innerHTML = "&nbsp"
            td.addEventListener("click", function (e){
                if (e.target.className == "clicked") e.target.className = "onClicked"
                else e.target.className = "clicked"
                map[i][j] = true
                console.log(map[i][j])
            })
            tr.appendChild(td)
        }
        map.push(row)
        table.appendChild(tr)
    }
    document.getElementById("table").append(table)
}

function nextValue(value, count) {
    if (value) {
        return (count > 1 && count < 4)
    } else {
        return count == 3
    }
}

function getNeighbours(map, x, y, width, height) {
    let count = 0;

    for (let i = x - 1; i < x +1; i++) {
        for (let j = y - 1; j < y + 1; j++) {
            if ()
        }
    }
    /*
    const l = x > 0
    const r = x < (width - 1)
    const b = y < (height - 1)
    const t = y > 0
    if (l && t && map[x - 1][y - 1]) count++
    if (l && b && map[x - 1][y + 1]) count++
    if (r && b && map[x + 1][y + 1]) count++
    if (r && t && map[x + 1][y - 1]) count++
    if (l && map[x - 1][y]) count++
    if (b && map[x][y + 1]) count++
    if (r && map[x + 1][y]) count++
    if (t && map[x][y - 1]) count++
    return count
     */
}

function nextGeneration(map, width, height) {
    let newMap = []
    for (let i = 0; i < width; i++) {
        newMap.push([])
        for (let j = 0; j < height; j++) {
            let neighbours = getNeighbours(map, i, j, width, height)
            let willSurvive = nextValue(map[i][j], neighbours)
            newMap[i].push(willSurvive)
        }
    }
    return newMap
}

function toHTML(map, width, height) {
    for (let i = 0; i < width; i++) {
        for (let j = 0; j < height; j++) {
            let td = document.getElementById(("td" + i) + "a" + j)
            if (map[i][j]) td.className = "clicked"
            else td.classList.remove("clicked");
        }
    }
}