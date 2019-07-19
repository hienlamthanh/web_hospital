$('.moreless-button').click(function(e) {
    e.preventDefault();
    if ($('.moreless-button').text() == "Read more") {
        $(this).text("Read less");
        document.querySelector('.moretext').classList.remove('d-none');
    } else {
        $(this).text("Read more");
        document.querySelector('.moretext').classList.add('d-none');
    }
});

$('.like-btn').click(function(e) {
    e.preventDefault();
    var current = $(this).find(":eq(2)");
    var count = parseInt($(this).find(":eq(1)").text());
    if (current.text() == "Đã Thích") {
        current.text("Thích");
        current.css("color", "#008001");
        count--;
    } else {
        count++;
        current.text("Đã Thích");
        current.css("color", "red");
    }
    $(this).find(":eq(1)").text(count);

});

$(document).ready(function() {
    $("#btn").click(function(e) {
        e.preventDefault();
        $('.comment__ask__answer').toggle();
    })
})