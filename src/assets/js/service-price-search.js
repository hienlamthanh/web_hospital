$(document).ready(function() {
    $("#input-search").on("keyup", function() {
        var value = $(this).val().toLowerCase();
        $("#table-service-price tr").filter(function() {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
    });
});