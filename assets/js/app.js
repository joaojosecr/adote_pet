// ----------------- PARTE PARTE JOAO JOSE -------------------

function exibePets() {
    let str = ''

    const url = "https://jsonserveradotepet--jjcribeiro.repl.co/pets"

    fetch(url)
        .then(response => response.json())
        .then(pets => {          
            console.log(pets)
            
            for (let i = 0; i < pets.length; i++) {
                let pet = pets[i];
                
                if(!pet.doado){

                    str += `<div class="col-xl-3 col-lg-4 col-md-6 border border-0">
                    <a class="card mb-4  bg-opacity-10" href="pet.html?id=${pet.id}">
                    <img class="card-img-top" src = ${pet.foto[12]} alt = ${pet.foto}/p.png   >
                    <div class="card-body border border-0")>
                    <h4 class="card-title">${pet.nome}</h4>
                    <p>Raça: ${pet.raca}</p>
                    <p>Sexo: ${pet.genero}</p>
                    <p>Data de nascimento: ${pet.data}</p>
                    
                    </div>
                    </a>
                    </div>
                    `
                    document.querySelector('#pets-container').innerHTML=str
                }
            }

        })
}   

function exibeUnPet(id) {
    
    const url = "https://jsonserveradotepet--jjcribeiro.repl.co/pets"

    fetch(url)
        .then(response => response.json())
        .then(pets => {
            let idx = pets.findIndex(elem => elem.id == id)
            let pet = pets[idx];
            console.log(idx);
            console.log(id);
            let str =''
            str += `<div class="row">
            <!-- Descrição -->
            <div class="col-md-12 py-4 my-4">
                <div class="card flex-md-row mb-4 shadow-sm h-md-250">
                    <img class="card-img-right flex-auto d-none d-lg-block" alt="Thumbnail [200x250]" src="${pet.foto[13]}" style="width: 200px; height: 250px;">
                    <div class="card-body d-flex flex-column align-items-start">
                        <strong class="d-inline-block mb-2" id="nome">${pet.nome}</strong>
                        <p>Raça: <label id="raca">${pet.raca}</label></p>
                        <p>Aniversario: <label id="data">${pet.data}</label></p>
                        <p>Genero:: <label id="genero">${pet.genero}</label></p>
                        <p>Vacinado: <label id="vacinado">${pet.vacinado}</label></p>
                        <p>Peso: <label id="peso">${pet.peso}</label></p>
                    
                        <p class="card-text mb-auto" id="descricao">Descrição:<label id="descricao">${pet.descricao}.</label></p>
                        
                    </div>
                    <div style="display: flex; align-items: center;">
                        <button type="submit" class="btn border border-radius bg-black bg-opacity-10" data-toggle="modal" data-target="#myModal" >Mostrar interesse</Button>
                    </div>
                </div>
            </div>
        </div>
        
        
        <div id="myCarousel" class="carousel slid" style="display: flex; flex-wrap: wrap; align-items: center;" data-ride="carousel" >
            <!-- Indicadores (pontos) -->
            <ol class="carousel-indicators">
                <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
                <li data-target="#myCarousel" data-slide-to="1"></li>
                <li data-target="#myCarousel" data-slide-to="2"></li>
                <li data-target="#myCarousel" data-slide-to="3"></li>
                <li data-target="#myCarousel" data-slide-to="4"></li>
            </ol>
            <!-- Slides de imagens -->
            <div class="carousel-inner" style="display:flex; flex-wrap: wrap; align-items: center; padding: auto 0; ">
                <div class="carousel-item active">
                    <img id="img1" src="${pet.foto[0]}" alt="Imagem 1">
                </div>
                <div class="carousel-item">
                    <img id="img2" src="${pet.foto[1]}" alt="Imagem 2">
                </div>
                <div class="carousel-item">
                    <img id="img3" src="${pet.foto[2]}" alt="Imagem 3">
                </div>
                <div  class="carousel-item">
                    <img id="img4" src="${pet.foto[3]}" alt="Imagem 4">
                </div>
                <div class="carousel-item">
                    <img id="img5" src="${pet.foto[4]}" alt="Imagem 5">
                </div>
            <!-- Controles do carrossel -->
            <a class="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Anterior</span>
            </a>
            <a class="carousel-control-next" href="#myCarousel" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Próximo</span>
            </a>
        </div>
        
        `    
        document.querySelector('#main').innerHTML=str
        })

}

