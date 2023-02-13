var btn = document.getElementById('btn-add');
var input = document.getElementById('input-user');
var list = document.getElementById('list-items');

btn.addEventListener('click', () => {
    var value = input.value;

    var listItem = document.createElement('li');
    listItem.innerText = value;

    var novoBotao = document.createElement('button');
    novoBotao.innerText = 'x';

    listItem.appendChild(novoBotao);
    list.appendChild(listItem);
});