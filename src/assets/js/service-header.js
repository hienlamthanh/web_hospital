$(document).ready(function() {
    $('a.service-link').click(function(e) {
        e.preventDefault();
        var tab_id = $(this).attr('href');

        var tabs = document.querySelectorAll('.detail-item');
        tabs.forEach(function(tab) { //forEach: tương tự câu lệnh for(...) nhưng không cần biết trước số lần lặp: tab là đại diện cho đối tượng con trong mảng
            tab.classList.add('d-none');
        });

        var tablinks = document.querySelectorAll('.service-link');
        tablinks.forEach(function(tablink) { //forEach: tương tự câu lệnh for(...) nhưng không cần biết trước số lần lặp: tab là đại diện cho đối tượng con trong mảng
            tablink.classList.remove('service-link-active');
        });

        $(this).addClass('service-link-active');
        document.querySelector(tab_id).classList.remove('d-none');

    });
});