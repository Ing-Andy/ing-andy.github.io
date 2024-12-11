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


        li.style.display = 'flex';
        li.style.flexDirection = "row";
        li.style.justifyContent = "center"
        
        // je cree ma div div_boutton
        const div_boutton = document.createElement("div");
        const moin = document.createElement("button");
        const plus = document.createElement("button");

        // je les arrange un peut
        div_boutton.style.display = "flex";
        div_boutton.style.width = "10px";
        div_boutton.style.marginLeft = "20px"
        moin.style.backgroundColor = "transparent";
        plus.style.backgroundColor = "transparent";   
        moin.style.border = "none";     
        plus.style.border = "none";
        moin.style.color = "white";
        plus.style.color = "white";     

        // je les insets leurs insigne 
        moin.textContent = "-";
        plus.textContent = "+";
        
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
        moin.addEventListener("click",function(){
            entreeData.remove(item.nom,item.prix)
        })
        plus.addEventListener("click",function(){
            entreeData.push(item.nom,item.prix)
        }) 

        // calcule du total
        total += item.prix;
        
        // je fais des ajouts
        div_boutton.appendChild(moin);
        div_boutton.appendChild(plus);
        li.appendChild(p1);
        li.appendChild(p2);
        li.appendChild(div_boutton);
        entrer.appendChild(li);
    });


    // Afficher les choix de résistances
    resistanceData.forEach(item => {
        const li = document.createElement("li");
        li.textContent = ``;
        const p1 = document.createElement("p");
        const p2 = document.createElement("p");
        p1.textContent = `${item.nom} :`;
        p2.textContent = `${item.prix} fcfa`;
        
        // creation des bouttons
        const divboutton = document.createElement("div");
        const bmoin = document.createElement("button");
        const bplus = document.createElement("button");
        bmoin.textContent = "-";
        bplus.textContent = "+";

        // calcule du prix total 
        total += item.prix;

        // j'arrange un peut
        divboutton.style.marginLeft = "20px";
        p2.style.marginLeft = "20px";
        divboutton.style.display = "flex";
        // divboutton.style.width = "10px";
        bmoin.style.backgroundColor = "transparent";
        bplus.style.backgroundColor = "transparent";
        bmoin.style.border = "none";     
        bplus.style.border = "none";
        bmoin.style.color = "white";
        bplus.style.color = "white";
        li.style.display = 'flex';
        li.style.flexDirection = "row"
        li.style.justifyContent = "center";

        // je fais les ajouts
        li.appendChild(p1);
        li.appendChild(p2);
        divboutton.appendChild(bmoin);
        divboutton.appendChild(bplus);
        li.appendChild(divboutton);
        resistance.appendChild(li);
    });


    // Afficher les choix de desserts
    dessertData.forEach(item => {
        const li = document.createElement("li");
        li.textContent = ``;
        // li.textContent = `${item.nom} : ${item.prix} FCFA`;

        // creation des bouttons
        const dboutton = document.createElement("div");
        const p1 = document.createElement("p");
        const p2 = document.createElement("p");
        const moin = document.createElement("button");
        const plus = document.createElement("button");
        p1.textContent = `${item.nom} :`;
        p2.textContent = `${item.prix} Fcfa`;
        moin.textContent = "-";
        plus.textContent = "+";
        p2.style.marginLeft = "20px"
        dboutton.style.marginLeft = "20px";
        dboutton.style.display = "flex";
        moin.style.backgroundColor = "transparent";
        plus.style.backgroundColor = "transparent";
        moin.style.border = "none";
        plus.style.border = "none";
        moin.style.color = "white";
        plus.style.color = "white";
        li.style.display = "flex";
        li.style.flexDirection = "row";
        li.style.justifyContent = "center";
        li.style.margin = "0px";
        
        total += item.prix;

        li.appendChild(p1);
        li.appendChild(p2);
        dboutton.appendChild(moin);
        dboutton.appendChild(plus)  
        li.appendChild(dboutton);
        dessert.appendChild(li);
    });

    // Afficher le total
    totalElement.textContent = total;
});
