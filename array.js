let meuarray = [];

//adicionando elementos ao final do array
meuarray.push(10);
meuarray.push(20);
meuarray.push(30);

// saída [10,20,30]
console.log(meuarray);

meuarray.push(40,50,60);

console.log(meuarray);

meuarray[2] = 35;
console.log(meuarray);

let elementoremovido = meuarray.pop();

console.log(elementoremovido);

console.log(meuarray);

let tamanhoarray = meuarray.length;

console.log(tamanhoarray);

