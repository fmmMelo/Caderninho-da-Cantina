function view(at)
{
    if(at == "1")
    {   
        document.getElementById('Inserir').className = "container_form";
        document.getElementById('Agenda').className = "invisivel";
        document.getElementById('Procurar').className = "invisivel";
        document.getElementById('Remover').className = "invisivel";
        document.getElementById('Editar').className = "invisivel";
    }

    if(at == "2")
    {   
        document.getElementById('Procurar').className = "container_form";
        document.getElementById('Agenda').className = "invisivel";
        document.getElementById('Inserir').className = "invisivel";
        document.getElementById('Editar').className = "invisivel";
        document.getElementById('Remover').className = "invisivel";
    }


    if(at == "3")
    {   
        document.getElementById('Agenda').className = "container_form-listar";
        document.getElementById('Inserir').className = "invisivel";
        document.getElementById('Procurar').className = "invisivel";
        document.getElementById('Editar').className = "invisivel";
        document.getElementById('Remover').className = "invisivel";
        mostrar();
    }

    if(at == "4")
    {   
        document.getElementById('Editar').className = "container_form-listar";
        document.getElementById('Agenda').className = "invisivel";
        document.getElementById('Inserir').className = "invisivel";
        document.getElementById('Procurar').className = "invisivel";
        document.getElementById('Remover').className = "invisivel";

        
    }

    if(at == "5")
    {   
        document.getElementById('Editar').className = "invisivel";
        document.getElementById('Agenda').className = "invisivel";
        document.getElementById('Inserir').className = "invisivel";
        document.getElementById('Procurar').className = "invisivel";
        document.getElementById('Remover').className = "container_form-listar";
    }
}


var agenda = new Array();

var ord, inserir, i;

class AgendaUser
{
    save(cliente)
    {
        if(localStorage.length == 0){
            
            agenda.push(cliente);
            localStorage.setItem("Clientes", JSON.stringify(agenda));

        }
            else{
                inserir = JSON.parse(localStorage.getItem("Clientes"));
                inserir.push(cliente);
                localStorage.setItem("Clientes", JSON.stringify(inserir));
            }
    }
}


class Caderninho
{
    constructor()
    {
        this.nome;

        this.email;

        this.cpf;

        this.dn;
    }

    Inserir(nome, email, cpf, dn)
    {
        this.nome = nome;

        this.email = email;

        this.cpf = cpf;

        this.dn = dn; 
    }

    Procurar(x)
    {
        var dados = JSON.parse(localStorage.getItem("Clientes"));

        for(i = 0; i < dados.length; i++)
        {
            if(x == dados[i].cpf)
            {
                return i;
            }
        }

        return -1;
        
    }

    Remover()
    {
        var excluir = JSON.parse(localStorage.getItem("Clientes"));

            excluir.splice(ord, 1);

            localStorage.setItem("Clientes", JSON.stringify(excluir));

                alert("O cliente foi retirado da agenda!");
     }

    Atualizar(nome, email, cpf, dn)
    {
        var refresh = JSON.parse(localStorage.getItem("Clientes"));

            refresh[ord].nome = nome;

            refresh[ord].email = email;

            refresh[ord].cpf = cpf;

            refresh[ord].dn = dn;

                localStorage.setItem("Clientes", JSON.stringify(refresh));

                alert("Os dados do cliente foi atualizado com sucesso!");
    }

}

