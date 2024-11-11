const hamBurger = document.querySelector(".toggle-btn");

hamBurger.addEventListener("click", function () {
  document.querySelector("#sidebar").classList.toggle("expand");
});

const jsonDados = [
{ //lista de dados - SEMPRE CONSTANTE
  "id":"#6548",
  "jogo":"Call of Duty",
  "data":"12/12/2023",
  "preco":"R$220,00",
  "metodo":"Crédito",
  "status":"Concluído"
}, 

{
  "id":"#6548",
  "jogo":"Battlefield",
  "data":"12/11/2023",
  "preco":"R$220,00",
  "metodo":"Débito",
  "status":"Concluído"
}, 

{
  "id":"#6548",
  "jogo":"Mario Bros",
  "data":"11/11/2023",
  "preco":"R$220,00",
  "metodo":"Crédito",
  "status":"Concluído"
}, 

{
  "id":"#6548",
  "jogo":"Overcooked ",
  "data":"09/11/2023",
  "preco":"R$220,00",
  "metodo":"Débito",
  "status":"Concluído"
}, 

{
  "id":"#6548",
  "jogo":"Roblox",
  "data":"09/11/2023",
  "preco":"R$220,00",
  "metodo":"Crédito",
  "status":"Concluído"
}, 

{
  "id":"#6548",
  "jogo":"Overwatch",
  "data":"09/11/2023",
  "preco":"R$227,00",
  "metodo":"Crédito",
  "status":"Concluído"
}, 

{
  "id":"#6548",
  "jogo":"GTA",
  "data":"09/11/2023",
  "preco":"R$222,00",
  "metodo":"Débito",
  "status":"Concluído"
}, 

{
  "id":"#6548",
  "jogo":"Rust",
  "data":"09/11/2023",
  "preco":"R$210,00",
  "metodo":"Crédito",
  "status":"Concluído"
},

{
  "id":"#6548",
  "jogo":"Halo",
  "data":"09/11/2023",
  "preco":"R$210,00",
  "metodo":"Crédito",
  "status":"Concluído"
}, 

{
  "id":"#6548",
  "jogo":"Batman",
  "data":"09/11/2023",
  "preco":"R$190,00",
  "metodo":"Débito",
  "status":"Concluído"
}, 

{
  "id":"#6548",
  "jogo":"Lego Batman",
  "data":"09/11/2023",
  "preco":"R$190,00",
  "metodo":"Débito",
  "status":"Concluído"
}, 

{
  "id":"#6548",
  "jogo":"Fallout",
  "data":"09/11/2023",
  "preco":"R$190,00",
  "metodo":"Débito",
  "status":"Concluído"
}, 

{
  "id":"#6548",
  "jogo":"Assassin's Creed",
  "data":"09/11/2023",
  "preco":"R$190,00",
  "metodo":"Débito",
  "status":"Concluído"
}, 

{
  "id":"#6548",
  "jogo":"Forza Horizon",
  "data":"09/11/2023",
  "preco":"R$190,00",
  "metodo":"Dédito",
  "status":"Concluído"
}, 

]

document.addEventListener("DOMContentLoaded", ()=> {
  let table = document.querySelector(".table-bg")
  console.log(table);
  
  let tbody = table.querySelector("tbody")  
  console.log(tbody);
  
  for(let i = 0; i < jsonDados.length; i++){
          
      tbody.innerHTML += `
      <tr class="white">
        <th scope="row" class="text-amarelo">${jsonDados[i].id}</th>
        <td>${jsonDados[i].jogo}</td>
        <td>${jsonDados[i].data}</td>
        <td>${jsonDados[i].preco}</td>
        <td>${jsonDados[i].metodo}</td>
        <td class="status">
              <p class="status-bg">${jsonDados[i].status}</p>
        </td>
      </tr>
      ` 
      ""
      ''
  }
})