function exibeMeusPets() {
    let str = ' '


    const url2 = "https://jsonserveradotepet--jjcribeiro.repl.co/login/0"
    fetch(url2)
    .then(response => response.json())
    .then(login => {
        
        const user = login.user_id;
        
        const url = "https://jsonserveradotepet--jjcribeiro.repl.co/pets"

        fetch(url)
            .then(response => response.json())
            .then(pets => {          
                console.log(pets)
                for (let i = 0; i < pets.length; i++) {
                    let pet = pets[i];
                    let msg = "Aguardando doação."
                    if(pet.doado){
                        console.log("Doado ----- " + pet.doado)
                        msg = "Doado."
                    }
                    if(user===pet.user_id || user == "-1"){ 
                        
                        str += `<div class="col-xl-3 col-lg-4 col-md-6 border border-0">
                                    <a class="card mb-4  bg-opacity-10" href="meu_pet.html?id=${pet.id}">
                                        <img class="card-img-top" src = ${pet.foto[12]} alt = ${pet.nome}/p.png   >
                                        <div class="card-body border border-0")>
                                            <h4 class="card-title">${pet.nome}</h4>
                                            <p>Raça: ${pet.raca}</p>
                                            <p>Sexo: ${pet.genero}</p>
                                            <p>Data de nascimento: ${pet.data}</p>
                                            <p>Status: ${msg}</p>
                                        </div>
                                    </a>
                                </div>
                        `
                        
                    }
                }
                document.querySelector('#pets-container').innerHTML=str

        });
    });
} 

function exibeMeuPet(id) {
    
    const url = "https://jsonserveradotepet--jjcribeiro.repl.co/pets"

    fetch(url)
        .then(response => response.json())
        .then(pets => {
            let idx = pets.findIndex(elem => elem.id == id)
            let pet = pets[idx];
            
            let str =''
            str += `<div class="row">
                        <!-- Descrição -->
                        <div class="col-md-12 py-4 my-4">
                            <div class="card flex-md-row mb-4 shadow-sm h-md-250">
                                <img class="card-img-right flex-auto d-none d-lg-block" alt="Thumbnail [200x250]" src="${pet.foto[13]}" style="width: 200px; height: 250px;">
                                <div class="card-body d-flex flex-column align-items-start">
                                    <strong class="d-inline-block mb-2" id="nome">${pet.nome}</strong>
                                    <p>Raça: <label id="raca">${pet.raca}</label></p>
                                    <p>Aniversario: <label id="data">${pet.data}</label></p>
                                    <p>Genero:: <label id="genero">${pet.genero}</label></p>
                                    <p>Vacinado: <label id="vacinado">${pet.vacinado}</label></p>
                                    <p>Peso: <label id="peso">${pet.peso}</label></p>
                                
                                    <p class="card-text mb-auto" id="descricao">Descrição:<label id="descricao">${pet.descricao}.</label></p>
                                    
                                </div>
                                <div style="display: flex; align-items: center;">
                                    <button type="submit" class="btn border border-radius bg-black bg-opacity-10" data-toggle="modal" data-target="#myModal "  onclick="marcar_doado('${pet.id}')">Marcar como doado</Button>
                                </div>
                            </div>
                        </div>
                    </div>
        
            `    
            document.querySelector('#main').innerHTML=str
            
            const url = "https://jsonserveradotepet--jjcribeiro.repl.co/user"

            let str2='';
            
            console.log(pet);

            if(pet.interesse){
            
                for (i = 0; i < pet.interesse.length; i++){

                    let user_id, mensagem;
                    [user_id, mensagem] = pet.interesse[i];

                    fetch(url)
                    .then(response => response.json())
                    .then(users => {
                    let idx = users.findIndex(elem => elem.id == user_id)
                    let user = users[idx];
                    
                    if(user_id == user.id){

                        
                        console.log(user);
                        
                        str2+=`<div class="row">
                                <div class="col-md-12  my-4">
                                    <div class="card flex-md-row mb-4 shadow-sm h-md-250">
                                        <div class="card-body d-flex flex-column align-items-start">
                                            <strong class="d-inline-block mb-2" id="nome">${user.Nome}</strong>
                                            <p>Cidade: <label id="cidade">${user.Cidade}</label></p>
                                            <p>Bairro: <label id="bairro">${user.Bairro}</label></p>
                                            <p>Descrição: <label id="descricao">${user.Descrição}</label></p>
                                            <p>Contato: <label id="contato">${user.Email} - ${user.Telefone}</label></p>
                                            <p>Mensagem: <label id="mensagem">${mensagem}</label></p>
                                        </div>
                                    </div>
                                </div>
                            </div>`;
                        
                            document.querySelector('#interessados').innerHTML=str2;
                        }
                    });
                }
            }
                
            

            
        });

}

