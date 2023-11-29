document.addEventListener("DOMContentLoaded", ()=>{

    document.getElementById("nombre").addEventListener("blur", comprobarNombre);
    document.getElementById("apellidos").addEventListener("blur", comprobarApellido);
    document.getElementById("dni").addEventListener("blur", comprobarDNI);
    document.getElementById("username").addEventListener("focus", comprobarUsername);
    document.getElementById("password").addEventListener("input", comprobarPassword);


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

    let patron = /^[0-9]{8}[A-Z]$/;

    let letra = dni.value.charAt(8);

    let letras ="TRWAGMYFPDXB"

    let numeros = dni.value.substring(0,8); //eL VALUE POR DIOS

    let resto = numeros%23;

    if(dni.value.length!==9){
        dni.classList.add("invalido");
        mensajeDNI.innerText=" El DNI no tiene una longitud de 9 caracteres"
        return false;
    }

    if(letras.charAt(resto)!== letra){
        mensajeDNI.innerText=" La letra del DNI es incorrecta"
        dni.classList.add("invalido");
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

function comprobarUsername(e){

    let nombre = document.getElementById("nombre");
    let apellidos = document.getElementById("apellidos");
    let username = document.getElementById("username");

    if(username.value.trim() === ""){ //trim te borra todo del input y te loc ompara con lo de los espacios
        let sugerencia = nombre.value.charAt(0).toLowerCase() + apellidos.value.split(" ").join("").toLowerCase();
        return username.value = sugerencia;
    }else{
        return true;
    }
}

function comprobarPassword(e){

    let password = document.getElementById("password");
    let mensajePassword = document.getElementById("mensajePassword")

    let patron = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm 

    if(!patron.test(password.value)){

        if(password.value.length <8){
            mensajePassword.innerText="La contraseña ha de tener mínimo 8 caracteres"    
        }else if (!/[a-z]/.test(password.value)){
            mensajePassword.innerText="La contraseña tiene que contener mínimo una minúscula"
        }else if(!/[A-Z]/.test(password.value)){
            mensajePassword.innerText="La contraseña tiene que contener mínimo una mayúsucla"
        }else if(!/\d/.test(password.value)){
            mensajePassword.innerText="La contraseña tiene que contener por lo menos un número"
        }else{
            mensajePassword.innerText="El formato es inválido"
        }
        password.classList.add("invalido");
        return "false";

    }else{
        mensajePassword.innerText="";
        password.classList.remove("invalido");
        return true;
    }

   

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
