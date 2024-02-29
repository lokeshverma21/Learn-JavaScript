const form = document.querySelector('form')

form.addEventListener('submit',function(e){
    e.preventDefault()

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const results = document.querySelector('.results');
    const guide = document.querySelector('.guide-result');

    if (height === '' || height < 0 || isNaN(height)) {
        results.innerHTML = "Enter a valid height.";

    }else if (weight === '' || weight < 0 || isNaN(weight)) {
        results.innerHTML = "Enter a valid weight";
        
    }else{
        const bmi = (weight / ((height*height)/10000)).toFixed(2)
        results.innerHTML = `<span>${bmi}</span>`

        if (bmi < 18.6) {
            guide.innerHTML = "You are under weight."
        }else if (bmi >= 18.6 && bmi <= 24.9) {
            guide.innerHTML = "Normal"
        }else if (bmi > 24.9) {
            guide.innerHTML = "You are over weight"
        }
    }
})