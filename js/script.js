$("#cep").on('input', () => {
    let listcep = $("#cep").val().split('') 
    console.log(listcep)
    if(listcep.length === 8){
    axios.get(`https://viacep.com.br/ws/${$("#cep").val()}/json/`)
    .then((response) =>{
        $("#loc").val(response.data.localidade);
        $("#logr").val(`${response.data.logradouro}, ${response.data.bairro}`)
        $("#uf").val(response.data.uf)
        $("#ddd").val(response.data.ddd)
    })
    .catch((error) =>{
        $(".val").val(error);

        })
    }     
});

