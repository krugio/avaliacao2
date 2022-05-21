document.getElementById('login').addEventListener('click', entrar);



function entrar() {

    if (localStorage.getItem('usuarios') == undefined) {
        alert("senha ou usuario errados!");
        limpaCampos();
        return;


    }
    else {

        //Procuramos o usuario!
        let usuarios = JSON.parse(localStorage.getItem('usuarios'));


        let veriEmailSenha = usuarios.filter(ex => ex.email === document.getElementById('email').value && ex.senha === document.getElementById('senha').value);
        console.log(veriEmailSenha);

        if (veriEmailSenha.length > 0) {

            //Salvamos o usuatrio como temporarios e pegamos sua posicao na lista geral
            let posicao = usuarios.findIndex(el => el.email === document.getElementById('email').value);

            let usTemp = {
                usuario: veriEmailSenha[0].email,
                posicao: posicao

            }


            //Criamos a sessao do usuario! 
            sessionStorage.setItem("temp", JSON.stringify(usTemp));

            window.location.href = 'home.html';


        }
        else {
            alert("senha ou usuario errado");
            limpaCampos();
        }

    }

}


function limpaCampos() {

    document.getElementById('email').value = '';
    document.getElementById('senha').value = '';

}
