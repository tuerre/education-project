document.getElementById('toggleMenuBtn').addEventListener('click', function() {
    var menu = document.getElementById('dropdownMenu');
    const buttonToDisplay = document.getElementById('toggleMenuBtn');
    if (menu.style.display === 'none' || menu.style.display === '') {
        menu.style.display = 'block';
        buttonToDisplay.innerHTML = 'Cerrar menú';
    } else {
        menu.style.display = 'none';
        buttonToDisplay.innerHTML = 'Mostrar recursos';
    }
});

document.getElementById('toggleMenuBtn2').addEventListener('click', function() {
    var menu2 = document.getElementById('dropdownMenu2');
    const buttonToDisplay2 = document.getElementById('toggleMenuBtn2');
    if (menu2.style.display === 'none' || menu2.style.display === '') {
        menu2.style.display = 'block';
        buttonToDisplay2.innerHTML = 'Cerrar menú';
    } else {
        menu2.style.display = 'none';
        buttonToDisplay2.innerHTML = 'Mostrar recursos';
    }
});
