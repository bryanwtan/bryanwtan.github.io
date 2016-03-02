(function() {
    'use strict';

    buildGridTags('reading-grid');

    function buildGridTags(target) {
        var gridArr = [
            'https://www.goodreads.com/book/show/22543496-elon-musk ~ http://d.gr-assets.com/books/1404411386l/22543496.jpg',
            'https://www.goodreads.com/book/show/18007564-the-martian ~ http://d.gr-assets.com/books/1440303473l/20829029.jpg',
            'https://www.goodreads.com/book/show/25955.The_Medium_is_the_Massage ~ http://d.gr-assets.com/books/1388188923l/25955.jpg',
            'https://www.goodreads.com/book/show/8664353-unbroken ~ http://d.gr-assets.com/books/1327861087l/8889380.jpg',
            'https://www.goodreads.com/book/show/2318271.The_Last_Lecture ~ http://d.gr-assets.com/books/1388075896l/2318271.jpg',
            'https://www.goodreads.com/book/show/18619684-the-time-traveler-s-wife ~ http://d.gr-assets.com/books/1380660571l/18619684.jpg'
        ];

        gridArr.forEach(function(img, index) {
            img = img.split(' ~ ');
            var tag = [];
            tag.push('<div class="picture-div"><a href="');
            tag.push(img[0]);
            tag.push('" target="_blank">');
            tag.push('<img class="grid-image" src="');
            tag.push(img[1]);
            tag.push('"></a></div>');
            gridArr[index] = tag.join('');
        });

        document.getElementById(target).innerHTML += gridArr.join('');
    };

    function resizePictureDivHeights() {
        requestAnimationFrame(resizePictureDivHeights);

        var pictureDivs = document.getElementsByClassName('picture-div');
        var length = pictureDivs.length;
        for(var i = 0; i < length; i++) {
            var width = pictureDivs[i].clientWidth;;
            var height = width*1.45;
            pictureDivs[i].style.height = height + 'px';
        }
    }

    resizePictureDivHeights();
    window.onresize = resizePictureDivHeights;
}());
