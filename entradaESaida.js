let entradaAtual = document.createElement('div');
entradaAtual.className = 'botoes'
document.body.append(entradaAtual);
let saidaAtual = document.createElement('div');
saidaAtual.className = 'saida'
document.body.append(saidaAtual);
function mudaSaida(){
  saidaAtual = document.createElement('div');
  saidaAtual.className = 'saida'
  document.body.append(saidaAtual);
}
function mudaEntrada(){
  entradaAtual = document.createElement('div');
  entradaAtual.className = 'botoes'
  document.body.append(entradaAtual);
}
function criaBotao(text,cb){
  let obj = document.createElement('button');
  obj.innerHTML = text;
  obj.className = 'botao';
  obj.onclick = () => {
    obj.style.backgroundColor = 'rgb(0, 55, 3)';
    cb();
  };
  entradaAtual.append(obj);
}
function escreve(text){
      mudaSaida();
  saidaAtual.innerHTML+=text;

}

function seleciona(names,cb,cb2){
    mudaEntrada();
  let stop = false;
  if(names.length>0){
  names.forEach( (name,i) => {
    criaBotao(name,() => {
      if(!stop){
        cb(name,i);
          stop = true;
      }
    });
  });
  } else{
    cb2();
  }

}
