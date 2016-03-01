(function() {
    'use strict';

    buildGridTags('photo-grid');

    function buildGridTags(target) {
        var gridArr = [];

        for(var i = 1; i < 19; i++) {
            i = String(i);

            while(i.length < 4) {
                i = '0' + i;
            }

            gridArr.push('<div><img class="grid-image" src="css/photography/');
            gridArr.push(i);
            gridArr.push('.jpg"></div>');
        };

        document.getElementById(target).innerHTML += gridArr.join('');
    };
}());
