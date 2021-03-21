/**
 * Created by simon on 05/10/2017.
 */
$(document).ready(function () {
   $("#btnAccendi").on("click", function () {
       $(".lampadina").addClass("accesa");
   });
    $("#btnSpegni").on("click", function () {
        $(".lampadina").removeClass("accesa");
    });
    var contenuto = {
        "margin-left":"140px",
        "width":"600px",
        "border":"1px solid black",
        "margin-top": "10px",
        "padding":"5px"
    };
    $("#contenuto").hide().css(contenuto);
    $("#descrizione").mouseover(function () {
        $("#contenuto").show(600);
    });
    $("#descrizione").mouseout(function () {
        $("#contenuto").hide(600);
    });
    $("#descrizione").css({
        "width": "160px",
        "height":"40px",
        "text-align":"center",
        "lineHeight":"40px",
        "border-radius":"10px",
        "font-size":"14pt",
        "margin-left":"100px",
        "text-decoration":"underline",
        "background-color":"#AAA",
        "cursor":"pointer"
    })
});