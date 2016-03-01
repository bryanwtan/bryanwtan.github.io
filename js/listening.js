(function() {
    'use strict';

    buildGridTags('listening-grid');

    function buildGridTags(target) {
        var gridArr = [
            'nation-boxer_03.jpg',
            'ofmons-myhead_04.jpg',
            'ssteve-carrie_04.jpg',
            'ptree-deadwi.jpg',
            'nation-highvi_03.jpg',
            'halsey-badlan_03.jpg'
        ];

        gridArr.forEach(function(img, index) {
            var tag = [];
            tag.push('<div class="card-content grid-image-container"><img class="grid-image" src="css/listening/');
            tag.push(img);
            tag.push('"></div>');
            gridArr[index] = tag.join('');
        });

        document.getElementById(target).innerHTML += gridArr.join('');
    };
}());
