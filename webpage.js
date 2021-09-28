$(document).ready(function(){
    $(".dropdown-trigger").dropdown();
    $('.sidenav').sidenav();
    if (window.innerWidth < 601) {
        $('.carousel').carousel({dist:'0', indicators:'true'});
    }
    else {
        $('.carousel').carousel({dist:'0', indicators:'false'});
    }
});
