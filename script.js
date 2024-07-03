
// BUSCAR O FORMULÁRIO
const formulario = document.getElementById('formCadastro')


// OUVINTE COM EVENTO SUBMIT
formulario.addEventListener('submit', function (evento) {

    evento.preventDefault()


    // VALIDAR CHECKBOX
    // Checkbox captura valores boleanos, quando selecionado checked fica true 

    let checkBoxes = document.querySelectorAll('input[type = "checkbox"]:checked')

    // Se nenhuma checkbox estiver marcada, exibir mensagem de alerta e interromper a submissão
    if (checkBoxes.length === 0) {
        alert("Por favor, marque pelo menos uma opção.")
        return false
    }

    // DADOS COM BASE NO NAME DOS INPUTS
    const dados = {
        nome: evento.target.nome.value,
        endereco: evento.target.endereco.value,
        cidade: evento.target.cidade.value,
        estado: evento.target.estado.value,
        cargo: evento.target.cargo.value,
        interesse: Array.from(checkBoxes).map(cb => cb.value),  
        curriculo: evento.target.curriculo.value
    }
    
    // Array.from(checkBoxes): Converte a lista do checkBoxes em um array
    // .map(cb => cb.value): map percorre cada elemento do array (cb representa cada checkbox)

    console.log(dados);

})






