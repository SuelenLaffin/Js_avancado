$("#buscar").click(
    function () {
        var cep = $("#cep").val();

        $.ajax(
            {
                url: "https://viacep.com.br/ws/" + cep + "/json/",
                type: "get",
                success: function (resposta) {
                    console.log(resposta);
                    // let p= $("<p></p>");
                    // p.text(resposta.logradouro + " - " + resposta.bairro + " / " + resposta.localidade)
                    // $("#resultado").append(p);

                    $('<p>',
                        {
                            text: resposta.logradouro + " - "+ resposta.bairro+ " / "+ resposta.localidade,
                            class:"text-alert"
                        }
                    ).appendTo('#resultado');



                },
                error: function (erro) {
                    console.warn(erro);
                }
            }

        );
    }
);