function mostrar_interesse(id) {
    
    console.log("Interesse em "+id);
    

    const url2 = "https://jsonserveradotepet--jjcribeiro.repl.co/login/0"
    fetch(url2)
    .then(response => response.json())
    .then(login => {
        
        const userId = login.user_id;
        const mensagem = document.querySelector("#mensagem");
        console.log("user id "+userId);
        console.log("mensagem " +mensagem.value);

        if(mensagem.value===""){
            alert("Por favor, preencha a descrição");
            return;
        }

        if(userId!=-1 ){
            
            // Supondo que você tem o ID do pet e as informações do interesse
            const petId = 123; // Substitua pelo ID correto do seu pet
            const novoInteresse = [userId, mensagem.value];
            const url = "https://jsonserveradotepet--jjcribeiro.repl.co/pets/"+id
            // Verifica se já existe algum interesse para esse pet
            fetch(url)
            .then(response => response.json())
            .then(pet => {




            // Se não houver interesses, cria um novo array de interesses
            if (!pet.interesse) {
                console.log("Primeiro interesse");
                pet.interesse = [novoInteresse];
            } else {
                               
                console.log("Novo interesse");
                // Se já houver interesses, adiciona o novo interesse à lista existente
                pet.interesse.push(novoInteresse);
            }
            
            // Atualiza o pet com os novos interesses usando PATCH
            fetch(url, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ interesse: pet.interesse }),
            })
            .then(response => response.json())
            .then(updatedPet => {
                console.log('Interesse adicionado com sucesso:', updatedPet);
            })
            .catch(error => {
                console.error('Erro ao adicionar interesse:', error);
            });
            })
            .catch(error => {
                console.error('Erro ao obter informações do pet:', error);
            });
        } else {

            alert("Faça login para mostrar interesse em algum Pet.");
        }

    });    



    
}

function marcar_doado(id) {
    
    const url = "https://jsonserveradotepet--jjcribeiro.repl.co/pets/"+id

    fetch(url, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ doado: true }),
    })
    .then(response => response.json())
    .then(updatedPet => {
        window.location.href = 'meu_doe.html';
        console.log('Doada com sucesso:', updatedPet);
    })
    .catch(error => {
        console.error('Erro ao marcar como doada:', error);
    });
    
    
    
}

// ----------------- PARTE DANI -------------------    



// Código LoginApp utilizado como exemplo para alunos de primeiro período 
const LOGIN_URL = "../../index.html";

// Objeto para o banco de dados de usuários baseado em JSON
var db_usuarios = { usuarios: [] };

// Objeto para o usuário corrente
var usuarioCorrente = {};

// função para gerar códigos randômicos a serem utilizados como código de usuário
// Fonte: https://stackoverflow.com/questions/105034/how-to-create-guid-uuid
function generateUUID() { // Public Domain/MIT
    var d = new Date().getTime(); // Timestamp
    var d2 = (performance && performance.now && (performance.now() * 1000)) || 0; // Time in microseconds since page-load or 0 if unsupported
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = Math.random() * 16; // Random number between 0 and 16
        if (d > 0) { // Use timestamp until depleted
            r = (d + r) % 16 | 0;
            d = Math.floor(d / 16);
        } else { // Use microseconds since page-load if supported
            r = (d2 + r) % 16 | 0;
            d2 = Math.floor(d2 / 16);
        }
        return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
    });
}

function addPet(nomePet, fotosPetInput, racaPet, aniversarioPet, generoPet, vacinadoPet, pesoPet, descricaoPet) {
    let nome = generateUUID();
    let usuario = {
        "nome": nome,
        "fotos": fotosPetInput,
        "raça": racaPet,
        "aniversario": aniversarioPet,
        "genero": generoPet,
        "vacinado": vacinadoPet,
        "peso": pesoPet,
        "descrição": descricaoPet
    };

    // Inclui o novo usuário no banco de dados baseado em JSON
    db_usuarios.usuarios.push(usuario);

    // Salva o novo banco de dados com o novo usuário no localStorage
    localStorage.setItem('db_usuarios', JSON.stringify(db_usuarios));
}

