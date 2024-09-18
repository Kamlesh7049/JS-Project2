$(document).ready(function(){
    $("button").click(function(){
      $("p").hide()
    })

    // $("button").dblclick(function(){
    //     $("#test").hide()
    // })

    // $("button").click(function() {
    //     $("p.new").hide()
    // })
    // $("#test").click(function(){
    //     $(this).hide()
    // })

    // $("#mypara").mouseenter(function(){
    //     alert("Mouse enter")
    // })
    // $("#mypara").mouseleave(function(){
    //     alert("Mouse leave")
    // })

    // $("#mypara").hover(function(){
    //     alert("Hover on")


        
    // }),
    // function(){
    //  alert("Hover out")
    // }

    // $("input").focus(function(){
    //     $(this).css("background-color","pink")
    // })
    // $("input").blur(function(){
    //     $(this).css("background-color","red")
    // })


    // $("#hide").click(function(){
    //     $("p").hide(2000);
    // });
    // $("#show").click(function(){
    //     $("p").show(2000);
    // });
    // $("btn").click(function(){
    //     $("p").toggle()
    // });

    // $("#fadein").click(function(){
    //     $(".box1").fadeIn()
    //     $(".box2").fadeIn(1000)
    //     $(".box3").fadeIn(3000)
    // });
    $("#fadeout").click(function(){
        $(".box1").fadeOut()
        $(".box2").fadeOut(1000)
        $(".box3").fadeOut(3000)
    });
    $(".container").click(function(){
        $(".content").slideDown(4000);
    });

    // $(".container").click(function(){
    //     $(".content").slideUp(3000);
    // });



});


