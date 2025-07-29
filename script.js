
const buttons = document.querySelectorAll('.btn-waifu');

buttons.forEach(button => {
button.addEventListener('click', function (e) {
    e.preventDefault(); // biar gak langsung pindah

    button.classList.add('burst-effect');

    const target = button.getAttribute('href');

    setTimeout(() => {
    window.location.href = target;
    }, 500);
});
});