function setUserPass() {
    // Implemente conforme necessário
}

// Inicializa as estruturas utilizadas pelo LoginApp
function initLoginApp() {
    // Implemente conforme necessário
}

// ----------------- PARTE LUIS -------------------

function cadastro_user(event){
    event.preventDefault();
    const form = document.querySelector("#form");
    const id = generateUUID();
    const nameInput = document.querySelector("#name");
    const passwordInput = document.querySelector("#password");
    const emailInput = document.querySelector("#email");
    
    const cidadeInput = document.querySelector("#cidade");
    const bairroInput = document.querySelector("#bairro");
    const enderecoInput = document.querySelector("#Endereço");
    const descricaoInput = document.querySelector("#descriçao");

    
    //formato telefone
    const telefoneInput = document.querySelector('#telefone')
    telefone.addEventListener('keypress', () =>{
        let telefonelength = telefone.value.length
        if(telefonelength===0){
            telefone.value +='('
        } 
        else if(telefonelength===3)
        telefone.value+=')'
        
        else if(telefonelength===9)
        telefone.value+='-'
    })
    //formato da data
    const dataInput = document.querySelector('#data')
    data.addEventListener('keypress', () =>{
        let datalength = data.value.length
        if(datalength===2||datalength===5){
            data.value +='/'
        } 
    })

    // Formato do cpf
    const cpfInput = document.querySelector('#cpf')
    cpf.addEventListener('keypress', () =>{
        let cpflength = cpf.value.length
        if(cpflength===3||cpflength===7){
            cpf.value +='.'
        } else if (cpflength===11){
            cpf.value+='-'
        }
    })

    let invalido = 0;
        
    
    //verifica se o nome esta vazio
    if(nameInput.value===""){
        alert("Por favor, preencha o seu nome");
        invalido = 1;
    } else if(passwordInput.value===""){
        // Verifica se a senha esta vazia
        alert("Por favor, preencha a sua senha");
        invalido = 1;
    } else if(cpfInput.value===""){
        //verifica se o cpf esta vazio
        alert("Por favor, preencha o seu cpf");
        invalido = 1;
    } else if(dataInput.value===""){
        //verifica se a data de nascimento esta vazia
        alert("Por favor, preencha sua data de nascimento");
        invalido = 1;
    } else if(emailInput.value === "" || !isEmailValid(emailInput.value)){
        // verifica se o email esta vazio
        alert("Por favor, preencha o seu e-mail");
        invalido = 1;
    } else if(telefoneInput.value===""){
        //verifica se o telefone esta vazio
        alert("Por favor, preencha o seu telefone");
        invalido = 1;
    } else if(cidadeInput.value===""){
        //verifica se a cidade esta vazia
        alert("Por favor, preencha a sua cidade")
        invalido = 1;
    } else if(bairroInput.value===""){
        // verifica se o bairro esta vazio
        alert("Por favor, preencha a seu bairro")
        invalido = 1;
    } else if(enderecoInput.value===""){
        // verifica se o endereço esta preenchido
        alert("Por favor, preencha a seu endereço")
        invalido = 1;
    } else if(descricaoInput.value===""){
        // verifica se a descrição esta preenchido
        alert("Por favor, preencha a sua descrição")
        invalido = 1;
    } else if(!validatePassword(passwordInput.value, 8)){
        //verifica se a senha é valida
        alert("A senha precisa de no mínimo 8 digitos")
        invalido = 1;
    } else if(!validatecpf(cpfInput.value, 11)){
        // verifica se o cpf é válido
        alert("O CPF precisa de no minimo 11 números ou CPF ja esta cadastrado")
        invalido = 1;
    } else if(!validatedata(dataInput.value, 8)){
        alert("A data precisa de no minimo 8 números")
        invalido = 1;
    }

    

    // Crie o objeto JSON no formato desejado
    // Se todos os campos estiverem corretos envie o form
    const usuario = {
        "id": id,
        "Nome": nameInput.value,
        "Senha": passwordInput.value,
        "CPF": cpfInput.value,
        "DD/MM/AA": dataInput.value,
        "Email": emailInput.value,
        "Telefone": telefoneInput.value,
        "Cidade": cidadeInput.value,
        "Bairro": bairroInput.value,
        "Endereço": enderecoInput.value,
        "Descrição": descricaoInput.value
    };


    if (invalido == 0){

        console.log(JSON.stringify(usuario));
        const url = "https://jsonserveradotepet--jjcribeiro.repl.co/user"
        fetch(url, {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify(usuario),
        })
        .then(response => response.json())
        .then(data => {
            console.log('Dados enviados com sucesso:', data);
        })
        .catch(error => {
            console.error('Erro ao enviar dados:', error);
        });         

    }   
    
}

