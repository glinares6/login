/* // LOGIN EN JS BASICO
//inicio
// indtrucción al programa
let usuario =["pedro","luis","marco"]
let contraseña=["123","789"]
// console.log(usuario[0]);
// envio de datos por teclado a variables
// los datos escritos se almacenan en envioUser,envioClave
let envioUser= prompt("escriba el nmbre de usuario","")
let envioClave = prompt("escriba su  clave","")

// condición
// console.log(i);
if (envioUser) {
    if(envioUser==usuario[0]&&envioClave==contraseña[0]){
        // mensaje por pantalla
        alert("acceso permitido")
    }else if(envioUser==usuario[1]&&envioClave==contraseña[0]){
        // mensaje por pantalla
        alert("acceso permitido")     
    }else if(envioUser==usuario[2]&&envioClave==contraseña[1]){
            // mensaje por pantalla
            alert("acceso permitido")   
    }else{
        // mensaje por pantalla
        alert("acceso denegado")
      }

}else{
    alert("usuario y la clave incorrecta")
}
//fin
 */

// login con html-js basico
// usuarios con sus respectivas contraseñas
alert("Usuario 1:frank\ncontraseña:12\n\nUsuario2:jhon\nContraseña:12\n\nUsuario3:saul\ncontraseña:34")
// se guardan los usuaruios y contraseña en variables 
let usuario =["frank","jhon","saul"]
let contraseña = ["12","34"]

// se llama a sus imputs por medio de su id
const container = document.getElementById('container')

const inputUsuario = document.getElementById('inpUsuario')
const inputContraseña = document.getElementById('inpContraseña')
const btnEnvio= document.getElementById('btnEnvio')

// se limpian los campos al hacer click
// requerimiento no funcional
if(inputUsuario){
    inputUsuario.addEventListener('click',()=>{
        inputUsuario.value=""
    })
}
if(inputContraseña){
    inputContraseña.addEventListener('click',()=>{
        // inputContraseña.type="password"
        inputContraseña.value=""
    })
}

// Se introducen los datos por un formulario
// En el boton enviar se extraen los datos y se comparan
btnEnvio.addEventListener('click',e=>{
    // para que no salte a otra ruta si se requiere
    e.preventDefault();
    // Condicion
console.log(inputUsuario.value);
console.log(usuario[0]);
if(inputUsuario.value==usuario[0]&&inputContraseña.value==contraseña[0]){
   alert("aceesso permitido");
}else if(inputUsuario.value==usuario[1]&&inputContraseña.value==contraseña[0]){
    alert("aceesso permitido");
}else if(inputUsuario.value==usuario[2]&&inputContraseña.value==contraseña[1]){
    alert("acceso permitido")
}else{
    alert("no se realizo la autenticación");
}
inputUsuario.value=""
inputContraseña.value=""
    // alert('ingresaste')
})




// let diaSemana = prompt("escriba el dia de la semana","")
// console.log(parseInt(diaSemana));
// switch (parseInt(diaSemana)) {
//     case 1:console.log(" es lunes ");
//     break;
// case 2 :console.log(" es martes ");
//     break;
// case 3 : console.log(" es miercoles ");
//     break;
// case 4 : console.log(" es jueves ");
//     break;
// case 5 : console.log(" es viernes ");
//     break;
// case 6 : console.log(" es sabado ");
//     break;
// case 7 : console.log(" es domingo ");
//     break;
// default : console.log("error en los dias de la semana");;
// }
