// DARK MODE

const btnMode = document.querySelector('.btn__mode');
const root = document.querySelector(':root');

btnMode.addEventListener('click', changeMode);

function changeMode(e) {
    e.preventDefault();
    if (btnMode.classList.contains('darkmode')) {
        btnMode.querySelector('i').classList = 'fas fa-sun';

        btnMode.classList.remove('darkmode');

        root.style.setProperty('--dark', '#dddddd');
        root.style.setProperty('--darker', '#ececec');
        root.style.setProperty('--darkest', '#f0f0f0');
        root.style.setProperty('--light', '#525252');
        root.style.setProperty('--highlight', '#c0c0c0');


    } else {
        btnMode.classList.add('darkmode');
        btnMode.querySelector('i').classList = 'fas fa-moon';
        root.style.setProperty('--dark', '#5f5f5f');
        root.style.setProperty('--darker', '#333333');
        root.style.setProperty('--darkest', '#252525');
        root.style.setProperty('--highlight', '#a0a0a0');
        root.style.setProperty('--light', '#fff');
    }
}



// SHOW ANNOUNCEMENT
const btnExpand = document.querySelector('.btn__expand');
const mainGrid = document.querySelector('.dashboard__main__grid');
const announcementBlock = document.querySelector('.collapse');


btnExpand.addEventListener('click', collapseToggle);

function collapseToggle() {
    if (announcementBlock.classList.contains('collapse')) {
        mainGrid.style.gridTemplateColumns = '1fr 30rem';
        announcementBlock.classList.remove('collapse');
        btnExpand.querySelector('i').classList = 'fas fa-compress-alt'
    } else {
        mainGrid.style.gridTemplateColumns = '1fr 6rem';
        announcementBlock.classList.add('collapse')
        btnExpand.querySelector('i').classList = 'fas fa-expand-alt'
    }
}

// SWAP ACTIVE TASK

const btnSwitchs = document.querySelectorAll('.taskitem__switch');
const activeTask = document.querySelector('.task__description');

btnSwitchs.forEach((btn) => {
    btn.addEventListener('click', swapTask)
})

function swapTask() {
    const currentTask = {
        title: activeTask.querySelector('h2').textContent,
        desc: activeTask.querySelector('p').textContent
    }
    const swapTask = {
        title: this.nextElementSibling.querySelector('h4').textContent,
        desc: this.nextElementSibling.querySelector('p').textContent
    }

    activeTask.querySelector('h2').textContent = swapTask.title;
    activeTask.querySelector('p').textContent = swapTask.desc;


    this.nextElementSibling.querySelector('h4').textContent = currentTask.title;
    this.nextElementSibling.querySelector('p').textContent = currentTask.desc;


}
