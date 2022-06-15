/* 
- para comentar Shift + Alt + A. 
- console.group("Cuadrado"); 
- console.groupEnd() */
const pi = Math.PI

// Aqui interactuamos con el html
function perimetoCuadrado(lado) {

    return lado * 4;
}

function areaCuadrado(lado) {
    return lado ** 2;
}


function calcularPerimetroCuadrado() {
    const input = document.getElementById("entradaCuadrado");
    const value = input.value

    const perimetro = perimetoCuadrado(value)
    document.getElementById("ingresarCuadrado").innerHTML = perimetro

}

function calcularAreaCuadrado() {
    const input = document.getElementById("entradaCuadrado");
    const value = input.value

    const area = areaCuadrado(value)

    document.getElementById("ingresarCuadrado").innerHTML = area
}

/* area de triangulo */

function perimetroTriangulo(ladoTringulo1, ladoTringulo2, baseTringulo) {
    return ladoTringulo1 + ladoTringulo2 + baseTringulo
}



function calcularPerimetroTriangulo() {
    const ladoTringulo1 = document.getElementById("ladoTringulo1").value
    const ladoTringulo2 = document.getElementById("ladoTringulo2").value
    const baseTringulo = document.getElementById("baseTringulo").value

    const perimetro = perimetroTriangulo(ladoTringulo1, ladoTringulo2, baseTringulo)

    document.getElementById("ingresarTriangulo").innerHTML = perimetro
}

function areaTriangulo(baseTringulo, alturaTringulo) {
    return (baseTringulo * alturaTringulo) / 2;
}
function calcularAreaTriangulo() {
    const baseTringulo = document.getElementById("baseTringulo").value
    const alturaTringulo = document.getElementById("alturaTringulo").value

    const area = areaTriangulo(baseTringulo, alturaTringulo)

    document.getElementById("ingresarTriangulo").innerHTML = area

}

/* Operaciones Cirulo */

function diametroCiculo(radio) {
    return radio * 2;
}

function calculardiametroCirculo() {

    const radio = document.getElementById("areaCirculo").value
    const diametro = diametroCiculo(radio)
    document.getElementById("ponerCirculo").innerHTML = diametro

}

//pasamos

function perimetroCirculo(radio) {
    const diametro = diametroCiculo(radio)
    return diametro * pi
}
function calcularperimetroCirculo() {

    const radio = document.getElementById("areaCirculo").value
    const perimetro = perimetroCirculo(radio)
    document.getElementById("ponerCirculo").innerHTML = perimetro

}

//pasamos
function areaCirculo(radio) {
    return (radio ** 2) * pi
}
function calcularareaCirculo() {
    const radio = document.getElementById("areaCirculo").value
    const area = areaCirculo(radio)
    document.getElementById("ponerCirculo").innerHTML = area

}

function triánguloIsósceles(lado1, lado2, base) {
    if (lado1 == lado2 && lado1 != base && lado2 != base) {
        const altura = Math.sqrt((lado1 ** 2) - ((base ** 2) / 4))
        return altura
    }
    else {
        console.log("Los datos ingresados no estan correctos")
    }

    return
}

function funcionTriánguloIsósceles() {
    const lado1 = document.getElementById("lado1").value
    const lado2 = document.getElementById("lado2").value
    const base = document.getElementById("base").value

    if (lado1 == lado2 && lado1 != base && lado2 != base) {
        const altura = triánguloIsósceles(lado1, lado2, base)
        document.getElementById("ingresaralturaTI").innerHTML = altura
    }
    else {
        document.getElementById("ingresaralturaTI").innerHTML = "datos incorrectos"
    }

}