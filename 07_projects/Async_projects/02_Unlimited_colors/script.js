//Generated random colors by hex code
function randomColors(){
    const hex = '0123456789ABCDEF'
    let color = '#'
    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)]
        //here we are selecting the random value from the position of 'hex'   
    }
    return color;
}

let intervalID;
const startChangingColor = function(){

    if (intervalID == null) {
        function changeColor(){
            document.body.style.backgroundColor = randomColors();
        }
    }

    intervalID = setInterval(changeColor,1000)
};
const stopChangingColor = function(){
    clearInterval(intervalID)
    intervalID = null;//Here we are flushing out the value of intervalID just to make our program more effecient
};

document.querySelector('#start').addEventListener('click',startChangingColor);
document.querySelector('#stop').addEventListener('click',stopChangingColor);