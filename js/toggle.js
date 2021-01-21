$(window).on("load", function () {
    $('.closebtn').click(function (e) { 
        hideForm();
    });
    $('#subscribirse').click(function (e) {
       showForm();
    });
});
function showForm(){
    if($(window).width()<768) 
    $("#mySidebar").css("width", "100vw");
else
    $("#mySidebar").css("width", "40vw");
    $('header').css('z-index', -1);
}
function hideForm(){
    $("#mySidebar").css("width", "0vw");
    $('header').css('z-index', 5);
}
