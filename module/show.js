
export class Todo {
    constructor(list, no, txt, form, ul) {
        this.list = list;
        this.no = no;
        this.txt = txt;
        this.form = form;
        this.ul = ul;
    }

    init() {
        console.log('init');
        this.show();
        this.form.addEventListener('submit', e => {
            if (this.txt.value) {
                e.preventDefault();
                this.add();
                this.show();
            }
        })
    }

    show() {
        console.log('show');
        this.ul.innerHTML = '';
        this.list = JSON.parse(localStorage.getItem("list")) || [];
        this.list.forEach((ele, idx) => {
            const { id, doList } = ele;

            let li = document.createElement('li');
            let check = document.createElement('i');
            let span = document.createElement('span');
            let delBtn = document.createElement('button');

            check.textContent = '✓';
            span.textContent = doList;
            delBtn.textContent = '삭제';

            li.dataset.id = id
            li.append(check);
            li.append(span);
            li.append(delBtn);
            if (ele.on) {
                li.classList.add('on')
                this.ul.append(li);
            } else {
                this.ul.append(li);
            }

            this.del(delBtn, id);
            this.done(check)

        });
        this.txt.value = '';
        this.txt.focus();
    }

    del(delBtn, id) {
        console.log('del');
        delBtn.addEventListener('click', e => {
            this.list = this.list.filter(item => item.id != id)
            localStorage.setItem("list", JSON.stringify(this.list))
            this.show();
        })
    }
    // add
    add() {
        console.log('add');
        this.list = [
            ...this.list,
            {
                id: ++this.no,
                doList: this.txt.value
            }
        ]
        localStorage.setItem("list", JSON.stringify(this.list))
    }
    // done
    done = (check) => {
        check.addEventListener('click', e => {
            console.log('done');
            e.target.parentElement.classList.toggle('on')
            this.list.forEach(ele => {
                if (ele.id == e.target.parentElement.dataset.id) {
                    ele.on = !ele.on;
                }
            })
        })
    }
}