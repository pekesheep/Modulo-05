function suma() {
    if (document.getElementById("numericoUno").value === "" || document.getElementById("numericoDos").value === "") {
        document.getElementById("texto-resultado").innerHTML = "Uno de los campos está vacío";
        document.getElementById("valor-resultado").innerHTML = "";
    } else {
        var num1 = parseFloat(document.getElementById("numericoUno").value);
        var num2 = parseFloat(document.getElementById("numericoDos").value);

        document.getElementById("texto-resultado").innerHTML = "El resultado de la suma es ";
        document.getElementById("valor-resultado").innerHTML = num1 + num2;
    }
}

function resta() {
    if (document.getElementById("numericoUno").value === "" || document.getElementById("numericoDos").value === "") {
        document.getElementById("texto-resultado").innerHTML = "Uno de los campos está vacío";
        document.getElementById("valor-resultado").innerHTML = "";
    } else {
        var num1 = parseFloat(document.getElementById("numericoUno").value);
        var num2 = parseFloat(document.getElementById("numericoDos").value);

        document.getElementById("texto-resultado").innerHTML = "El resultado de la resta es ";
        document.getElementById("valor-resultado").innerHTML = num1 - num2;
    }
}

function multiplica() {
    if (document.getElementById("numericoUno").value === "" || document.getElementById("numericoDos").value === "") {
        document.getElementById("texto-resultado").innerHTML = "Uno de los campos está vacío";
        document.getElementById("valor-resultado").innerHTML = "";
    } else {
        var num1 = parseFloat(document.getElementById("numericoUno").value);
        var num2 = parseFloat(document.getElementById("numericoDos").value);

        document.getElementById("texto-resultado").innerHTML = "El resultado de la multiplicación es ";
        document.getElementById("valor-resultado").innerHTML = num1 * num2;
    }
}

function divide() {
    if (document.getElementById("numericoUno").value === "" || document.getElementById("numericoDos").value === "") {
        document.getElementById("texto-resultado").innerHTML = "Uno de los campos está vacío";
        document.getElementById("valor-resultado").innerHTML = "";
    } else {
        var num1 = parseFloat(document.getElementById("numericoUno").value);
        var num2 = parseFloat(document.getElementById("numericoDos").value);

        document.getElementById("texto-resultado").innerHTML = "El resultado de la división es ";
        document.getElementById("valor-resultado").innerHTML = num1 / num2;
    }
}