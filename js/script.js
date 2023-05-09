const apikey = "8aca7b7ff5364cd732c67dd5a1c0a610"



function exportAPI(coletaDados){

    console.log(coletaDados);
    document.querySelector(".cityname-api").innerHTML = "Tempo em " + coletaDados.name
    document.querySelector(".text-preview").innerHTML = coletaDados.weather[0].description
    document.querySelector(".temp-api").innerHTML = coletaDados.main.temp + "°C"
    document.querySelector(".moisture-api").innerHTML = coletaDados.main.humidity + "%"
}


async function analisarCidade(userInputText){ // async - é usado para acessar servidores externos
    
    // away - faz o código aguardar a resposta da api para voltar a rodar
    // fetch - usado para manipular e receber respostas
    const coletaDados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${userInputText}&appid=${apikey}&lang=pt_br&units=metric`).then(answer => answer.json())
    // then - após a resposta do servidor, transforma em json

    exportAPI(coletaDados)

}

function buttonAction(){

    const userInputText = document.querySelector('.inputtxt').value

    analisarCidade(userInputText)

}