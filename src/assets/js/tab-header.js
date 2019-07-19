$(document).ready(function() {
    $('a.tablink').click(function(e) {
        e.preventDefault();
        var tab_id = $(this).attr('href');

        var tabs = document.querySelectorAll('.tab-content-item');
        tabs.forEach(function(tab) { //forEach: tương tự câu lệnh for(...) nhưng không cần biết trước số lần lặp: tab là đại diện cho đối tượng con trong mảng
            tab.classList.add('d-none');
        });

        var tablinks = document.querySelectorAll('.tablink');
        tablinks.forEach(function(tablink) { //forEach: tương tự câu lệnh for(...) nhưng không cần biết trước số lần lặp: tab là đại diện cho đối tượng con trong mảng
            tablink.classList.remove('tablink-active');
        });

        $(this).addClass('tablink-active');
        document.querySelector(tab_id).classList.remove('d-none');

    });
});