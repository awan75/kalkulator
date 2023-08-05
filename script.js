(function() {

//get elemen
const screen = document.querySelector('.screen');
const buttons = document.querySelectorAll('.btn');
const equal = document.querySelector('.btn-equal');
const backspace = document.querySelector('.btn-backspace');
const clear = document.querySelector('.btn-clear');


//memasukan inputan ke layar
buttons.forEach(btn => {
    btn.addEventListener('click', function(e){

       let value = e.target.dataset.num;
        screen.value += value;
    });
});

//menjumlahkan
// Konversi operator "x" menjadi "*"
function convertPerkalian(expression) {
  return expression.replace(/x/g, '*')
};
function convertPembagian(expression) {
  return expression.replace(/:/g, '/')
};

equal.addEventListener('click', function () {
  if (screen.value === '') {
    screen.value = '';
  } else {

    let expression = convertPerkalian(screen.value);
    expression = convertPembagian(expression);
    let answer = eval(expression);
    screen.value = answer;
  }
});


//menghapus
backspace.addEventListener('click', function() {
    if(screen.value === '') {
        screen.value = '';
    } else {
        let inputan = screen.value;
        let hapus = inputan.slice(0,-1);
        screen.value = hapus;
    }
});

//mereset
clear.addEventListener('click', function() {
    if(screen.value === '') {
        screen.value = '';
    } else {
         screen.value = '';
    }
});

}) ();
