// 1º Validar un IBAN

/*---------- Caso 1. Validar que se informa con dos letras, y los números
 correspondientes. ----------*/

// const pattern = /^[A-Z]{2}\d{22}$/;
// const values = ['ES6600190020961234567890'];

// values.forEach(value => {
//     console.log(`Regex "${value}"? ->`, pattern.test(value));
// });


/*---------- Caso 2. Permitir que se incluyan espacios en ciertas áreas, daremos por
 valida estás dos cadenas. ----------*/

// const pattern = /^[A-Z]{2}\d{2}(\s?\d{4}){5}$/;
// const values = ['ES6600190020961234567890', 'ES66 0019 0020 9612 3456 7890'];

// values.forEach(value => {
//     console.log(`Regex "${value}"? ->`, pattern.test(value));
// });


//---------- Caso 3. Extraer el código de páis y el dígito de control. ----------

// const pattern = /^([A-Z]{2})(\d{2})\s?\d{4}\s?\d{4}\s?\d{4}\s?\d{4}\s?\d{4}$/;
// const values = ['ES6600190020961234567890', 'ES66 0019 0020 9612 3456 7890'];

// values.forEach(value => {
//     console.log(`Regex "${value}"? ->`, pattern.exec(value));
// });


// 2º VALIDAR MATRÍCULA COCHE

/*---------- Caso 1. Validar una matrícula de coche moderna, esta compuesta por 4
 digitos y tres letras, patrones a validar. ----------*/

// const pattern = /^\d{4}(-|\s)?[A-Z]{3}$/;
// const values = ['2021 GMD', '2345-GMD', '4532BDB', '0320-AAA'];

// values.forEach(value => {
//     console.log(`Regex "${value}"? ->`, pattern.test(value));
// });


/*---------- Caso 2. Extraer por un lado la parte numérica y por otro las
 letras.----------*/

// const pattern = /^(\d{4})(-|\s)?([A-Z]{3})$/;
// const values = ['2021 GMD', '2345-GMD', '4532BDB', '0320-AAA'];
 
// values.forEach(value => {
//     console.log(`Regex "${value}"? ->`, pattern.exec(value));
// });


// OPCIONALES

// 1º EXTRAER IMÁGENES DE UN FICHERO HTML

//---------- Caso 1. De una sola linea extraer el contenido de src. ----------

// const pattern = /^<img\ssrc=".+\.png"\s?\/>$/i;
// const text = `<img
// src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
// />`;
 
// console.log(`Regex "${text}"->`, pattern.test(text));


/*---------- Caso 2. De un HTML extraer todos los src de todos los objetos
 img. ----------*/

// const pattern = /^<img\ssrc=".+\.(png|jpg)"\s?\/>$/igm;
// const text = `<html>
// <body>
// <img
// src="https://image.freepik.com/iconos-gratis/github-circular_318-10610.jpg"
// />
// <h1>ejemplo</h1>
// <img
// src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
// />
// </body>
// </html>`;
 
// console.log(`Regex "${text}"->`, pattern.test(text));


// 2º VALIDAR SINTAXIS TARJETA DE CRÉDITO

//---------- Caso 1. Validar los siguientes formatos. ----------

// const pattern = /^(50|51|52|53|54|55)\d{2}((\s|-)?\d{4}){3}$/;
// const values = ['5299 6400 0000 0000', '5299-6400-0000-0000', '5299640000000000'];

// values.forEach(value => {
//     console.log(`Regex "${value}"? ->`, pattern.test(value));
// });


//---------- Caso 2. Extraer cada grupo de cuatro digitos. ----------

// const pattern = /^((50|51|52|53|54|55)\d{2})((\s|-)?\d{4})((\s|-)?\d{4})((\s|-)?\d{4})$/;
// const values = ['5299 6400 0000 0000', '5299-6400-0000-0000', '5299640000000000'];

// values.forEach(value => {
//     console.log(`Regex "${value}"? ->`, pattern.exec(value));
// });


// 3º BUSCAR EXPRESIONES REGULARES

//---------- Caso 1. Comprobar si una clave es fuerte o no. ----------

// const moderatePassword = /[a-z][A-Z]\d\W/gm;
// const complexPassword = /[a-z][A-Z]\d{8}/gm;
// const moderateValue = 'aA1@';
// const complexValue ='aA12345678';

// console.log(moderatePassword.test(moderateValue));
// console.log(complexPassword.test(complexValue));


//---------- Caso 2. Validar que una URL esta bien formada. ----------

// const pattern = /^(http:\/\/)?(w{3}\.)?(lemoncode\.net)$/;
// const values = ['http://www.lemoncode.net', 'www.lemoncode.net', 'lemoncode.net'];

// values.forEach(value => {
//     console.log(`Regex "${value}"? ->`, pattern.test(value));
// });


//---------- Caso 2. Validar que un color en Hexadecimal esta bien formado. ----------

// const pattern = /^#([A-Z]|\d){6}$/i;
// const values = ['#445566', '#4a4a4a', '#Ac5544'];

// values.forEach(value => {
//     console.log(`Regex "${value}"? ->`, pattern.test(value));
// })