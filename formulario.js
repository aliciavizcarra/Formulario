document.addEventListener("DOMContentLoaded", ()=>{

    document.getElementById("nombre").addEventListener("blur", comprobarNombre);
    document.getElementById("apellidos").addEventListener("blur", comprobarApellido);
    document.getElementById("dni").addEventListener("blur", comprobarDNI)


})

function comprobarNombre(e){
    
    let nombre = document.getElementById("nombre");

    const mensajeNombre= document.getElementById("mensajeNombre");

    if(nombre.value.length<3){
        nombre.classList.add("invalido");
        mensajeNombre.innerText=" El nombre no es válido porque tiene menos de 3 caracteres"
        return false;
    }

    
    let nombreTransformado = nombre.value.charAt(0).toUpperCase() + nombre.value.substring(1,nombre.value.length).toLowerCase();
    nombre.value= nombreTransformado;
   
    nombre.classList.remove("invalido");
    mensajeNombre.innerText="";
    return true;
}

function comprobarApellido(e){

    let apellido = document.getElementById("apellidos");

    const mensajeApellido= document.getElementById("mensajeApellido");

    if(apellido.value.length<3){
        apellido.classList.add("invalido");
        mensajeApellido.innerText=" El nombre no es válido porque tiene menos de 3 caracteres"
        return false;
    }

    let apellidos = apellido.value.split(" ");
    let apellidosModificados = apellidos.map(element=>{
        return element.charAt(0).toUpperCase() + element.substring(1).toLowerCase();
    })
    
    mensajeApellido.innerText="";
    apellido.value= apellidosModificados.join(" ");
    apellido.classList.remove("invalido");
    return true;
}

function comprobarDNI(e){

    let dni = document.getElementById("dni");

    let mensajeDNI = document.getElementById("mensajeDNI");

    let patron = /^[0-9]{8}/;


    if(!dni.value.length==9){

        dni.classList.add("invalido");
        mensajeDNI.innerText=" El DNI no tiene una longitud de 9 caracteres"
        return false;
    }

    if(!patron.test(dni.value)){
        dni.classList.add("invalido");
        mensajeDNI.innerText=" Los 8 primeros digitos han de ser numeros"
        return false;
    }

    mensajeDNI.innerText="";
    dni.classList.remove("invalido");
    return true;


}




//DNI{
    //meter letras en un array/string
    //se suman los numeros y se dividen entre 23
    //si el resto es 0 la letra que le corresponde es la T;
    //me voy al array de letras y comparo si la letra dada coincide con el resto;


//SI EL CAMPO IS CHECKED VERIFICO CON UN PATTERN QUE ESTE VALIDADO


//focus:cuando quiero escribir yo antes que el usuario (username)
//change solo se usa si ha habido cambios
//blur va a saltar siempre
//en el de la contraseña el input que checkea cada letra
