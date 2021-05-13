const burger = document.getElementById('sidebarToggle');
const sidebar = document.getElementById('sidebar');
const page = document.getElementById('page');
const body = document.body;

burger.addEventListener('click', event => {
    if (body.classList.contains('show-sidebar')) {
        closedSidebar();
    } else {
        showSidebar();
    }
});

function showSidebar() {
    let mask = document.createElement('div');
    mask.classList.add('page__mask');
    mask.addEventListener('click', closedSidebar);
    page.appendChild(mask);

    body.classList.add('show-sidebar');
}

function closedSidebar() {
    body.classList.remove('show-sidebar');
    document.querySelector('.page__mask').remove();
}