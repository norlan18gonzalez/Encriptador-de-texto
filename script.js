const textoInput = document.getElementById('texto');
const encriptarButton = document.getElementById('encriptar');
const desencriptarButton = document.getElementById('desencriptar');
const resultadoElement = document.getElementById('resultado');

const boton = document.getElementById('copiar');
boton.style.visibility = 'hidden';


encriptarButton.addEventListener('click', () => {
    const texto = textoInput.value;
    const encriptado = encriptar(texto);
    const wrappedText = wrapText(encriptado, 40);
    resultadoElement.textContent = `Texto encriptado: ${wrappedText}`;

    // Hacer visible el botón
  const botonVisible = document.getElementById('copiar');
  botonVisible.style.visibility = 'visible';

  // Ocultar el objeto
  const objetoOcultar = document.getElementById('ocultar');
  objetoOcultar.style.visibility = 'hidden';
});

desencriptarButton.addEventListener('click', () => {
    const texto = textoInput.value;
    const desencriptado = desencriptar(texto);
    const wrappedText = wrapText(desencriptado, 40);
    resultadoElement.textContent = `Texto desencriptado: ${wrappedText}`;

    // Hacer visible el botón
  const botonVisible = document.getElementById('copiar');
  botonVisible.style.visibility = 'visible';

  // Ocultar el objeto
  const objetoOcultar = document.getElementById('ocultar');
  objetoOcultar.style.visibility = 'hidden';
});


// Copiar texto
const textoElement = document.getElementById('resultado');
const copiarButton = document.getElementById('copiar');

copiarButton.addEventListener('click', () => {
  const texto = textoElement.textContent;
  navigator.clipboard.writeText(texto).then(() => {
    console.log('Texto copiado al portapapeles');
  }).catch((error) => {
    console.error('Error al copiar texto:', error);
  });
});


function encriptar(texto) {
    // Implementar algoritmo de encriptación aquí
    // Por ejemplo, un simple Caesar Cipher
    const clave = 3;
    let encriptado = '';
    for (let i = 0; i < texto.length; i++) {
        const charCode = texto.charCodeAt(i);
        encriptado += String.fromCharCode(charCode + clave);
    }
    return encriptado;
}

function desencriptar(texto) {
    // Implementar algoritmo de desencriptación aquí
    // Por ejemplo, un simple Caesar Cipher
    const clave = 3;
    let desencriptado = '';
    for (let i = 0; i < texto.length; i++) {
        const charCode = texto.charCodeAt(i);
        desencriptado += String.fromCharCode(charCode - clave);
    }
    return desencriptado;
}

function wrapText(text, width) {
    const words = text.split(' ');
    let line = '';
    let result = '';
  
    for (let i = 0; i < words.length; i++) {
      if (line.length + words[i].length > width) {
        result += line + '\n';
        line = '';
      }
      line += words[i] + ' ';
    }
  
    result += line.trim();
    return result;
}

/*navigator.permissions.query('clipboard-write').then(permission => {
    if (permission.state === 'granted') {
      // El usuario ha dado permiso, se puede copiar el texto
      textarea.select();
      document.execCommand('copy');
    } else if (permission.state === 'denied') {
      // El usuario ha denegado el permiso, no se puede copiar el texto
      console.log('No se puede copiar el texto, el usuario ha denegado el permiso');
    } else {
      // El usuario no ha dado permiso, se solicita permiso
      permission.addEventListener('change', () => {
        if (permission.state === 'granted') {
          // El usuario ha dado permiso, se puede copiar el texto
          textarea.select();
          document.execCommand('copy');
        }
      });
    }
  });*/