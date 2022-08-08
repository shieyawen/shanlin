/*------------------------------------------------------------------
手機選單
------------------------------------------------------------------*/
$(function () {
    function toggleSidebar() {
        $(".button").toggleClass("active");
        $(".sidebar").toggleClass("move-to-left");
        $(".sidebar-list>li").toggleClass("active");
    }
    $(".button").on("click tap", function () {
        toggleSidebar();
    });
    $(document).keyup(function (e) {
        if (e.keyCode === 27) { //注意fancybox開圖時 也是按ESC鍵取消
            $(".button").removeClass("active"); //移除 手機版選單開啟的狀態
            $(".sidebar").removeClass("move-to-left");
            $(".sidebar-list>li").removeClass("active");
        }
    });

    $(window).resize(function() { // 當視窗寬度改變時
        if ($(window).width() > 1079) {  //視窗寬度超過1079px
            $(".button").removeClass("active"); //移除 手機版選單開啟的狀態
            $(".sidebar").removeClass("move-to-left");
            $(".sidebar-list>li").removeClass("active");
        }
    });
});


//沒作用??
// $(function () {
//     $(Window).scroll(function(){
//         var headerTOP =  $(this).scrollTop();
//         var fontTOP = $('.font').offset().top;

//         if( headerTOP > fontTOP ){
//             $('header').addClass('addbgc');
//         }else{
//             $('header').removeClass('addbgc');
//         }

//     });
// });


// $(function(){ 
//     $("div").show(function(){
//         $("#all").fadeIn(2500); 
//     }); 
// });





