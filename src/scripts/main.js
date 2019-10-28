const apiAddress = 'http://localhost:8088/parks'

function parkHTML(parkStats) {
document.getElementById("parksTag").innerHTML +=
    `<article>
    <h3>${parkStats.name}</h3>
    <p>${parkStats.state}</p>
    </article>`
}


fetch(apiAddress) 
.then( parks => parks.json())
.then(parsedParks => {
    console.table(parsedParks);
    const parkInfo = ""
    for (i = 0; i <= parsedParks.length; i++) {
        parkHTML(parsedParks[i]);
        parkInfo += parsedParks[i]
        if(i.vistited = true) {
            parkInfo = document.getElementByIdName('#visited').style.color = "green";
        }
        else { 
        parkInfo = document.getElementByIdName('#notVisited').style.color = "red";
        }
    }
})
