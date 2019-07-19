function formatNumber(num) {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}

$('.number-count-js').each(function() {
    var size = $(this).text().split(".")[1] ? $(this).text().split(".")[1].length : 0;
    $(this).prop('Counter', 0).animate({
        Counter: $(this).text()
    }, {
        duration: 5000,
        step: function(func) {
            $(this).text(parseFloat(func).toFixed(size));
        }
    });

});