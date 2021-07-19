//llenar inicio
const ultimos = document.querySelector('#contenido');
var ultidatos;
function llenarultimos(){
    console.log('llenando inicio');
    let url = 'https://evanzguti.github.io/Base-Datos/BaseDatos.json';
    ultimos.innerHTML = '';
    fetch(url)
    .then(respuesta => respuesta.json())
    .then(cont => {
        ultidatos = cont.map(anime => {
            ultimos.innerHTML += "<a onclick='Nid("+anime.id+")'><h3 id='codigo'>"+anime.id+"</h3><div class='item' id='selec'><img src ='"+anime.imagen+"' class='item-img'><div class='item-text'><h3>'"+anime.titulo+"'</h3><p>'"+anime.estado+"'</p><p>'"+anime.idioma+"'</p><p>'"+anime.caps.length/2+" capitulos'</p></div></div></a>";
        })
    })
}

//llenar latinos
const latinos = document.querySelector('#contenido2');
var latidatos;
function llenarlatino(){
    console.log('llenando latino');
    let url = 'https://evanzguti.github.io/Base-Datos/BaseDatos.json';
    latinos.innerHTML = '';
    fetch(url)
    .then(respuesta => respuesta.json())
    .then(cont => {
        cont.sort((a,b) => {
            if(a.titulo < b.titulo){
                return -1;
            }
            if(a.titulo > b.titulo){
                return 1;
            }
            return 0;
        })
        latidatos = cont.map(anime => {            
            if( anime.idioma == "Latino"){
                latinos.innerHTML += "<a onclick='Nid("+anime.id+")'><h3 id='codigo'>"+anime.id+"</h3><div class='item' id='selec'><img src ='"+anime.imagen+"' class='item-img'><div class='item-text'><h3>'"+anime.titulo+"'</h3><p>'"+anime.estado+"'</p><p>'"+anime.idioma+"'</p><p>'"+anime.caps.length/2+" capitulos'</p></div></div></a>";
            }
        })
    })
}

//llenar subtitulado
const subtitulado = document.querySelector('#contenido3');
var subdatos;
function llenarsubtitulado(){
    console.log('llenando subtitulado');
    let url = 'https://evanzguti.github.io/Base-Datos/BaseDatos.json';
    subtitulado.innerHTML = '';
    fetch(url)
    .then(respuesta => respuesta.json())
    .then(cont => {
        cont.sort((a,b) => {
            if(a.titulo < b.titulo){
                return -1;
            }
            if(a.titulo > b.titulo){
                return 1;
            }
            return 0;
        })
        subdatos = cont.map(anime => {
            if( anime.idioma == "Subtitulado"){
                subtitulado.innerHTML += "<a onclick='Nid("+anime.id+")'><h3 id='codigo'>"+anime.id+"</h3><div class='item' id='selec'><img src ='"+anime.imagen+"' class='item-img'><div class='item-text'><h3>'"+anime.titulo+"'</h3><p>'"+anime.estado+"'</p><p>'"+anime.idioma+"'</p><p>'"+anime.caps.length/2+" capitulos'</p></div></div></a>";
            }
        })
    });
}

//llenar lista de capitulos
const llenarfot = document.querySelector('#foto');
const llenarinf = document.querySelector('#desin');
const llenarcap = document.querySelector('#liscap');
var lisdatos;
var textgenero;
function listacap(Num){
    console.log('llenando lista de capitulos');
    let url1 = 'https://evanzguti.github.io/Base-Datos/BaseDatos.json';
    llenarfot.innerHTML = '';
    llenarinf.innerHTML = '';
    llenarcap.innerHTML = '';
    fetch(url1)
        .then(respuesta => respuesta.json())
        .then(cont => {
            lisdatos = cont.map(anime => {
                if(anime.id == Num){
                    console.log('Anime encontrado mostrando descripcion');
                    textgenero = anime.genero[0];
                    for(var j = 1; j < anime.genero.length; j++){
                        textgenero += ", " + anime.genero[j];
                    }
                    llenarfot.innerHTML += "<img class='izqui' src='"+anime.imagen+"'>";
                    llenarinf.innerHTML += "<h4 id='titdes'>"+anime.titulo+"</h4><aside>"+textgenero+"</aside>";
                    for(var i = 0; i < anime.caps.length; i+=2){
                        console.log('Lista de animes');
                        llenarcap.innerHTML += "<a onclick='idcap("+anime.caps[i]+","+anime.id+")'><div id='liscap'><p><span>"+"Capitulo "+anime.caps[i]+"</span></p></div></a>";
                    }
                }
            })
        })
}


function Nid(Num){
    console.log(Num);
    listacap(Num);
}

let numcap;
let codigos;
let nombre;
function idcap(ncap,nani){
    numcap = ncap;
    let url = 'https://evanzguti.github.io/Base-Datos/BaseDatos.json';
    fetch(url)
        .then(respuesta => respuesta.json())
        .then(cont => {
            lisdatos = cont.map(anime => {
                if(anime.id == nani){
                    nombre = anime.titulo;
                    codigos = anime.caps.slice();
                    veranime();
                }
            })
        })
   // console.log(codigos);
}

const llenartitu = document.querySelector('#reprotitu');
const llenarrepro = document.querySelector('#reprodu');
const llenarcapitu = document.querySelector('#reprocapi');
function veranime(){
    console.log(codigos);
    console.log(numcap);
    console.log(nombre);
    llenartitu.innerHTML = '';
    llenarrepro.innerHTML = '';
    llenarcapitu.innerHTML = '';
    llenartitu.innerHTML += "<h3 style='text-align: center'>"+nombre+"</h3>";
    llenarrepro.innerHTML += "<IFRAME SRC='https://sbembed4.com/e/uu8icqp0kwtm.html' FRAMEBORDER=0 MARGINWIDTH=0 MARGINHEIGHT=0 SCROLLING=NO allow=gyroscope allowfullscreen></IFRAME>";
    llenarcapitu.innerHTML += "<h4 style='text-align: center'>Capitulo "+numcap+"</h4>";
}

llenarultimos();
llenarlatino();
llenarsubtitulado();