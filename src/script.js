const btnEncrypt = document.getElementById('btnEncrypt');
const btnDecrypt = document.getElementById('btnDecrypt');
const outputText = document.getElementById('outputText');
const btnCopy = document.getElementById('btnCopy');
const msjCopiado = document.getElementById('msjCopiado');

const encrypt = () => {
    const texto = document.getElementById('inputText').value;

    if (texto == "") {
        alert('Por favor, ingrese un texto a encriptar.');
    }

    //Se crea y compone un nuevo Array con todas las letras ingresadas.
    const nuevoArray = [];
    for (i = 0; i < texto.length; i++) {
        nuevoArray[i] = texto.slice(i, i + 1);
    }

    //Text encrypting
    const encryptedText = [];

    for (i = 0; i < nuevoArray.length; i++) {
        if (nuevoArray[i] == 'e') {
            encryptedText[i] = 'enter';
        }
        else if (nuevoArray[i] == 'i') {
            encryptedText[i] = 'imes';
        }
        else if (nuevoArray[i] == 'a') {
            encryptedText[i] = 'ai';
        }
        else if (nuevoArray[i] == 'o') {
            encryptedText[i] = 'ober';
        }
        else if (nuevoArray[i] == 'u') {
            encryptedText[i] = 'ufat';
        } else {
            encryptedText[i] = nuevoArray[i]
        }
    };

    //Se muestra el texto en el div de la derecha
    outputText.innerHTML = encryptedText.join('');
}

const decrypt = () => {
    const texto = document.getElementById('inputText').value;

    if (texto == "") {
        alert('Por favor, ingrese un texto a desencriptar.');
    }

    // se reeplazan los valores.  
    const decrypted = texto
        .replaceAll(/enter/g, 'e')
        .replaceAll(/imes/g, 'i')
        .replaceAll(/ai/g, 'a')
        .replaceAll(/ober/g, 'o')
        .replaceAll(/ufat/g, 'u');

    //Se muestra el texto en el div de la derecha.
    outputText.innerHTML = decrypted;
};

const copyText = () => {
    msjCopiado.style.display = 'block';
    navigator.clipboard.writeText(outputText.innerHTML);
    msj = 'Texto copiado!'
    //Mensaje de texto copiado.
    msjCopiado.innerHTML = msj;

    setTimeout(() => {
        msjCopiado.style.display = 'none';
    }, 3000);
}

//Evento
btnEncrypt.addEventListener('click', () => encrypt());
btnDecrypt.addEventListener('click', () => decrypt());
btnCopy.addEventListener('click', () => copyText());