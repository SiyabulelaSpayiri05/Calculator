 //Referance display element
 const display = document.getElementById('display');

 //track if we have peformed
 let justCalculate = false

 function appendToDisplay(value) {
    console.log('button pressed:', value);
    alert('you pressed:' + value);
 }

 function clearDisplay() {
    console.log('Clear button clicked');
    alert('Clear button clicked');
 }

 function deleteLast() {
    console.log('delete button clicked');
    alert('delete button pressed');
 }
 function calculate() {
    console.log('calculate button pressed');
    alert('calculate or = button pressed')
 }

 document.addEventListener('DOMContentLoaded', function () {
     console.log('calculator loaded successfully');
      console.log('display elemnt',display);
      if (display) {
        console.log('Current display value:',display.value)
      } else{
        console.log('Display element not found')
      }
 })
    
 