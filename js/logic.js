/**
 * Created by Administrator on 2018-10-14.
 * Design nas.
 */
function Logic () {

    // class delay logic event
    $.fn.queueAddClass = function(className) {
        this.queue('fx', function(next) {
            $(this).addClass(className);
            next();
        });
        return this;
    };
    $.fn.queueRemoveClass = function(className) {
        this.queue('fx', function(next) {
            $(this).removeClass(className);
            next();
        });
        return this;
    };
    $.fn.queuetoggleClass = function(className) {
        this.queue('fx', function(next) {
            $(this).toggleClass(className);
            next();
        });
        return this;
    };

    // pop event
    $(".pop_btn").click(function(){
        $(".pop").stop().fadeToggle(500);
        return false; //중요
    });
    $(document).click(function(e){
        if(e.target.className =="pop"){
            return false
        }
        $(".pop").stop().fadeOut(500);
    });

    // nav section move event
    $("#nav > li > a, .sectionBtn").click(function () {
        var posY = $($(this).attr("href")).position().top;
        $('.container').stop().animate({"scrollTop": posY}, 1200, 'easeInOutExpo');
        return false;
    });

   





}