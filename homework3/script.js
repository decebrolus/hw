

let list = prompt('enter the list of numbers')

let arr = list.split(',')

const min = Math.min(...arr)

let max = 0;



for (let i=1; i<=min; i++)
{
    function checkAllDenominators() {
        arr.every( function(value) {
            return value % i == 0;
        })        
        
    }
    if (checkAllDenominators)
    {
        max = i;
    }

    
}

const listElement = document.querySelector('.list')

listElement.textContent = list;

const resultElement = document.querySelector('.result')

resultElement.textContent = max;



