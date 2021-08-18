    //GERAR LINK PARA WHATSAPP
    function GerarCode() {
        //PEGAR DADOS DE TELEFONE E COMENTÁRIO
        var code = document.getElementById('telefone').value;
        var comment = window.encodeURIComponent(document.getElementById('comentario').value);

        //ALERTA EM CASO DE NÃO DIGITAR O NÚMERO
        if (code == "") {
            window.alert("Digite Algum Número")
        } else {
            
            if (comment == "") {
                //SEM COMENTÁRIO
                document.getElementById('antes').style.display='none';
                document.getElementById('depois').style.display='block';
                document.getElementById('codigo').value = "https://api.whatsapp.com/send?phone=55" + code.replace(/[^\d]+/g,'');
                document.getElementById('telefone').value = "";
            } else {
                //COM COMENTÁRIO
                document.getElementById('antes').style.display='none';
                document.getElementById('depois').style.display='block';
                document.getElementById('codigo').value = "https://api.whatsapp.com/send?phone=55" + code.replace(/[^\d]+/g,'') + "&text=" + comment;
                document.getElementById('telefone').value = "";
                document.getElementById('comentario').value = "";
            }
            
        }
        

    }

    //GERAR OUTRO LINK
    function OutroCode() {
        document.getElementById('antes').style.display='block';
            document.getElementById('depois').style.display='none';


    }

    //COPIAR CÓDIGO
    function CopyCode() {
        //Seleciona a Input com o Link
        const inputTest = document.querySelector("#codigo");
        
        //Seleciona o Texto da Input com o Link
        inputTest.select();

        //Executa o comando de Copiar
        document.execCommand('copy');

        //Seleciona toast de confirmação
          var x = document.getElementById("snackbar");

          //Mostra a toast de confirmação
          x.className = "show";

          //Depois de 3 segundos apaga a toast de confirmação
          setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
                }