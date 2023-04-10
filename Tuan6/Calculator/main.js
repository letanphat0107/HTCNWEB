var btns = document.querySelectorAll('.btn')
var lineOldElement = document.querySelector('.line-old')
var lineNewElement = document.querySelector('.line-new')
var arrNum = [];
var curNum;

function start(){
    resetLine()
    handleButton()
}

start()

function resetLine(){
    curNum = 0
    lineOldElement.innerText = ''
    lineNewElement.innerText = '0'
}

function updateLineNew(number){
    curNum = curNum*10 + number;
    lineNewElement.innerText = curNum
}

function calculator(a, operate, b){
    switch(operate){
        case '+':
            return a + b;
            break;
        case '-':
            return a - b;
            break;
        case '*':
            return a * b;
            break;
        case '/':
            return a / b;
            break;
        case '%':
            return a % b;
            break;
    }
}



function handleButton(){
    btns.forEach((element, index)=>{
        element.onclick = function(){
            // if(element.classList.contains('btn-equal')){
            //     calculator(a, operate, b)
            // }
            if(element.classList.contains('btn-operator')){
                arrNum.push(curNum)
                
                if(element.classList.contains('btn-equal')){
                    var result = calculator(arrNum[0], arrNum[1], arrNum[2])
                    lineNewElement.innerText = result
                    arrNum.splice(0, arrNum.length)
                    arrNum.push(result)
                }else if(arrNum.length >= 3){
                    arrNum[0] = calculator(arrNum[0], arrNum[1], arrNum[2])
                }else{
                    
                }
                arrNum.push(element.innerText)
                lineOldElement.innerText = arrNum.join(" ")
                curNum = 0
            }else if(element.classList.contains('btn-num')){
                updateLineNew(Number.parseInt(element.innerHTML))
            }
        }
    })
}