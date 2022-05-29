

let list = prompt('enter the list of numbers  (comma separated)');

let number = prompt('enter the number:');

let nrarr = list.split(',');

const listElement = document.querySelector('.list');

listElement.textContent = list

const nrK = document.querySelector('.nr-k')

nrK.textContent = number

const resultElement = document.querySelector('.result')



function check () {
    for (let i=0; i<nrarr.length; i++)
    {
        for (let j=i+1; j<nrarr.length; j++)
        {

            if ( parseFloat(nrarr[i]) + parseFloat( nrarr[j])  == parseFloat(number) )
            {
                resultElement.textContent = 'true'
                return;
            }
            else
            {
                resultElement.textContent = 'false'
            }
        }
    }

}


check()
