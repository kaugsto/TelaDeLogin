function ValidacaoBotao(){
    var email = document.querySelector('.InEmail').value;
    var senha = document.querySelector('.InSenha').value; 

    if (email == "" || senha == "") {
        alert("Por favor preencha todos os campos")
    }else{
        console.log("Parabéns você digitou todos os campos")
    }
}