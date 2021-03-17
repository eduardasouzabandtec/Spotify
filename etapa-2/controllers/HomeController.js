var divAlbum = document.querySelector("#albg");
let dadosAlbum = [
    {
        titulo: "Lagrimas do tubarão",
        img: "/assets/tubarao.jfif",
        cantor: "MC ryan Sp",
    },{
        titulo: "Festa Linda",
        img: "/assets/festa-linda.jfif",
        cantor: "MC Kapela",
    },{
        titulo: "Balança",
        img: "/assets/drika.jfif",
        cantor: "MC Dricka",
    },{
        titulo: "Baião de dois",
        img: "/assets/luis.jfif",
        cantor: "Luiz Gonzaga",
    }
]

function criarCard(titulo,img,cantor){
return `
<div class="album">
        <img src="${img}" class="img-album" alt="">
        
            <label class="name" for="">${titulo}</label>
            <label  class="artist" for=""> ${cantor}</label>    
        
    </div>
`
}

function teste(){ 
dadosAlbum.forEach (dados=>{
    divAlbum.innerHTML += criarCard(dados.titulo,dados.img,dados.cantor) 
   
})};

