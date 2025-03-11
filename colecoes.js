let num = [1,2,3,4,5];
console.log(num[2]);

let frutas = ["Maçã","Banana","Pera"];

//Adicionando itens
frutas.unshift("melão");
frutas.push("uva");


frutas.forEach((fruta, index) =>{
    console.log(`${index}: ${fruta}`);
});

console.log("-----------------------------------------------------------");
//removendo itens

frutas.pop(frutas);
frutas.shift(frutas);
frutas.splice(2);


frutas.forEach((fruta, index) =>{
    console.log(`${index}: ${fruta}`);
});

