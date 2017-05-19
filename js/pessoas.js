function cria_cards(name, description, tipo) {
    let pessoas = document.querySelector(`#${tipo}`);
    let div = document.createElement("div");
    div.classList.add("teste");
    let color = 'red';
    if (tipo == "hemocentros")
        color = 'green';

    let template = `
    <div class="col m6" onclick="changeModal('${name}', '${description}')">
        <div class="card hoverable ${color} waves-effect">
            <div class="row valign-wrapper">
                <div class="col s2">
                    <img src="res/logo.svg" alt="" class="circle responsive-img"> <!-- notice the "circle" class -->
                </div>
                <div class="card-content white-text col s10">
                    <span class="card-title truncate">${name}</span>
                    <p class="truncate">${description}.</p>
                </div>
            </div>
        </div>
    </div>
    `;

    div.innerHTML = template;

    pessoas.appendChild(div);
}

function changeModal(name, description) {
    let modal = document.querySelector("#modal1");
    modal.innerHTML = `
    <div class="modal-content">
        <h4>${name}</h4>
        <p>${description}</p>
    </div>
    <div class="modal-footer">
        <a href="#!" class="modal-action modal-close waves-effect waves-green btn-flat">Ok</a>
    </div>
    `;
    console.log(modal);
}

function loadCards(pessoas, tipo) {
    for (let i = 0; i < pessoas.length; i++) {
        let name = pessoas[i].first_namew;
        let lName = pessoas[i].last_name;
        let description = `Endereço: ${pessoas[i].address}. Tipo Sanguineo: ${pessoas[i].blood_type}`

        let fullName = name + " " + lName;

        cria_cards(fullName, description, tipo);
    }
}