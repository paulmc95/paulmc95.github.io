let menuVisible = false;

// Función que oculta o muestra el menu
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList="responsive";
        menuVisible = true;
    }
}

function seleccionar(){
    // Ocultar el menu una vez que se seleccione una opción
    document.getElementById("nav").classList="";
    menuVisible = false;
}

// Funcion que aplica las animaciones de las habilidades
function efectoHabilidades(){
    var skills = document.getElementById("skills");
    // window.innerHeight: Obtiene la altura de la pantalla
    // getBoundingClientRect : Obtiene el tamaño y position de un elemento en el formulario del cliente
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    // console.log('distancia_skills: '+distancia_skills)
    if(distancia_skills>=300 && distancia_skills<=900){
        // trae un arreglo con las clases que tengan progreso
        let habilidades = document.getElementsByClassName("progreso");
        // Se adicionará la clase javascript o html o css, etc, que ya esta en styles.css para que se active
        habilidades[0].classList.add("javascript");
        habilidades[1].classList.add("html");
        habilidades[2].classList.add("css");
        habilidades[3].classList.add("angular");
        habilidades[4].classList.add("comunicacionAsertiva");
        habilidades[5].classList.add("trabajoEquipo");
        habilidades[6].classList.add("capacidadSuperacion");
        habilidades[7].classList.add("iniciativa");
        habilidades[8].classList.add("proactividad");
    }
}


// Detecto el scrolling para aplicar la animacion de la barra de habilidades
window.onscroll = function(){
    efectoHabilidades();
}