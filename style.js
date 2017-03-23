var gridNumber = 16;

$(document).ready(function () {
    $("#grid-button").click(function () {
        gridNumber = window.prompt("Choose the Number of Rows/Columns you want in your Square");
        gridNumber = parseInt(gridNumber, 10);
        var gridWidth = 700 / gridNumber;
        for(i=0;i<gridNumber*gridNumber;i++) {
            $("#wrapper").append('<div class="square"></div>');
        }
        $('.square').css("width",gridWidth+"px");
        $('.square').css("height",gridWidth+"px");
        $(document).ready(function () {
            $(".square").hover(function () {
            $(this).css("background-color","darkslategrey");
    });
});

    });
});

$(document).ready(function () {
    var gridWidth = 700 / gridNumber;
    for(i=0;i<gridNumber*gridNumber;i++) {
        $("#wrapper").append('<div class="square"></div>');
    }
    $('.square').css("width",gridWidth+"px");
    $('.square').css("height",gridWidth+"px");
    $(document).ready(function () {
        $(".square").hover(function () {
        $(this).css("background-color","darkslategrey");
        });
    });
});

$(document).ready(function clearGrid () {
    $("#clear-button").click(function () {
        $(".square").css("background-color","white");
    });
});