//Função que valida e-mail
function isEmailValid(email){

    //cria uma regex para validar o email
    const emailRegex= new RegExp(
        //usuario12@host.com
        /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/
    );
    
    if(emailRegex.test(email)){
        return true;
    }
    return false;
}

//Função que valida a senha
function validatePassword(password,minDigits){
    if(password.length>=minDigits){
        //senha válida
        return true;
    }
    return false;
}

// função que valida o cpf
function validatecpf(cpf,maxDigits){
    if(cpf.length>=maxDigits){
        //cpf válido
        const url = "https://jsonserveradotepet--jjcribeiro.repl.co/user"
        fetch(url)
        .then(response => response.json())
        .then(users => {          
            
            for (let i = 0; i < users.length; i++) {
                let user = users[i];
                if(user.CPF === cpf){
                    return false
                }

            }
            return true;

        })
        
        
    }
    
}

// função que valida a data
function validatedata(data,maxDigits){
    if(data.length>=maxDigits){
        //data válida
        return true;
    }
    return false;
}

function login2 (event){
    event.preventDefault();
    const url = "https://jsonserveradotepet--jjcribeiro.repl.co/user"
    // Obtenha os valores do formulário
    const email = document.getElementById('email-box').value;
    const senha = document.getElementById('senha-box').value;

    
    // Construa o objeto de dados a ser enviado para o servidor
    
    fetch(url)
        .then(response => response.json())
        .then(users => {
            console.log(users);
            let idx = users.findIndex(elem => elem.Email == email)
            let user = users[idx];
            
            if(email === user.Email){
                if(senha===user.Senha){
                    console.log(user.id);
                    
                    const url = "https://jsonserveradotepet--jjcribeiro.repl.co/login/0"
                    fetch(url, {
                        method: 'PATCH',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({
                            user_id: user.id,
                        }),
                    })
                    .then(response => response.json())
                    .then(data => {
                        console.log('Dados enviados com sucesso:', data);
                        window.location.href = '../../index.html';
                    })
                    .catch(error => {
                        console.error('Erro ao enviar dados:', error);
                    });       
                } else {
                    alert("Senha incorreta.");
                }
            } else {
                alert("Email não cadastrado.");
            }
            
    });

    return false;
  }

// ----------- ADD PET --------------------

