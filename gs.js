function executar(){
    //VARIAVEIS PUXADAS DO HTML
    let distancia = document.getElementById('distancia').value
    let tanque = document.getElementById('tanque').value
    let consumo = document.getElementById('consumo').value
    let precoGasolina = document.getElementById('precoGasolina').value 
    let tempo = document.getElementById('tempo').value

    let res = document.getElementById('res')

    let combustivelnecessario = distancia/consumo
    let vm = distancia/tempo
    //let abastecer = distancia/consumo
 
    // CONSUMO DE GASOLINA 

    //const estrada = 38
    //const rodovia = 35
    
    res.innerHTML = `Velocidade média de ${vm} km/h` 
    res.innerHTML += `<br>Combustuvel Necessario é: ${combustivelnecessario} litros`
    //res.innerHTML += `${abastecer}`

    cont = 0
    for(combustivelnecessario; combustivelnecessario > tanque; cont++){
        res.innerHTML += `olá ${cont}`
    }
    res.innerHTML += `<br>Você terá que abastecer pelo manos: ${cont} vez(vezes)`

}
