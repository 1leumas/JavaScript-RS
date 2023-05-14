// let nomeDoAluno = prompt("Qual é o Seu nome?");
// let primeiraNota = Number(prompt("Qual é a Sua Primeira Nota?"));
// let segundaNota = Number(prompt("Qual é a Sua Segunda Nota?"));
// let terceiraNota = Number(prompt("Qual é a sua Terceira Nota?"));

// let media = (primeiraNota + segundaNota + terceiraNota) /3;
// media = media.toFixed(2);
// let resultado = media >= 6;

// if(resultado){
//     alert("Parabéns "+nomeDoAluno+ " Sua média foi de "+media);
// }else{
//     alert("Estude: "+media);
// }

// ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// // let listaDeCompras = [];
// // while(listaDeCompras.length < 10) {
// //     let item = prompt("Digite o "+ (listaDeCompras.length + 1) + " item do carrinho!");
// //     listaDeCompras.push(item);
// // }

// // console.log(String(listaDeCompras))
// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// // // const value = Math.floor(Math.random() * 10);
// // // let valueUser = Number(prompt("Tente adivinhar o número que estou pensando:"));
// // // var x = 1;

// // // if(valueUser == value){
// // //     alert("Parabéns!, você acertou o número de primeira!")
// // // }else{
// // //     while(valueUser != value){
// // //         let newUserValue = Number(prompt("Tente adivinhar novamente o número que estou pensando:"))
// // //         valueUser = newUserValue;
// // //         x++;
// // //     }
// // //     alert("Parabéns! voce acertou em "+x+ " tentativas");
// // // }

// //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// let itemCadastro;
// let option = 0;
// let items = [];

// while(option != 3){
//     option = Number(prompt(`Olá usuário! Digite a opção desejada:
//         1. Cadastrar um item na lista
//         2. Mostrar itens cadastrados
//         3. Sair do programa
//         `))

    // if(option == 1){
    //     itemCadastro = prompt("Digite um item para ser cadastrado:");
    //     items.push(itemCadastro);
    // }else if(option == 2){
    //     if(items.length == 0){
    //         alert("Não existem items cadastrados!")
    //     }else{
    //     alert("Os item cadastrados são: "+items.toString());
    //     }
    // }else if(option == 3){
    //     break;
    // }

//     switch(option){
//         case 1:
//             itemCadastro = prompt("Digite um item para ser cadastrado:");
//             items.push(itemCadastro);
//             break;
//         case 2:
//             if(items.length == 0){
//                 alert("Não existem items cadastrados!");
//             }else{
//                 alert("Os item cadastrados são: "+items.toString());
//             }
//             break;
//         case 3:
//             alert("Espero te ver em breve!");
//             break;
//         default:
//             alert("Opção Inválida!");
//             break;
//     }
// }

// /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// function calcularImc(peso, altura){
//     resultado = (peso / ((altura /100)**2)).toFixed(2);
//     return resultado;
// }



// let pacientes = [
//     { //paciente 1
//         nome: "Hyan",
//         idade: 23,
//         peso: 90,
//         altura: 180
//     },
//     { //paciente 2
//         nome: "Edinho",
//         idade: 19,
//         peso: 56,
//         altura: 175
//     },
//     { //paciente 3
//         nome: "Samuel",
//         idade: 21,
//         peso: 80,
//         altura: 180
//     },
//     { //paciente 4
//         nome: "Enrique",
//         idade: 24,
//         peso: 100,
//         altura: 190,
//     },
//     { //paciente 5
//         nome: "Nicolas",
//         idade:  18,
//         peso: 70,
//         altura: 190,
//     }
// ]

// for (let i = 0; i < pacientes.length; i++) {
//     alert("O Paciente " +pacientes[i].nome+" tem o IMC de: "+calcularImc(pacientes[i].peso, pacientes[i].altura));
// }

const numero = Number(prompt("Digite o seu numero:"));

function fizzBuzz(n) {
    for (var x=n; x <= n; x++){
    if( x % 3 && x % 5 ) {
        console.log("FizzBuzz");
    }else if(x % 3){
        console.log("Fizz");
    }else if(x % 5){
        console.log("Buzz");
    }else{
        console.log(x);
    }
}
}
    
fizzBuzz(numero)