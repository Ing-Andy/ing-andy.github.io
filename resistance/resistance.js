var listeresistance = []
var totalresistance = 0

function ajouter(nom,prix) {
    listeresistance.push({nom,prix})
    totalresistance += prix
    const Lresistance = JSON.stringify(listeresistance)
    localStorage.setItem("resistance",Lresistance)
    miseajour()
}

function miseajour(){
    let ul = document.getElementById("ul")
    ul.textContent = " "
    listeresistance.forEach(listeresistance=>{
        const li = document.createElement("li")
        li.textContent = `${listeresistance.nom}   :${listeresistance.prix}`
        ul.appendChild(li)
    })

    const hr = document.createElement("hr")
    hr.textContent = `${totalresistance}`
    hr.style.width = "200px"
    hr.style.marginLeft = "0px"
    ul.appendChild(hr)
    
}