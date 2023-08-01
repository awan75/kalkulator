(function() {
    
    let screen = document.querySelector('.screen');
    let buttons = document.querySelectorAll('.btn');
    let clear = document.querySelector('.btn-clear');
    let equal = document.querySelector('.btn-equal');
    let backspace = document.querySelector('.btn-backspace');

    //menampilkan angka kedalam layar
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            let value = e.target.dataset.num;
            screen.value += value;
        });
    });


    //menjumlahkan
    equal.addEventListener('click', function(e) {
        if(screen.value === '') {
            screen.value = "";
        } else {
            let answer = eval(screen.value);
            screen.value = answer;
        }
    });

    //hapus
    backspace.addEventListener('click', function() {
        if(screen.value === '') {
            screen.value = '';
        } else {
            let inputAkhir = screen.value;
            answer = inputAkhir.slice(0, -1);
            screen.value = answer;
        }
    });


    //reset
    clear.addEventListener('click', function() {
        screen.value = '';
    })
    
}) ();