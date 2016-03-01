(function() {
    'use strict';

    window.setTimeout(fadeInHello, [500]);

    function fadeInHello() {
        var hello = document.getElementById('hello-text')
        var hstyle = hello.style;
        hstyle.opacity = '1';

        window.setTimeout(fadeInSplash, [300]);
    }

    function fadeInSplash() {
        var profile = document.getElementById('splash')
        var pstyle = profile.style;
        pstyle.opacity = '1';

        window.setTimeout(fadeInPageCurl, [300]);
    }

    function fadeInPageCurl() {
        var backgroundEllipse = document.getElementById('hidden-ellipse')
        var bstyle = backgroundEllipse.style;
        bstyle.opacity = '1';

        window.setTimeout(fadeInPageCurl, [300]);
    }
}());
