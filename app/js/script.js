const btnHamburger = document.getElementById('btnHamburger');
const header = document.getElementsByClassName('header')[0];
const overlay = document.getElementsByClassName('overlay')[0]
const headerMenue = document.getElementsByClassName('header_menue')[0]
const fadeElems = document.querySelectorAll('.has-fade');

btnHamburger.addEventListener('click', function () {
    // header.classList.toggle('open')
    // overlay.classList.toggle('fade-in')
    if (header.classList.contains('open')) {
        document.body.classList.remove('noscroll')
        header.classList.remove('open')
        fadeElems.forEach(function (element) {
            element.classList.remove('fade-in');
            element.classList.add('fade-out');
        });
        // overlay.classList.remove('fade-in')
        // overlay.classList.add('fade-out')
        // headerMenue.classList.remove('fade-in')
        // headerMenue.classList.add('fade-out')
    }
    else {
        document.body.classList.add('noscroll')
        header.classList.add('open')

        fadeElems.forEach(function (element) {
            element.classList.remove('fade-out');
            element.classList.add('fade-in');
        });

        // overlay.classList.remove('fade-out')
        // overlay.classList.add('fade-in')
        // headerMenue.classList.add('fade-in')
        // headerMenue.classList.remove('fade-out')

    }
})