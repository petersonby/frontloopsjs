const switchers = document.querySelectorAll('.switcher__input');

switchers.forEach(switcher => {
    switcher.addEventListener('click', e => {
        switchers.forEach(item => {
            let random_boolean = Math.random() < 0.5;

            if(e.target != item) {
                item.checked = random_boolean;
            }
        })
    })
})