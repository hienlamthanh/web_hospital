import select2 from 'select2';

$.fn.select2.defaults.set("theme", "bootstrap4")

$(document).ready(function() {
    $(".department-select2-js").select2({
        placeholder: "-- Chọn Chuyên khoa --"
    })
    $(".time-select2-js").select2({
        placeholder: "-- Chọn Thời gian --"
    })
    $(".doc-select2-js").select2({
        placeholder: "-- Chọn Bác sĩ --"
    })
    $(".session-select2-js").select2({
        placeholder: "-- Chọn Buổi --"
    })
});