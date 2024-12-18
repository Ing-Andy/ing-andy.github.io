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

    function updateTotal() {
        totalElement.textContent = total;
    }

    function createMenuItem(item, container) {
        const li = document.createElement("li");
        const p1 = document.createElement("p");
        const p2 = document.createElement("p");
        p1.textContent = `${item.nom} :`;
        p2.textContent = `${item.prix} FCFA`;

        const divButton = document.createElement("div");
        const moinButton = document.createElement("button");
        const plusButton = document.createElement("button");
        moinButton.textContent = "-";
        plusButton.textContent = "+";
        li.style.display = "flex";
        li.style.flexDirection = "row";
        li.style.justifyContent = "center";
        

        // Styles des boutons
        [moinButton, plusButton].forEach(button => {
            button.style.backgroundColor = "transparent";
            button.style.border = "none";
            button.style.color = "white";
        });

        // Écouteurs d'événements pour les boutons
        moinButton.addEventListener("click", () => {
            total -= item.prix;
            updateTotal();
            miseajour();
            const index = container === entrer ? entreeData.indexOf(item) : 
                         container === resistance ? resistanceData.indexOf(item) : 
                         dessertData.indexOf(item);
            if (index > -1) {
                if (container === entrer) entreeData.splice(index, 1);
                else if (container === resistance) resistanceData.splice(index, 1);
                else dessertData.splice(index, 1);
            }
        });

        plusButton.addEventListener("click", () => {
            total += item.prix;
            updateTotal();

            if (container === entrer){
                entreeData.push(item);
                createMenuItem(item, entrer);
                miseajour();
                }
            else if (container === resistance) {
                resistanceData.push(item)
                createMenuItem(item, resistance);
                miseajour();
            }
            else { 
                dessertData.push(item) 
                createMenuItem(item, dessert);
                miseajour();
            }
        });

        // Ajout des éléments
        divButton.appendChild(moinButton);
        divButton.appendChild(plusButton);
        divButton.style.display = "flex";
        divButton.style.justifyContent = "center";
        divButton.style.marginLeft = "20px";
        p2.style.marginLeft = "20px";
        li.appendChild(p1);
        li.appendChild(p2);
        li.appendChild(divButton);
        container.appendChild(li);
    }

    // Afficher les choix d'entrées
    entreeData.forEach(item => {
        total += item.prix;
        createMenuItem(item, entrer);
    });

    // Afficher les choix de résistances
    resistanceData.forEach(item => {
        total += item.prix;
        createMenuItem(item, resistance);
    });

    // Afficher les choix de desserts
    dessertData.forEach(item => {
        total += item.prix;
        createMenuItem(item, dessert);
    });

    // Afficher le total
    updateTotal();
});
