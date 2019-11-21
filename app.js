function salvar()
{

    var nome = document.getElementById('insert-nome').value;
    var email = document.getElementById('insert-email').value;
    var cpf = document.getElementById('insert-CPF').value;
    var dn = document.getElementById('insert-DN').value;

    var cliente = new Caderninho();
    cliente.Inserir(nome, email, cpf, dn);

        var banco = new AgendaUser();
        banco.save(cliente);

}

function procurar(cpf, id)
{
    var banco = JSON.parse(localStorage.getItem("Clientes"));

    inserir = new Caderninho();

    ord = inserir.Procurar(cpf);

    if(ord == -1)
    {
        alert("O cliente não está na agenda...");
    }
    else
    {

        if(id == "1")
        {

            document.getElementById('pegar').innerHTML = " ";

                document.getElementById('pegar').innerHTML += "<div><p>Nome: "+banco[ord].nome+"</p><p>E-mail: "+banco[ord].email+
                "</p><p>CPF: "+banco[ord].cpf+"</p><p>Nascimento: "+banco[ord].dn+"</p></div>";
        }

        if(id == "2")
        {
            document.getElementById('at_nome').value = banco[ord].nome;
            document.getElementById('at_email').value = banco[ord].email;
            document.getElementById('at_cpf').value = banco[ord].cpf;
            document.getElementById('at_dn').value = banco[ord].dn;
             
        }

        if(id == "3")
        {
            document.getElementById('del').className = "disabled";   
            document.getElementById('re_nome_disabled').value = banco[ord].nome;
            document.getElementById('re_email_disabled').value = banco[ord].email;
            document.getElementById('re_cpf_disabled').value = banco[ord].cpf;
            document.getElementById('re_nasc_disabled').value = banco[ord].dn;
             
        }
    }
}

function remover()
{

    var del = new Caderninho();
    del.Remover();

}


function atualizar(n, e, c, d)
{
    var atualiza = new Caderninho();
    atualiza.Atualizar(n, e, c, d);
}

function mostrar()
{
    var get = JSON.parse(localStorage.getItem("Clientes"));

    document.getElementById('listar').innerHTML = " ";
    
    var cont = 0;

        for(i = 0; i < get.length; i++)
        {

            cont++;

            document.getElementById('listar').innerHTML += "<div style = 'margin: 10vh' ><label> "+cont+"° </label><p>Nome: "+get[i].nome+"</p><p>E-mail: "+get[i].email+
            "</p><p>CPF: "+get[i].cpf+"</p><p>Nascimento: "+get[i].dn+"</p></div>";
        }
}


function apagar()
{
    document.getElementById('insert-nome').value = "";
    document.getElementById('insert-email').value = "";
    document.getElementById('insert-CPF').value = "";
    document.getElementById('insert-DN').value = "";
}

function voltar()
{
    document.getElementById('Inserir').className = "container_form";
    document.getElementById('Agenda').className = "invisivel";
    document.getElementById('Agenda').className = "invisivel";
    document.getElementById('Procurar').className = "invisivel";
    document.getElementById('Remover').className = "invisivel";
    document.getElementById('Editar').className = "invisivel";
 
}