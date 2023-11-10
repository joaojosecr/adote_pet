function carregar() {
    fetch('pets.json')
        .then(response => response.json())
        .then(pets => {
            const container = document.querySelector("#pets-container");

            pets.map(pet => {


                


                const col = document.createElement("div");
                col.classList.add("col-xl-3");
                col.classList.add("col-lg-4");
                col.classList.add("col-md-6");
                col.classList.add("border");
                col.classList.add("border-0");
                
                // Converter o objeto JSON em uma string JSON
                const dadosString = JSON.stringify(pet);

                // Codificar a string JSON para que seja segura para URL
                const dadosCodificados = encodeURIComponent(dadosString);

                const a = document.createElement("a");
                a.classList.add("card");
                a.classList.add("mb-4");
                a.classList.add("bg-black");
                a.classList.add("bg-opacity-10");
                a.href = "pet.html?dados="+dadosCodificados;

                const img = document.createElement("img");
                img.classList.add("card-img-top");
                img.src = pet.foto+"/p.png";
                img.alt = "Card image cap";

                const div_body = document.createElement("div");
                div_body.classList.add("card-body");
                div_body.classList.add("border");
                div_body.classList.add("border-0");

                const nome = document.createElement("h4");
                nome.classList.add("card-title");
                nome.textContent = pet.nome;

                const raca = document.createElement("p");
                raca.textContent = "Raça: " + pet.raca 
                
                const genero = document.createElement("p");
                genero.textContent = "Sexo: " + pet.genero 
                
                const data = document.createElement("p");
                data.textContent = "Nascimento: " + pet.data 
                

                div_body.appendChild(nome);
                div_body.appendChild(raca);
                div_body.appendChild(genero);
                div_body.appendChild(data);

                a.appendChild(img);
                a.appendChild(div_body);

                col.appendChild(a);

                container.appendChild(col);
            });

        });
}

carregar()