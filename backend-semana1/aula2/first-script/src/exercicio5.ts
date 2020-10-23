

const num1 : number = 2;
const num2 : number = 10;


function soma(num1: number , num2: number) : number {
 return (num1 + num2) 
 }
 console.log(num1 + num2)

 function sub(num1: number , num2: number) : number {
  return (num1 - num2) 
  }
  console.log(num1 - num2)

  function mul(num1: number , num2: number) : number {
  return (num1 * num2) 
  }
  console.log(num1 * num2)  

  function numeroMaior(num1: number , num2: number) : void {
    num1 > num2? (`${num1} é o número maior`) : (`${num2} é o número maior`)
}
  console.log(num1 > num2? (`${num1} é o número maior`) : (`${num2} é o número maior`))