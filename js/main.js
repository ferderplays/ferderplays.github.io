$(document).ready(() => {
    $(".age").text("16")
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://api.countapi.xyz/hit/website.ferder.repl.co/visits");
    xhr.responseType = "json";
    xhr.onload = function() {
        $("#visits").text(this.response.value);
    }
    xhr.send();
    $(window).scroll(() => {
        if ($(window).scrollTop()) {
            $("header").addClass("fixed");
        } else {
            $("header").removeClass("fixed");
        }
    })
})