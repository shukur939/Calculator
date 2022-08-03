(function(){

    let screen = document.querySelector('.screen');
    let buttons = document.querySelectorAll('.btn');
    let clear = document.querySelector('.btn-clear');
    let equal = document.querySelector('.btn-equal');

// BUTTON EVENTS
    buttons.forEach(function(button){
        // NUMBER TARGET
        button.addEventListener('click', function(e){
            let value = e.target.dataset.num;
            screen.value += value;
        });
    });

    // EQUAL EVENT
    equal.addEventListener('click', function(e){
        if (screen.value === ''){
            screen.value = "Please enter";
        } else{
            let answer = eval(screen.value);
            screen.value = answer;
        }
    })
    // CLEAR EVENT
    clear.addEventListener('click', function(e){
        screen.value = "";
    })
   
})();