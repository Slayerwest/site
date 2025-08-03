<script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"></script>
<script>
document.addEventListener("DOMContentLoaded", function () {
    const swiper = new Swiper('.swiper', {
        loop: true,
        spaceBetween: 20,
        slidesPerView: 1,
        pagination: {
            el: '.swiper-pagination',
            clickable: true
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        },
        autoplay: {
            delay: 3000,
            disableOnInteraction: false
        }
    });

    console.log("Página carregada com sucesso!");
    const menuCheckbox = document.getElementById('menu');
    const listaMenu = document.querySelector('.lista-menu');
    document.querySelectorAll('.lista-menu_link').forEach(link => {
        link.addEventListener('click', () => {
            menuCheckbox.checked = false;
        });
    });
});
</script>
