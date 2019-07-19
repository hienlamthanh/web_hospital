$(document).ready(function () {
    
    window.onscroll = function () {
        scrollFunction()
    };

    function scrollFunction() {
        if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
            document.getElementById("myBtn").style.display = "block";
        } else {
            document.getElementById("myBtn").style.display = "none";
        }
    }

    $('#myBtn').click(function() {    
        $('body,html').animate({
            scrollTop : 0                     
        }, 500);
    });
});

