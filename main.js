'use strict';

const books = document.getElementsByTagName('aside'),
      book = document.querySelectorAll('.book'),
      bookName = document.querySelectorAll('a'),
      adv = document.querySelector('.adv'),
      li = document.querySelectorAll('li'),
      newLi = document.createElement('li');

// Восстановление порядка книг
books[0].prepend(book[1]);
books[0].append(book[2]);
book[0].after(book[4]);

// Замена картинки заднего фона
document.body.style.backgroundImage = 'url(./image/you-dont-know-js.jpg)';

// Замена заголовка у 3-ей книги
bookName[4].textContent = 'Книга 3. this и Прототипы Объектов';

// Удаление рекламы
adv.remove();

// Восстановление порядка глав во 2-ой книге
li[3].after(li[6]);
li[9].after(li[2]);
li[6].after(li[8]);

// Восстановление порядка глав в 5-ой книге
li[47].after(li[55]);
li[55].after(li[49]);
li[49].after(li[50]);
li[53].after(li[51]);

// Добавление главы в 6-ой книге
newLi.textContent = 'Глава 8: За пределами ES6';
li[25].after(newLi);