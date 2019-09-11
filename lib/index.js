// Simbolos utilizados para converter número romano em decimal
const simbolos = [
    {'decimal': 1, 'romano': 'I'}, 
    {'decimal': 5, 'romano': 'V'},
    {'decimal': 10, 'romano': 'X'}, 
    {'decimal': 50, 'romano': 'L'},
    {'decimal': 100, 'romano': 'C'}, 
    {'decimal': 500, 'romano': 'D'},
    {'decimal': 1000, 'romano': 'M'}
]

const alfabetoRomano = ['I', 'V', 'X', 'L', 'C', 'D', 'M']



function romanoParaDecimal(stringUsuario) {

    // Tratamento da string recebida pelo usuário
    const valorRomano = string => string.toUpperCase()

    // Verificando valores inseridos e separando a string em um array para a conversão dos elementos
    const verificarValorRomano = string => {
        for (let caracter of string) { 
            if (alfabetoRomano.indexOf(caracter) >= 0){
                valoresRomanos.push(caracter)
            } else {
                return false
            }
        }
    }

    // Converter array de valores romanos para decimal
    const converterRomanoDecimal = array => {
        array.forEach(caracter => {
            simbolos.forEach(simbolo => {
                const adicionarValor = caracter === simbolo.romano ? valoresDecimais.push(simbolo.decimal) : false
            })
        })
    }

    // Declaração das variáveis
    const [valoresRomanos, valoresDecimais, valoresAltos, valoresBaixos] = [[], [], [], []]
    let [somaValoresAltos, somaValoresBaixos, valorFinal] = [0, 0, 0]

    // Aplicando funções para tratamento e conversão
    if (verificarValorRomano(valorRomano(stringUsuario)) === false) return 'Valor informado pelo usuário possue caracteres inválidos'
    converterRomanoDecimal(valoresRomanos)

    // Aplicando regras da conversão de números romanos
    for (let i = 0; i < valoresDecimais.length; i++) {
        if (valoresDecimais[i] > valoresDecimais[i+1] || valoresDecimais[i+1] === undefined) valoresAltos.push(valoresDecimais[i])
        else if (valoresDecimais[i] < valoresDecimais[i+1] && valoresDecimais[i] > 0) valoresBaixos.push(valoresDecimais[i])
        else if (valoresDecimais[i] === valoresDecimais[i+1] && valoresDecimais[i+1] !== undefined) {
            let regraRomanos = false
            for (let j = i + 1; j < valoresDecimais.length; j++) {
                regraRomanos = valoresDecimais[i] > valoresDecimais[j] || valoresDecimais[i] === valoresDecimais[j] ? true : false
            }
            if (regraRomanos) valoresAltos.push(valoresDecimais[i]) 
            else valoresBaixos.push(valoresDecimais[i]) 
        }
    }

    for (let i = 0; i < valoresAltos.length; i++) somaValoresAltos += valoresAltos[i]
    for (let i = 0; i < valoresBaixos.length; i++) somaValoresBaixos += valoresBaixos[i]

    // Gerando valor final
    valorFinal = somaValoresAltos - somaValoresBaixos

    return valorFinal
}

console.log(romanoParaDecimal('xvii'))

/*
    const onChangeInput = () => document.getElementById("text").innerText = romanoParaDecimal(document.getElementById("input").value)
*/