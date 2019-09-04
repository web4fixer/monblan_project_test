//
// $(function(){
//     $("#datetimepicker7").datetimepicker();
//     $("#datetimepicker8").datetimepicker({
//         useCurrent: false
//     });
//     $("#datetimepicker7").on("dp.change", function (e) {
//         $('#datetimepicker8').data("DateTimePicker").minDate(e.date);
//     });
//     $("#datetimepicker8").on("dp.change", function (e) {
//         $('#datetimepicker7').data("DateTimePicker").maxDate(e.date);
//     });
//
//
// });

// $(function () {
//     $('#datetimepicker8').datetimepicker();
//     $('.glyphicon-remove').click(function () {
//         $('#datetimepicker6').data("DateTimePicker").clear();
//     });
// });
// $(function () {
//     $('#datetimepicker1').datetimepicker({
//         locale: 'ru',
//         stepping:10,
//         format: 'DD.MM.YYYY',
//         defaultDate: moment('01.11.2017').format('DD.MM.YYYY'),
//         daysOfWeekDisabled:[0,6]
//     });
//     $('#datetimepicker2').datetimepicker({
//         locale: 'ru'
//     });
// });

$(function () {
    // инициализация datetimepicker7 и datetimepicker8

    $("#datetimepicker7").datetimepicker({
        useCurrent: false,
        locale: 'en',
        stepping:10,
        format: 'DD.MM.YYYY',
        daysOfWeekDisabled:[0,6]

    });

    $("#datetimepicker8").datetimepicker({
        useCurrent: false,
        locale: 'en',
        stepping:10,
        format: 'DD.MM.YYYY',
        defaultDate: moment('09.08.2016').format('DD.MM.YYYY'),
        daysOfWeekDisabled:[0,6]

    });
    $("#datetimepicker7").on("dp.change", function (e) {
        $('#datetimepicker8').data("DateTimePicker").minDate(e.date);
        $('.glyphicon-remove').click(function () {
            $('#datetimepicker7').data("DateTimePicker").clear();
        });
    });
    $("#datetimepicker8").on("dp.change", function (e) {
        $('#datetimepicker7').data("DateTimePicker").maxDate(e.date);
        $('.glyphicon-remove').click(function () {
            $('#datetimepicker8').data("DateTimePicker").clear();
        });
    });
});