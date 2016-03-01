(function() {
    'use strict';

    buildGridTags('reading-grid');

    function buildGridTags(target) {
        var gridArr = [
            'http://d.gr-assets.com/books/1404411386l/22543496.jpg',
            'http://d.gr-assets.com/books/1440303473l/20829029.jpg',
            'http://d.gr-assets.com/books/1388188923l/25955.jpg',
            'http://d.gr-assets.com/books/1327861087l/8889380.jpg',
            'http://d.gr-assets.com/books/1388075896l/2318271.jpg',
            'http://d.gr-assets.com/books/1380660571l/18619684.jpg'
        ];

        gridArr.forEach(function(img, index) {
            var tag = [];
            tag.push('<div><img class="grid-image" src="');
            tag.push(img);
            tag.push('"></div>');
            gridArr[index] = tag.join('');
        });

        document.getElementById(target).innerHTML += gridArr.join('');
    };
}());
