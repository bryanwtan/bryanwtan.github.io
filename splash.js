(function() {
    'use strict';

    window.setTimeout(fadeInNavigation, [200]);

    function fadeInNavigation() {
        var nav = document.getElementById('custom-nav'), nstyle = nav.style;
        nstyle.opacity = '1';

        window.setTimeout(fadeInHello, [500]);
    }

    function fadeInHello() {
        var hello = document.getElementById('hello-text'), hstyle = hello.style;
        hstyle.opacity = '1';

        window.setTimeout(fadeInSplash, [500]);
    }

    function fadeInSplash() {
        var profile = document.getElementById('splash'), pstyle = profile.style;
        pstyle.opacity = '1';
    }
}());
