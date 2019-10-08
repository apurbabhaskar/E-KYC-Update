$(document).on("click", ".sub-menu-wrapper > a", function () {
    $(".sub-menu-wrapper > a").not(this).parent("li").removeClass("active");
    $(this).parent("li").toggleClass("active");
});
$(document).on("click", "#sidebarToggle", function () {
    $("body").toggleClass("sidebar-hidden");
});
$('[data-toggle="tooltip"]').tooltip();



 