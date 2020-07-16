let grati = +prompt("¿Cuánto será su gratificación de Diciembre?");
if(grati<10000){
    console.log(` Te tendras que conformar con un par de zapatos, dos camisas y dos pantalones`);
}else if(grati >=10000 && grati<20000){
    console.log(`Te compraras dos pares de zapatos, tres camisas y tres pantalones`);
}else if(grati >=20000 && grati<50000){
    console.log(`Te compraras una grabadora, tres pares de zapatos,cinco camisas y cinco pantalones`);
}else{
    console.log(`Te compraras un un modular, tres pares de zapatos, cinco camisas y cinco pantalones.`);
}