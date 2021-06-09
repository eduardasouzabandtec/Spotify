let divAlbum = document.querySelector("#albg");
let dispo = divAlbum.style.display;
let input = document.querySelector("#options");
input.addEventListener("keyup",buscar);
let dadosAlbum = [
    {
        titulo: "Lagrimas do tubarão",
        img: "/assets/tubarao.jfif",
        cantor: "MC ryan Sp",
    }, {
        titulo: "Festa Linda",
        img: "/assets/festa-linda.jfif",
        cantor: "MC Kapela",
    }, {
        titulo: "Balança",
        img: "/assets/drika.jfif",
        cantor: "MC Dricka",
    }, {
        titulo: "Baião de dois",
        img: "/assets/luis.jfif",
        cantor: "Luiz Gonzaga",
    }, {
        titulo: "Fala mais",
        img: "/assets/fala-mais.jpg",
        cantor: "MC Dricka",
    }
]

function criarCard(dados) {
    divAlbum.innerHTML += `
<div class="album">
        <img src="${dados.img}" class="img-album" alt="">
        
            <label class="name" for="">${dados.titulo}</label>
            <label  class="artist" for=""> ${dados.cantor}</label>    
        
    </div>
`
}


    function buscar() {
        let achado = dadosAlbum.map(function (element) {
            if (element.titulo === input.value || element.cantor === input.value) {
                return criarCard(element)
            } 
        });
        return achado
    }


