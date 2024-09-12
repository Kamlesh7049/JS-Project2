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

    $("input").focus(function(){
        $(this).css("background-color","pink")
    })
    $("input").blur(function(){
        $(this).css("background-color","red")
    })

})

