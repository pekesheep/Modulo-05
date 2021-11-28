const carrito = [
    {
        id: 198752,
        name: "Tinta DJ27 Color",
        price: 52.95,
        count: 3,
        premium: true
    },
    {
        id: 75621,
        name: "Impresora ticketera PRO-201",
        price: 32.75,
        count: 2,
        premium: true
    },
    {
        id: 54657,
        name: "Caja de rollos de papel para ticketera",
        price: 5.95,
        count: 3,
        premium: false
    },
    {
        id: 3143,
        name: "Caja de folios DIN-A4 80gr",
        price: 9.95,
        count: 2,
        premium: false
    }
];

var precio;
var total=0;

console.log("Productos: ")
for (i = 0; i < carrito.length; i++) {

    console.log(carrito[i].name);
}
console.log("\nEliminamos id 54657: ")
for (i = 0; i < carrito.length; i++) {
    if (carrito[i].id === 54657) carrito.splice(i, 1);
    console.log(carrito[i].name);
}
console.log("\n");
for (i = 0; i < carrito.length; i++) {
    precio = carrito[i].price * carrito[i].count;
    console.log("El precio de", carrito[i].name, "es:", precio);
    total += precio;
}
console.log("El precio total es:", total);
console.log("\n");

for (i = 0; i < carrito.length; i++) {
    if (carrito[i].premium === true) console.log("El producto", carrito[i].name, "es prime.");    
}