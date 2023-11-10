function exibePets() {
    let str = ''



    fetch('db.json')
        .then(response => response.json())
        .then(db => {          
            
            for (let i = 0; i < db.pets.length; i++) {
                let pet = db.pets[i];
                str += `<div class="col-xl-3 col-lg-4 col-md-6 border border-0">
                    <a class="card mb-4  bg-opacity-10" href="pet.html?id=${pet.id}">
                        <img class="card-img-top" src = ${pet.foto}/p.png alt = ${pet.foto}/p.png   >
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

        })
}   

function exibeUnPet(id) {
    
    fetch('db.json')
        .then(response => response.json())
        .then(db => {
            let idx = db.pets.findIndex(elem => elem.id == id)
            let pet = db.pets[idx];
            let str =''
            str += `<div class="row">
            <!-- Descrição -->
            <div class="col-md-12 py-4 my-4">
                <div class="card flex-md-row mb-4 shadow-sm h-md-250">
                    <img id="foto" class="card-img-right flex-auto d-none d-lg-block d-md-block" alt="imagem" src="img/pets/${pet.nome}/p.png" style="max-width: 250px;" >
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
                        <button type="submit" class="btn border border-radius bg-black bg-opacity-10" data-toggle="modal" data-target="#myModal">Mostrar interesse</Button>
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
                    <img id="img1" src="img/pets/${pet.nome}/1.png" alt="Imagem 1">
                </div>
                <div class="carousel-item">
                    <img id="img2" src="img/pets/${pet.nome}/2.png" alt="Imagem 2">
                </div>
                <div class="carousel-item">
                    <img id="img3" src="img/pets/${pet.nome}/3.png" alt="Imagem 3">
                </div>
                <div  class="carousel-item">
                    <img id="img4" src="img/pets/${pet.nome}/4.png" alt="Imagem 4">
                </div>
                <div class="carousel-item">
                    <img id="img5" src="img/pets/${pet.nome}/5.png" alt="Imagem 5">
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



document.addEventListener("DOMContentLoaded", function () {
    
    var minhaAncora = document.getElementById('mostrar_interesse');
        
    // Adiciona um ouvinte de eventos para o clique
    minhaAncora.addEventListener('click', function(event) {
        
        // ENVIAR FORMS 
        

    });
})
