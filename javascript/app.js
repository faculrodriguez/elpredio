//Mensaje de Bienvenida

alert("Bienvenidos a El Predio Futbol y Padel")
console.log("El Predio Futbol y Padel, tu lugar para practicar tus deportes favoritos.")

//Log-In Usuario
while (true) {

    nombreUsuario = prompt("Ingrese su nombre de Usuario")
    if (nombreUsuario != "") 
    { break }
    else { alert("Ingrese un Usuario valido") }
}

alert(`Bienvenido ${nombreUsuario}`)

//Log-In Contraseña
const contraseñaCorrecta = "1234"
let contraseña = prompt("Ingrese su contraseña")

while (contraseña != contraseñaCorrecta) {
    alert("Contraseña incorrecta. Inténtelo de nuevo.");
    contraseña = prompt("Ingrese su contraseña:")
}
alert(`${nombreUsuario} has iniciado sesión correctamente.`)

//APP
let elegirDeporte;

while (true) {
    elegirDeporte = prompt("Elegi el deporte a practicar: \n 1. Futbol \n 2. Padel").toLowerCase();

    if (elegirDeporte === "futbol" || elegirDeporte === "1") {
        let horarioFutbol;
        while (true) {
            horarioFutbol = prompt("Elegi el horario de tu cancha de Futbol: \n 1. 18.00hs \n 2. 19.00hs \n 3. 20.00hs \n 4. 21.00hs");
            switch (horarioFutbol) {
                case "1":
                    alert("Has reservado tu cancha de futbol para las 18.00hs");
                    console.log("Has reservado tu cancha de futbol para las 18.00hs");
                    break;
                case "2":
                    alert("Has reservado tu cancha de futbol para las 19.00hs");
                    console.log("Has reservado tu cancha de futbol para las 19.00hs");
                    break;
                case "3":
                    alert("Has reservado tu cancha de futbol para las 20.00hs");
                    console.log("Has reservado tu cancha de futbol para las 20.00hs");
                    break;
                case "4":
                    alert("Has reservado tu cancha de futbol para las 21.00hs");
                    console.log("Has reservado tu cancha de futbol para las 21.00hs");
                    break;
                default:
                    alert("Horario de futbol no válido. Por favor, elige un horario correcto.");
                    continue;
            }
            break;
        }
        break;
    } else if (elegirDeporte === "padel" || elegirDeporte === "2") {
        let horarioPadel;
        while (true) {
            horarioPadel = prompt("Elegi el horario de tu cancha de Padel: \n 1. 18.00hs \n 2. 19.00hs \n 3. 20.00hs \n 4. 21.00hs");
            switch (horarioPadel) {
                case "1":
                    alert("Has reservado tu cancha de padel para las 18.00hs");
                    console.log("Has reservado tu cancha de padel para las 18.00hs");
                    break;
                case "2":
                    alert("Has reservado tu cancha de padel para las 19.00hs");
                    console.log("Has reservado tu cancha de padel para las 19.00hs");
                    break;
                case "3":
                    alert("Has reservado tu cancha de padel para las 20.00hs");
                    console.log("Has reservado tu cancha de padel para las 20.00hs");
                    break;
                case "4":
                    alert("Has reservado tu cancha de padel para las 21.00hs");
                    console.log("Has reservado tu cancha de padel para las 21.00hs");
                    break;
                default:
                    alert("Horario de padel no válido. Por favor, elige un horario correcto.");
                    continue;
            }
            break;
        }
        break;
    } else {
        alert("Por favor, elegi un deporte válido");
    }
}
