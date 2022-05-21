//Pegamos dados do usuario do sessionStorage
document.getElementById('emailUser').innerHTML = (JSON.parse(sessionStorage.getItem('temp'))).usuario;

//Pegamos a posicao do usuario do session e ja deixamos como variavel global
let posicaoX = JSON.parse(sessionStorage.getItem('temp')).posicao;

//Pegamos o numero de recados ja deste usuario!
let usuarios = JSON.parse(localStorage.getItem('usuarios'));
let totalMsg = usuarios[posicaoX].recados.length;
document.getElementById('totalMsg').innerHTML = totalMsg;



//=================================================================== 
//  Listamos todos os recados daquele usuario quando este conectou! \\
//===================================================================

let idRecado = "";
for (let p1 in usuarios[posicaoX].recados) {


  idRecado = document.createElement('tr');
  idRecado.innerHTML = `<td>${p1}</td>
                            <td>${usuarios[posicaoX].recados[p1].descricao}</td>
                            <td>${usuarios[posicaoX].recados[p1].recado}</td>
                            <td><button class='btn-sm btn-danger' onclick='apagar(${p1})'>APAGAR</button> <button class='btn-sm btn-primary' onclick='editar(${p1})'>EDITAR</button></td>
                           `;

  document.querySelector('#corpo').appendChild(idRecado);




}



//================================================================== 
// Escutando todos os clicks!
//==================================================================
document.querySelector('#adicionar').addEventListener('click', adicionar);
document.querySelector('#sair').addEventListener('click', sair);



//================================================================== 
// Funções!
//==================================================================

function sair() {
  let respx = confirm('Você realmente deseja sair do sistema?');

  if (respx) {
    sessionStorage.removeItem('temp');
    location.href = 'index.html';
  }
}

function editar(id) {

  let novaDescricao = prompt('Digite nova Descricao');
  let novoRecado = prompt('Digite o novo Recado');

  //pegamos a lista de ususarios


  usuarios[posicaoX].recados[id].descricao = novaDescricao;
  usuarios[posicaoX].recados[id].recado = novoRecado;

  localStorage.setItem('usuarios', JSON.stringify(usuarios));

  alert("Recado editado com sucesso!");

  location.reload();


}




function apagar(id) {

  let apaga = confirm("Deseja realmente apagar este recado?");

  if (apaga) {
    usuarios[posicaoX].recados.splice(id, 1);
    localStorage.setItem('usuarios', JSON.stringify(usuarios));
    location.reload();


  }


}

function adicionar() {
  let descricao = document.querySelector('#descricao').value;
  let recado = document.querySelector('#recado').value;


  if (descricao === '' || recado === '') {
    alert('Por favor preencha todos os campos para cadastrar os recados!');
    return;
  }


  //Salvando o recado do usuario Atual

  let novoRecado = {
    descricao: descricao,
    recado: recado

  }

  usuarios[posicaoX].recados.push(novoRecado);

  localStorage.setItem('usuarios', JSON.stringify(usuarios));
  alert("recado adicionado!");

  location.reload();

}

