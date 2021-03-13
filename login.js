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


// console.log("si wey");
}else{
    alert("usuario y la clave incorrecta")
}
//fin
