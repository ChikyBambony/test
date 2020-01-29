
let menuItem = document.querySelectorAll('.menu-item'),
    menu = document.querySelector('.menu'),
    title = document.querySelector('#title'),
    adv = document.querySelector('.adv'),
    column = document.querySelectorAll('.column'),
    quest = document.querySelectorAll('#prompt'),
    question = prompt('Отношение к технике apple?', '');

let li = document.createElement('li');   
    li.classList.add('menu-item');
    li.textContent = 'Пятый пункт';
    menu.appendChild(li);


menuItem[1].innerHTML = 'Второй пункт';
menuItem[2].innerHTML = 'Третий пункт';


title.textContent = 'Мы продаем только подлинную технику Apple';
column[1].removeChild(adv);
console.log(quest);

quest[0].innerHTML  = `<h1>${question}</h1>`;

