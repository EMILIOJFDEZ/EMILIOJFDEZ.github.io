let menuVisible = false;

function mostrarOcultarMenu(){
    let nav = document.getElementById("nav");
    if(menuVisible){
        nav.classList.remove("responsive");
        menuVisible = false;
    }else{
        nav.classList.add("responsive");
        menuVisible = true;
    }
}

function seleccionar(){
    document.getElementById("nav").classList.remove("responsive");
    menuVisible = false;
}

function efectoHabilidades(){
    var skills = document.getElementById("skills");
    if (!skills) return;

    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;

    if(distancia_skills >= 200){
        let habilidades = document.getElementsByClassName("progreso");

        if (habilidades.length >= 10) {
            habilidades[0].classList.add("javascript");
            habilidades[1].classList.add("htmlcss");
            habilidades[2].classList.add("photoshop");
            habilidades[3].classList.add("wordpress");
            habilidades[4].classList.add("drupal");
            habilidades[5].classList.add("comunicacion");
            habilidades[6].classList.add("trabajo");
            habilidades[7].classList.add("creatividad");
            habilidades[8].classList.add("dedicacion");
            habilidades[9].classList.add("proyect");
        }
    }
}

window.onscroll = function(){
    efectoHabilidades();
};