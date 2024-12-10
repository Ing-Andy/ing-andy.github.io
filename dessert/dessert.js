var listedessert = []
var totaldessert = 0

function ajouter(nom,prix) {
    listedessert.push({nom,prix})
    totaldessert += prix
    const Ldessert = JSON.stringify(listedessert)
    localStorage.setItem("dessert",Ldessert)
    miseajour()
}

function miseajour(){
    let ul = document.getElementById("ul")
    ul.textContent = " "
    listedessert.forEach(listedessert=>{
        const li = document.createElement("li")
        li.textContent = `${listedessert.nom}   :${listedessert.prix}`
        ul.appendChild(li)
    })

    const hr = document.createElement("hr")
    hr.textContent = `${totaldessert}`
    hr.style.width = "200px"
    hr.style.marginLeft = "0px"
    ul.appendChild(hr)
    
}