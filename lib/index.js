const romans = [
    {'arabic': 1, 'roman': 'I'}, 
    {'arabic': 5, 'roman': 'V'},
    {'arabic': 10, 'roman': 'X'}, 
    {'arabic': 50, 'roman': 'L'},
    {'arabic': 100, 'roman': 'C'}, 
    {'arabic': 500, 'roman': 'D'},
    {'arabic': 1000, 'roman': 'M'}
]

function convertToRoman(stringUser) {

    let [sum, arrayRomans, arrayArabic, highValues, lowValues, sumHighValues, sumLowValues] = [0, [], [], [], [], 0, 0]

    const stringTreatment = value => value.toUpperCase() // Treating string

    for (let letter of stringTreatment(stringUser)) arrayRomans.push(letter) // Separating text received in character and passing it separately for each index of an array

    const convertingValuesToArabic = array => { // Converting roman values ​​to arabic
        array.forEach(value => {
            romans.forEach(object => {
                const convertValue = value === object.roman ? arrayArabic.push(object.arabic) : false
            })
        })
    } 

    convertingValuesToArabic(arrayRomans)
    
    for (let i = 0; i < arrayArabic.length; i++) {
        if (arrayArabic[i] > arrayArabic[i+1] || arrayArabic[i+1] === undefined) {
            highValues.push(arrayArabic[i])
        } else if (arrayArabic[i] < arrayArabic[i+1] && arrayArabic[i] > 0) {
            lowValues.push(arrayArabic[i]) 
        } else if (arrayArabic[i] === arrayArabic[i+1] && arrayArabic[i+1] != undefined) {
            for (let j = i + 1; j < arrayArabic.length; j++) {
                var condition = arrayArabic[i] > arrayArabic[j] || arrayArabic[i] === arrayArabic[j] ? true : false
            }
            if (condition) {
                highValues.push(arrayArabic[i])
            } else {
                lowValues.push(arrayArabic[i]) 
            }
        }
    }

    for (let i = 0; i < highValues.length; i++) {
        sumHighValues += highValues[i];
    }
    
    for (let i = 0; i < lowValues.length; i++) {
        sumLowValues += lowValues[i];
    }
    
    sum = sumHighValues - sumLowValues
    
    return sum
}

const onChangeInput = () => document.getElementById("text").innerText = convertToRoman(document.getElementById("input").value)