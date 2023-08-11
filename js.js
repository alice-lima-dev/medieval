
 function Personagem() {
    var nome = document.getElementById("personagem").value;
    var classe = document.getElementById("vocacao").value;
    var server = document.getElementById("select-server").value;
    var cdd = document.getElementById("cidade").value;
    var email = document.getElementById("email").value;
    var senha = document.getElementById("senha").value 

    if (server.value === "" || classe.value === "" || server.value === "" || cdd.value === "" || email.value === "" || senha.value === "") {
        alert("bem vindo");
       
    }else{
        alert("Não")
    }
}

