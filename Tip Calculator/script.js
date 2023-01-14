
const billTotalInputDiv = document.getElementById("billTotalInput");
const tipInputDiv =
  document.getElementById('tipInput');
const numberOfPeopleDiv = document.getElementById('numberOfPeople');
let perPersonTotalDiv = document.getElementById('perPersonTotal')

numberOfPersons = Number(numberOfPeopleDiv.innerText)

const calculateBill = () => {

let billInput = Number(billTotalInputDiv.value)



  tipPercentage = Number(tipInputDiv.value) / 100



totalTip = billInput * tipPercentage
  

totalBill = totalTip + billInput


perPersonTotal = totalBill / numberOfPersons


perPersonTotalDiv.innerText = `$${perPersonTotal.toFixed(2)}`
}


const increasePeople = () => {

numberOfPersons++


numberOfPeopleDiv.innerText = numberOfPersons


calculateBill()
}


const decreasePeople = () => {

if (numberOfPersons < 2){
  
}else{


numberOfPersons--


numberOfPeopleDiv.innerText = numberOfPersons

  calculateBill()
}
}
