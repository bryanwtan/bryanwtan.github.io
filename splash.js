(function() {
    'use strict';

    function slideOut() {
        let hello = document.getElementById('hello-text'), hstyle = hello.style;
        let profile = document.getElementById('splash'), pstyle = profile.style;
        hstyle.opacity = '0';
        pstyle.opacity = '0';
    }

    let slideOutTimeout = window.setTimeout(slideOut, [1500]);
}());
