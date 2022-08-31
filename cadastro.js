window.alert('CADASTRO DE PEÇAS')
let cont = 0;
while(cont < 10){
    let nomeDaPeça = window.prompt("Nome da peça:");
    let peso = window.prompt("Peso da peça:"); 
    if(peso <= 100){
    cont ++;
    alert('A peça ' + nomeDaPeça + ' foi cadastrado com sucesso!');
    }else{
    alert('O cadastro da peça ' + nomeDaPeça + ' não poderá ser efetuado');
    }
window.alert(cont + ' peças cadastradas até o momento!'); 
}
window.alert('Não será mais possível cadastrar nenhuma peça!')