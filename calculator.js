num1=0
num2=0
finalAnswer=0
a=0
function render() {
    let buttons = document.querySelectorAll('.numeric');  
    buttons.forEach(function(button) {
        button.onclick = function() {

            let para = document.querySelector('.para'); 
            let number = para.innerHTML;  
            number = number +button.textContent;
            para.innerHTML = number;
               
            para.innerHTML = para.innerHTML.replace(/\s+/g, '');  


        };
    });
};
function getNum1(){
    let para = document.querySelector('.para');
          console.log(para.innerHTML);
          let cleanedNum1 = para.innerHTML.replace(/\s+/g, '')
          num1 = parseFloat(cleanedNum1);
          console.log(num1);
          para.innerHTML=null;
}
render()