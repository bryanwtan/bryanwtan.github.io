(function() {
    'use strict';

    buildGridTags('listening-grid');

    function buildGridTags(target) {
        var gridArr = [
            'https://www.youtube.com/watch?v=Fqtbjg6bVNI ~ nation-boxer_03.jpg',
            'https://www.youtube.com/watch?v=mCHUw7ACS8o ~ ofmons-myhead_04.jpg',
            'https://www.youtube.com/watch?v=lJJT00wqlOo ~ ssteve-carrie_04.jpg',
            'https://www.youtube.com/watch?v=X5L3UqYvleM ~ ptree-deadwi.jpg',
            'https://www.youtube.com/watch?v=yfySK7CLEEg ~ nation-highvi_03.jpg',
            'https://www.youtube.com/watch?v=JGulAZnnTKA ~ halsey-badlan_03.jpg'
        ];

        gridArr.forEach(function(img, index) {
            img = img.split(' ~ ')
            var tag = [];
            tag.push('<div><a href="');
            tag.push(img[0]);
            tag.push('" target="_blank">');
            tag.push('<img class="grid-image" src="css/listening/');
            tag.push(img[1]);
            tag.push('"></a></div>');
            gridArr[index] = tag.join('');
        });

        document.getElementById(target).innerHTML += gridArr.join('');
    };
}());