function cadastrar_pet(event) {
    event.preventDefault();
    
    const form = document.querySelector("#formulario");
    const nomeInput = document.querySelector("#nome");
    const fotosInput = document.querySelector("#fotos");
    const racaInput = document.querySelector("#raca");
    const aniversarioInput = document.querySelector("#aniversario");
    const generoMachoInput = document.querySelector("#macho");
    const generoFemeaInput = document.querySelector("#femea");
    const vacinadoSimInput = document.querySelector("#vacinadoSim");
    const vacinadoNaoInput = document.querySelector("#vacinadonao");
    const peso1Input = document.querySelector("#peso-1-5kg");
    const peso2Input = document.querySelector("#peso-6-10kg");
    const peso3Input = document.querySelector("#peso-11-15kg");
    const peso4Input = document.querySelector("#peso-15kg");
    const descricaoInput = document.querySelector("#descricao");

    // Restante do código permanece o mesmo até a criação do objeto JSON
    
    peso ="1-5kg"

    let invalido = 0;

    if (peso1Input.checked){
        const peso = "1-5Kg";
    } else if (peso2Input.checked) {
        const peso = "6-10Kg";
    } else if (peso3Input.checked) {
        const peso = "11-15Kg";  
    } else if (peso4Input.checked) {
        const peso = "+15Kg";
    } else {
        const peso = "";
    }   


    

    

    const url2 = "https://jsonserveradotepet--jjcribeiro.repl.co/login/0"
    fetch(url2)
    .then(response => response.json())
    .then(login => {
        
        const userId = login.user_id;

        if(userId!=-1){
            
            if(nomeInput.value===""){
                alert("Por favor, preencha o nome.");
                invalido = 1;
            } else if(racaInput.value===""){
                alert("Por favor, preencha a raça.");
                invalido = 1;
            } else if(aniversarioInput.value===""){
                alert("Por favor, preencha a data de nascimento");
                invalido = 1;
            } else if(generoMachoInput.value==false && generoFemeaInput.value == false){
                alert("Por favor, selecione o gênero.");
                invalido = 1;
            } else if(vacinadoSimInput.value==false && vacinadoNaoInput.value == false){
                alert("Por favor, informe sobre a vacinação.");
                invalido = 1;
            } else if(descricaoInput.value===""){
                alert("Por favor, selecione o gênero.");
                invalido = 1;
            }

            if (invalido == 0){

                const pet = {
                    "user_id": userId,
                    "nome": nomeInput.value,
                    "raca": racaInput.value,
                    "data": aniversarioInput.value,
                    "genero": generoMachoInput.checked ? "Macho" : "Fêmea",
                    "vacinado": vacinadoSimInput.checked ? "Sim" : "Não",
                    "peso": peso,
                    "descricao": descricaoInput.value,
                    "foto": [
                        "https://i.ibb.co/Vvn5Ky6/1.png",
                        "https://i.ibb.co/2jq1Yyd/2.png",
                        "https://i.ibb.co/tMX23pX/3.png",
                        "https://i.ibb.co/0Q8FdWy/4.png",
                        "https://i.ibb.co/CnF0TQR/5.png",
                        "https://i.ibb.co/yW35Yc7/6.png",
                        "https://i.ibb.co/5xPh8d9/7.png",
                        "https://i.ibb.co/ykdQ66W/8.png",
                        "https://i.ibb.co/jfhXdV9/9.png",
                        "https://i.ibb.co/PDgwkRz/10.png",
                        "https://i.ibb.co/JpzwL9J/11.png",
                        "https://i.ibb.co/YWLWw4H/12.png",
                        "https://i.ibb.co/qrKpbDc/p.png",
                        "https://i.ibb.co/dj249jr/s.png",
                        "https://i.ibb.co/WHY2KjV/c.png"
                    ],
                    "doado": false
                };
            
                // Restante do código permanece o mesmo
        
            
                console.log(JSON.stringify(pet));
                const url = "https://jsonserveradotepet--jjcribeiro.repl.co/pets"
                fetch(url, {
                    method: 'POST',
                    headers: {
                    'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(pet),
                })
                .then(response => response.json())
                .then(data => {
                    console.log('Dados enviados com sucesso:', data);
                    alert("Pet cadastrado com sucesso!");
                    window.location.href = '../../index.html';
                })
                .catch(error => {
                    console.error('Erro ao enviar dados:', error);
                });         
            
            }

        } else {

            alert("Faça login para doar um Pet.");
        }
        });

    
    
}

function nome_login(){

        
    const url = "https://jsonserveradotepet--jjcribeiro.repl.co/login/0"
    
    fetch(url)
    .then(response => response.json())
    .then(login => {
        
        const userId = login.user_id;
                        
        if(userId != -1){

            const url2 = "https://jsonserveradotepet--jjcribeiro.repl.co/user/"
            fetch(url2)
            .then(response => response.json())
            .then(users => {
                let idx = users.findIndex(elem => elem.id == userId)
                let user = users[idx];
                
                str= user.Nome.split(' ')[0]
                document.querySelector('#nome_login').innerHTML=str
                document.querySelector('#nome_login').setAttribute('href','../../index.html');
                document.querySelector('#sair_login').innerHTML=`<a class="navbar-brand ps-3 " href="../../index.html" id="sair" onclick="sair_login(event)">Sair</a>`
            
            });
        }
    });   
} 

function sair_login(event){
    event.preventDefault();
    
    //alert("Saindo de sua conta");
    const url = "https://jsonserveradotepet--jjcribeiro.repl.co/login/0"
    fetch(url, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            user_id: -1,
        }),
        
    }).then(data => {
                window.location.href = '../../index.html';
                console.log('Dados enviados com sucesso:', data);
            })
            .catch(error => {
                console.error('Erro ao enviar dados:', error);
            });  
}

