$(document).on("click", ".sub-menu-wrapper > a", function () {
    $(".sub-menu-wrapper > a").not(this).parent("li").removeClass("active");
    $(this).parent("li").toggleClass("active");
});
$(document).on("click", "#sidebarToggle", function () {    
    $("body").toggleClass("sidebar-hidden");
    if ($('body').hasClass('sidebar-hidden'))
    {
        $("#headimg").attr("src", ",./../../assets/images/wipro-logo.png").width('40px').height('35px').text-align('right');
        // $(".navbar-brand").attr('style','text-align: right');
    }
    else
    {
        $("#headimg").attr("src", "../../../assets/images/holmes-logo.png").width('auto').height('auto')
    }
});
$('[data-toggle="tooltip"]').tooltip();



 