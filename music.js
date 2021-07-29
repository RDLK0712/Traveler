    function changeFrameHeight(){
        var ifm= document.getElementById("iframepage"); 
        ifm.height=document.documentElement.clientHeight;

    }

    window.onresize=function(){  
         changeFrameHeight();  

    } 

$('.one-time').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 2,
    slidesToScroll: 2,
    adaptiveHeight: true
  });