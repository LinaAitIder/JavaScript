  // we get the item saved by their name
     
  let calculation = localStorage.getItem('operation') || '';
  let result = document.querySelector('.text');
  result.innerHTML = calculation;
  function updateCalculation(value) {
    calculation += value;
    console.log(calculation);
    result.innerHTML = calculation;
  }