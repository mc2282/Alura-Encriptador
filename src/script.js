const btnEncrypt = document.getElementById('btnEncrypt');
const btnDecrypt = document.getElementById('btnDecrypt');
const outputText = document.getElementById('outputText');
const btnCopy = document.getElementById('btnCopy');
const msjCopiado = document.getElementById('msjCopiado');
let divNotFound;
let divCreado = false;

const encrypt = () => {
    const texto = document.getElementById('inputText').value;

    if (texto == "") {
        alert('Por favor, ingrese un texto a encriptar.');
        showDivNotFound();
        hideOutputAndButton();
    }
    else {
        showOutputAndButton();
        hideDivNotFound();

        // Se crea y compone un nuevo Array con todas las letras ingresadas.
        const nuevoArray = [];
        for (i = 0; i < texto.length; i++) {
            nuevoArray[i] = texto.slice(i, i + 1);
        }
        // Se encripta el texto.
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
}

const decrypt = () => {
    const texto = document.getElementById('inputText').value;
    if (texto == "") {
        showDivNotFound();
        hideOutputAndButton();
        alert('Por favor, ingrese un texto a desencriptar.');
    } else {
        hideDivNotFound();
        showOutputAndButton();
        // se reeplazan los valores.  
        const decrypted = texto
            .replaceAll(/enter/g, 'e')
            .replaceAll(/imes/g, 'i')
            .replaceAll(/ai/g, 'a')
            .replaceAll(/ober/g, 'o')
            .replaceAll(/ufat/g, 'u');

        //Se muestra el texto en el div de la derecha.
        outputText.innerHTML = decrypted;
    }
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

const createNotFoundHTML = () => {
    const container_right = document.getElementById('container-right');

    // se crea un nuevo div.
    divNotFound = document.createElement("div");
    divNotFound.setAttribute("class", "divNotFound");

    // se crean dos párrafos.
    let p1 = document.createElement("p");
    let p2 = document.createElement("p");
    p1.setAttribute("class", "msjNotFoundp1");
    p2.setAttribute("class", "msjNotFoundp2");

    // a los párrafos se les agrega contenido.
    p1.innerHTML = 'Ningun mensaje fue encontrado';
    p2.innerHTML = 'Ingresa el texto que desees encriptar o desencriptar.';

    // el nuevo div se insertará en el div con el id container-right.
    container_right.append(divNotFound);

    // y se almacenan los p en el nuevo div.
    divNotFound.append(p1);
    p1.after(p2);
    divCreado = true;
}

const showDivNotFound = () => {
    divNotFound.style.display = 'block';
}

const hideDivNotFound = () => {
    divNotFound.style.display = 'none';
}

const hideOutputAndButton = () => {
    btnCopy.style.display = 'none';
    outputText.style.display = 'none';
}

const showOutputAndButton = () => {
    btnCopy.style.display = 'flex';
    outputText.style.display = 'flex';
}

//Eventos
btnEncrypt.addEventListener('click', () => encrypt());
btnDecrypt.addEventListener('click', () => decrypt());
btnCopy.addEventListener('click', () => copyText());

hideOutputAndButton();
createNotFoundHTML();