var btns = document.querySelectorAll('.btn')
var lineOldElement = document.querySelector('.line-old')
var lineNewElement = document.querySelector('.line-new')
var arrNum = [];
var curNum, result

function start(){
    resetLine()
    handleButton()
}

start()

function resetLine(){
    curNum = 0
    result = 0
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
                arrNum.push(element.innerText)

                if(element.classList.contains('btn-equal') || element.classList.contains("'btn-operator'")){
                    result = calculator(arrNum[0], arrNum[1], arrNum[2])
                    lineNewElement.innerText = result
                    lineOldElement.innerText = arrNum.join(" ")
                    arrNum.splice(0, arrNum.length)

                    arrNum.push(result)
                    arrNum.push(element.innerText)
                }
                
                else{
                    lineNewElement.innerText = curNum
                    lineOldElement.innerText = arrNum.join(" ")
                }

                curNum = 0
            }else if(element.classList.contains('btn-num')){
                updateLineNew(Number.parseInt(element.innerHTML))
            }
        }
    })
}