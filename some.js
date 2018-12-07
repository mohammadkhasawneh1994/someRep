$(document).ready(function () {
    $(".slider").css("width", $(".imgSlide").css("width"));
    $(".slider").css("height", (parseInt($(".imgSlide").css("height")) - 100));
    $(".slider").css("margin-top", "-" + (parseInt($(".imgSlide").css("height")) - 100) + "px");

   // $("body").html("<h1 style='text-align:center;'>المشروع مسروق</h1>");
});

function send() {
    window.location.href = "GetMajors/?field="+$("#slc").val();
}
