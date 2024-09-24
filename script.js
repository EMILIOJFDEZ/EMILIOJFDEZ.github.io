let menuVisible = false;
//Función que oculta o muestra el menu
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList.remove("responsive");
        menuVisible = false;
    }else{
        document.getElementById("nav").classList.add("responsive");
        menuVisible = true;
    }
}

function seleccionar(){
    //oculto el menu una vez que selecciono una opción
    document.getElementById("nav").classList.remove("responsive");
    menuVisible = false;
}

// Función que aplica las animaciones de las habilidades
function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].style.width = "60%";
        habilidades[1].style.width = "80%";
        habilidades[2].style.width = "40%";
        habilidades[3].style.width = "90%";
        habilidades[4].style.width = "60%";
        habilidades[5].style.width = "80%";
        habilidades[6].style.width = "70%";
        habilidades[7].style.width = "100%";
        habilidades[8].style.width = "75%";
        habilidades[9].style.width = "80%";
    }
}

// Detecto el scrolling para aplicar la animación de la barra de habilidades
window.onscroll = function(){
    efectoHabilidades();
}
