var listeentrer = []
var totalentrer = 0

function ajouter(nom,prix) {
    listeentrer.push({nom,prix})
    totalentrer += prix
    const Lentrer = JSON.stringify(listeentrer)
    localStorage.setItem("entrer",Lentrer)
    miseajour()
}

function miseajour(){
    let ul = document.getElementById("ul")
    ul.textContent = " "
    listeentrer.forEach(listeentrer=>{
        const li = document.createElement("li")
        li.textContent = `${listeentrer.nom}   :${listeentrer.prix}`
        ul.appendChild(li)
    
    })

    const hr = document.createElement("hr")
    hr.textContent = `${totalentrer}`
    hr.style.width = "200px"
    hr.style.marginLeft = "0px"
    ul.appendChild(hr)
    
}