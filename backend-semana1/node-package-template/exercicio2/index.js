// Execício 2

const operation = process.argv[2];
const number1 = process.argv[3];
const number2 = process.argv[4];
const calculaValor = (operation,number1,number2) =>  {
        let result;

    switch(operation){
        case "soma":
           result = (Number(number1) +Number(number2))
                console.log(result)
            break;
        case "subt":
            result =(number1 - number2)
                console.log(result)
            break;
        case "mult":
            result =(number1 * number2)
                console.log(result)
            break;
        case "div":
            result =(number1 / number2)
                console.log(result)     
            break;
    }

  

};
calculaValor (operation,number1,number2);