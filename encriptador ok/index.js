// eliminar acentos //
const removerAcentos = (str) => {
  return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
};

// entrada en el campo de texto //
document.getElementById("texto").addEventListener("input", function (event) {
  let input = event.target;
  let sanitizedValue = removerAcentos(input.value.toLowerCase()); // Eliminar acentos y convertir a minúsculas
  
  if (input.value !== sanitizedValue) {
    input.value = sanitizedValue; // Actualizar el valor del campo de texto
  }
});

function encriptar() {
  let texto = document.getElementById("texto").value;
  let tituloMensaje = document.getElementById("titulo-mensaje");
  let parrafo = document.getElementById("parrafo");
  let pass = document.getElementById("pass");

  let textoCifrado = texto
    .replace(/e/gi, "enter")
    .replace(/i/gi, "imes")
    .replace(/a/gi, "ai")
    .replace(/o/gi, "ober")
    .replace(/u/gi, "ufat");

  if (texto.length != 0) {
    document.getElementById("texto").value = textoCifrado;
    tituloMensaje.textContent = "Texto encriptado con éxito";
    parrafo.textContent = "";
    pass.src = "./img/encriptado_2.gif";
  
  } else {
    pass.src = "./img/pass.png";
    tituloMensaje.textContent = "Ningún mensaje fue encontrado";
    parrafo.textContent =
      "Ingresa el texto que deseas encriptar o desencriptar";
    swal("Ooops!", "Debes ingresar un texto", "warning");
  }
};

function desencriptar() {
  let texto = document.getElementById("texto").value;
  let tituloMensaje = document.getElementById("titulo-mensaje");
  let parrafo = document.getElementById("parrafo");
  let pass = document.getElementById("pass");

  let textoCifrado = texto

    .replace(/enter/gi, "e")
    .replace(/imes/gi, "i")
    .replace(/ai/gi, "a")
    .replace(/ober/gi, "o")
    .replace(/ufat/gi, "u");

  if (texto.length != 0) {
    document.getElementById("texto").value = textoCifrado;
    tituloMensaje.textContent = "Texto desencriptado con éxito";
    parrafo.textContent = "";
    pass.src = "./img/desencriptado.gif";
  } else {
    pass.src = "./img/pass.png";
    tituloMensaje.textContent = "Ningún mensaje fue encontrado";
    parrafo.textContent =
      "Ingresa el texto que deseas encriptar o desencriptar";
    swal("¡Atención!", "Debes ingresar un texto", "warning");
  }

  document.getElementById("texto").addEventListener("input", function (event) {
    const input = event.target;
    const sanitizedValue = input.value
      .toLowerCase()                    // Convierte a minúsculas
      .normalize("NFD")                 // Normaliza el texto
      .replace(/[\u0300-\u036f]/g, "")  // Elimina diacríticos
      .replace(/[^a-z\s]/g, "");        // Elimina todo excepto letras minúsculas y espacios

    if (input.value !== sanitizedValue) {
      input.value = sanitizedValue;
    }
  });
};

// Inicializa Clipboard.js para el uso de data-clipboard-target
new ClipboardJS('.boton-copiar');

var clipboard = new ClipboardJS('.boton-copiar');

clipboard.on('success', function(e) { //función para oir petición //
  swal('Excelente!', 'Se copio el texto al portapaples', 'warning'); //mensaje emergente, confirmando la operación//
    e.clearSelection(); //limpia el texto previamente copia//
});

clipboard.on('error', function(e) {
  swal('Precaución!', 'No se pudo copiar el texto', 'warning');
});