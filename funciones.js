
// copiarPortapapeles() : función encargada de copiar el contenido del textarea 
//      'muestraMensaje' en el portapapeles. 
//

function copiarPortapapeles(){
    //console.log("Entrando a copiar");
    var copiar = document.getElementById('muestraMensaje').innerHTML;

    navigator.clipboard.writeText(copiar)
        .then(() => {
        console.log("Texto copiado exitosamente...")
        alert("Texto copiado exitosamente")
    })
        .catch(err => {
        console.log('Hubo un error al copiar', err);
    })
 
}

// desencriptar: mediante un ciclo while se itera por el mensaje encriptado.
//     Como cada palabra encriptada comienza con su respectiva vocal, solo
//     se saltan los caracteres siguientes a la vocal. al final se agregan
//     al html con innerHTML.  

function desencriptar(){
    const mapa = new Map();
    mapa.set("e",4);
    mapa.set("i",3);
    mapa.set("a",1);
    mapa.set("o",3);
    mapa.set("u",3);

    var cadenaResultado = ""; 
    const mensaje = document.getElementById("mensaje").value;
    const avisoid = document.getElementById("avisoid");
    const mensajefinal = document.getElementById("muestraMensaje");
    if(mensaje != ""){
        var entradaSeparada = mensaje.split("");
        let iterador = 0;

        while(iterador<entradaSeparada.length){
            element = entradaSeparada[iterador];
            if(mapa.has(element)){
                cadenaResultado = cadenaResultado + element;
                iterador += 1 + mapa.get(element);

            }else{
                cadenaResultado = cadenaResultado + element;
                iterador++;
            }
        }
        console.log(cadenaResultado);
        avisoid.innerHTML = "El mensaje Desencriptado es:";
        mensajefinal.innerHTML = cadenaResultado;
        
    } 
}


// encriptar(): función de encriptar, lee la entrada del textarea y lo desco
//     mpone en un arreglo con 'split', caracter por caracter es revisado que 
//     pertenezca al ascii de las minusculas y el espacio. Al encontrar una 
//     vocal, mediante el mapa de tipo map, obtiene el valor a encriptar.

function encriptar(){
    const mapa = new Map();
    mapa.set("e","enter");
    mapa.set("i","imes");
    mapa.set("a","ai");
    mapa.set("o","ober");
    mapa.set("u","ufat");

    var cadenafinal = "";
    const entrada = document.getElementById("mensaje").value;
    const avisoid = document.getElementById("avisoid");
    const mensajefinal = document.getElementById("muestraMensaje");
    const btnCopiar = document.getElementById("btnCopiar");
    if (mensaje != ""){
        var entradaSeparada = entrada.split("");

        let iterador = 0;
        for(iterador; iterador<entradaSeparada.length; iterador++){
            element = entradaSeparada[iterador];
            if (((element.charCodeAt(0) > 96) && (element.charCodeAt(0) < 123))||(element.charCodeAt(0) == 32)){
                if(mapa.has(element)){
                    cadenafinal = cadenafinal + mapa.get(element);
                }else{
                    cadenafinal = cadenafinal + element;
                }        
                console.log("cadenaFinal= ",cadenafinal);
                avisoid.innerHTML = "El mensaje Encriptado es: ";
                mensajefinal.innerHTML = cadenafinal;
                btnCopiar.style.display = null;
                btnCopiar.style.display = "initial";


            }else{
                console.log("valor inválido");
                alert("Solo letras minúsculas y sin acentos o caracteres especiales");
                break;
                
            }
        }   
    }   
}

