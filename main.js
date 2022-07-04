let capital = prompt("Dime una capital europea!").toLowerCase();

switch (capital){
    case "paris": 
        alert(`${capital} es la capital de Francia.`);
        break;
    case "madrid": 
        alert(`${capital} es la capital de España.`);
        break;
    case "roma": 
        alert(`${capital} es la capital de Italia.`);
        break;
    case "londres": 
        alert(`${capital} es la capital de Inglaterra.`);
        break;
    case "amsterdam": 
        alert(`${capital} es la capital de Holanda.`);
        break;
    case "berlin": 
        alert(`${capital} es la capital de Alemania.`);
        break;
    default:
        alert(`No se de que pais es capital ${capital}`);
        break;
}


/* ----------------- */

let chocolate = parseInt(prompt("¿Cuántos chocolates tiene?"));
let gente = parseInt(prompt("¿Entre cuantas personas los quiere repartir?"));

for (let i=1; i<=gente; i++){
    let resultado = chocolate / i;
    console.log(`La ${i} persona va a recibir ${resultado} chocolates.`);
}

/* ------------------- */

let balones = 7;
let dato = parseInt(prompt("¿Cuantos balones de oro tiene Messi?"));

while (dato !== balones){
    alert(`Messi no tiene ${dato} balones de oro`);
    dato = parseInt(prompt("Ingresar nuevamente respuesta a: ¿Cuantos balones de oro tiene Messi?"));
}