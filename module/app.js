import { get, getAll } from './getEle.js';
import { Todo } from './show.js';

let list = [];
let no = list.length;

const txt = get('.input');
const form = get('form');
const ul = get('ul');

list = JSON.parse(localStorage.getItem("list")) || [];

const todo = new Todo(list, no, txt, form, ul)
todo.init();

form.addEventListener('submit', e => {
    console.log('submit');
    if (txt.value) {
        e.preventDefault();
        add();
        show();
    }
})