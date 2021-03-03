(function () {
    var content = [
        {
            id: 1,
            img: 'img/foto1.jpg',
            title: 'Tomame haci como que no me doy cuenta'
        },
        {
            id: 2,
            img: 'img/foto2.jpg',
            title: 'Hojas rojas'
        },
        {
            id: 3,
            img: 'img/foto3.jpg',
            title: 'Liquido rojo'
        }
    ]

    var currentImage = $('#current');
    var title = $('#title');
    var prev = $('#prev');
    var next = $('#next');
    var current = 0;

    //Eventos
    prev.on('click', prevImage);
    next.on('click', nextImage)

    //funciones para los eventos
    function prevImage() {
        current--
        if (current < 0) {
            current = content.length - 1;
        }
        let thisImage = content[current].img;
        let thisTitle = content[current].title;
        title.html(thisTitle);
        currentImage.attr('src', thisImage);
    };

    function nextImage() {
        current++
        if (current > content.length- 1) {
            current = 0;
        }
        let thisImage = content[current].img;
        let thisTitle = content[current].title;
        title.html(thisTitle);
        currentImage.attr('src', thisImage);
    };
}());