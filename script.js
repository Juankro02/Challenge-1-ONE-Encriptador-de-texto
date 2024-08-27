let textoResultado = document.getElementById("textoResultado");

function estadoInicial(){
    
}

function encriptar(){

    document.getElementById("esperandoResultado").style.display = "none";
    document.getElementById("resultado").style.display = "flex";
    //limpiar texto anterior
    let textoProcesado = "";

    //asignar el texto ingresado por el usuario a una variable
    let texto = document.getElementById("textoAProcesar").value;

    //realizar un sondeo de cada caracter y si es una vocal sumarla al string
    for(var i = 0; i < texto.length; i++){
        if(texto[i] == "a"){
            textoProcesado = textoProcesado + "ai"
        }
        else if(texto[i] == "e"){
            textoProcesado = textoProcesado + "enter"
        }
        else if(texto[i] == "i"){
            textoProcesado = textoProcesado + "imes"
        }
        else if(texto[i] == "o"){
            textoProcesado = textoProcesado + "ober"
        }
        else if(texto[i] == "u"){
            textoProcesado = textoProcesado + "ufat"
        }
        else{
            textoProcesado = textoProcesado + texto[i]
        }
    }

    //asignar el resultado a una variable para mostrarla
    textoResultado.innerHTML = textoProcesado;

}
function desencriptar(){

    document.getElementById("esperandoResultado").style.display = "none";
    document.getElementById("resultado").style.display = "flex";

    //limpiar texto anterior
    let textoProcesado = "";

    //asignar el texto ingresado por el usuario a una variable
    let texto = document.getElementById("textoAProcesar").value;

    //realizar un sondeo de cada caracter y si es una vocal sumarla al string
    for(var i = 0; i < texto.length; i++){
        if(texto[i] == "a"){
            textoProcesado = textoProcesado + "a"
            i = i+1;
        }
        else if(texto[i] == "e"){
            textoProcesado = textoProcesado + "e"
            i = i+4;
        }
        else if(texto[i] == "i"){
            textoProcesado = textoProcesado + "i"
            i = i+3;
        }
        else if(texto[i] == "o"){
            textoProcesado = textoProcesado + "o"
            i = i+3;
        }
        
        else if(texto[i] == "u"){
            textoProcesado = textoProcesado + "u"
            i = i+3;
        }
        else{
            textoProcesado = textoProcesado + texto[i];
        }
        
    }
    
    //asignar el resultado a una variable para mostrarla
    textoResultado.innerHTML = textoProcesado;

}

function copiarTexto() {
    // Obtén el elemento que contiene el texto a copiar
    let textoResultado = document.getElementById("textoResultado");
    
    // Crea un elemento de texto oculto
    let textarea = document.createElement("textarea");
    textarea.value = textoResultado.textContent; // Usa textContent para obtener solo el texto
    document.body.appendChild(textarea);
    
    // Selecciona el contenido del textarea
    textarea.select();
    textarea.setSelectionRange(0, 99999); // Para dispositivos móviles
    
    // Copia el contenido al portapapeles
    document.execCommand("copy");
    
    // Elimina el textarea del documento
    document.body.removeChild(textarea);
    
    // Opcional: Mostrar un mensaje de confirmación
    alert("Texto copiado al portapapeles!");
}
