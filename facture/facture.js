document.addEventListener("DOMContentLoaded", function() {
    const entrer = document.getElementById("entrer");
    const resistance = document.getElementById("resistance");
    const dessert = document.getElementById("dessert");
    const totalElement = document.getElementById("total");

    // Récupérer les données de localStorage
    const entreeData = JSON.parse(localStorage.getItem("entrer")) || [];
    const resistanceData = JSON.parse(localStorage.getItem("resistance")) || [];
    const dessertData = JSON.parse(localStorage.getItem("dessert")) || [];
    
    let total = 0;

    // Afficher les choix d'entrées
    entreeData.forEach(item => {
        const li = document.createElement("li");
        // li.textContent = `${item.nom} : ${item.prix} FCFA `;
        // li.style.display = 'flex';
        // li.style.justifyContent = 'space-arroud'
        li.textContent = '';
        const p1 = document.createElement('p');
        const p2 = document.createElement('p');
        p1.textContent = `${item.nom} :`;
        p2.textContent = `${item.prix}`;

        li.appendChild(p1);
        li.appendChild(p2);
        
        const boutonsContainer = document.createElement("div");
        boutonsContainer.className = "boutons-container"; // Ajoutez la classe CSS
        boutons-container.

        const moin = document.createElement("button");
        const plus = document.createElement("button");
        moin.textContent = "-"
        plus.textContent = "+"

        li.style.display = "flex";
        li.style.justifyContent = "space-arround"
        //utiilitee des bouttons
        moin.addEventListener("click",()=>{
            total -= item.prix
            miseajour()
            const index = entreeData.indexOf(item);
            if (index > -1) {
                entreeData.splice(index, 1);
            }
        })
        plus.addEventListener("click",()=>{
            total += item.prix
            miseajour()
            const index = entreeData.indexof(item)
            if(index > -1){
                entreeData.push(index,1)
            }
        })
        li.appendChild(moin)
        li.appendChild(plus)
        moin.addEventListener("click",function(){
            entreeData.remove(item.nom,item.prix)
        })
        plus.addEventListener("click",function(){
            entreeData.push(item.nom,item.prix)
        })
        total += item.prix;
        entrer.appendChild(li);
    });


    // Afficher les choix de résistances
    resistanceData.forEach(item => {
        const li = document.createElement("li");
        li.textContent = `${item.nom} : ${item.prix} FCFA`;
        resistance.appendChild(li);
        // creation des bouttons
        const moin = document.createElement("button");
        const plus = document.createElement("button");
        moin.textContent = "-";
        plus.textContent = "+";
        plus.style.display = "flex";
        plus.style.justifyContent = "end"
        li.appendChild(moin);
        li.appendChild(plus);
        total += item.prix;
    });


    // Afficher les choix de desserts
    dessertData.forEach(item => {
        const li = document.createElement("li");
        li.textContent = `${item.nom} : ${item.prix} FCFA`;
        dessert.appendChild(li)
        // creation des bouttons
        const moin = document.createElement("button")
        const plus = document.createElement("button")
        moin.textContent = "-"
        plus.textContent = "+"
        li.appendChild(moin)
        li.appendChild(plus)
        total += item.prix;
    });

    // Afficher le total
    totalElement.textContent = total;
});
