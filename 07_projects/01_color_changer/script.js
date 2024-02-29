const buttons = document.querySelectorAll('.buttons')
const body = document.querySelector('body')
const text = document.querySelector('h2')

console.log(buttons)

buttons.forEach( function(button){
    button.addEventListener('click', function(e){
        if (e.target.id === 'white') {
            // console.log(e.target.id)
            body.style.backgroundColor = 'white';
            text.style.color = 'black';

        }else if (e.target.id === 'black') {
            body.style.backgroundColor = e.target.id;
            text.style.color = 'white';

        }else if (e.target.id == 'purple') {
            body.style.backgroundColor = e.target.id;
            text.style.color = 'yellow';

        }else if (e.target.id == 'yellow') {
            body.style.backgroundColor = e.target.id;
            text.style.color = 'purple'
        }
    })
})