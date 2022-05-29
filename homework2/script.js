

let list = prompt('enter the array');

const arr = list.split(',')

let max = 0;
let localMax = 0;
let index = 0;
let x = [];

listElement = document.querySelector('.list');
resultElement = document.querySelector('.result')


function check() {
    for (let i=0; i<arr.length; i++)
    {
        if ( !(x.includes(arr[i])) )
        {
            x.push(arr[i]);
            localMax = x.length;
            if (localMax > max)
            {
                max = localMax;
                index = i;
            }
        }
        
    }
    let resultArray = arr.slice( (index-max+1) , (index+1) );

    listElement.textContent = `The array is : ${list}`;
    resultElement.textContent = `The sub-array is: ${resultArray}`;
}


check();