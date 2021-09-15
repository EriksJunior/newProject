
$(document).ready(function () {
    $("#sidebar").mCustomScrollbar({
        theme: "minimal"
    });

    $('#dismiss, .overlay').on('click', function () {
        // hide sidebar
        $('#sidebar').removeClass('active');
        // hide overlay
        $('.overlay').removeClass('active');
    });

    $('#sidebarCollapse').on('click', function () {
        // open sidebar
        $('#sidebar').addClass('active');
        // fade in the overlay
        $('.overlay').addClass('active');
        $('.collapse.in').toggleClass('in');
        $('a[aria-expanded=true]').attr('aria-expanded', 'false');
    });
});



//função salvar cliente

document.querySelector('#salvar').addEventListener('click', (e) => {
    e.preventDefault()
    salvarCliente()
})

async function salvarCliente() {
    try {
        const nome = document.querySelector('#nome').value;

        const dadosDoFormulario = {
            nome: nome
        }
        //dadosDoFormulario deve ser sempre um objeto
        const resposta = await axios.post('/salvarCliente', dadosDoFormulario)

        document.querySelector('#id').value = resposta.data.id
        listarCliente()
    } catch {
        console.log('erro ao salvar')
    }

}

async function listarCliente() {
    try {
        //SEMPRE NA RESPOSTA DO AXIO VAI TER UMA PROPRIEDADE .DATA EX: resposta.data    (a propriedade data armazena a reposta do backend) 
        const resposta = await axios.get('/listarCliente')
        console.log(resposta.data);
        document.querySelector('#tabelaCliente').innerHTML = ''
        resposta.data.map((value) => {
            const { id, nome } = value;
            document.querySelector('#tabelaCliente').innerHTML += `
                    <strong>${nome}</strong> / ${id}  
                    <button onclick="alert('${id}')">MEUOVO</button>
                    <br>
            `
        })
    } catch {
        console.log('erro ao listar')
    }

}
