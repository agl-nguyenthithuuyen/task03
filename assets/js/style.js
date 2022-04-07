
$(document).ready(function(){
  // $(".c-wrapper__description11").hide();
  // $(".c-wrapper__description10").hide();
  // $(".c-wrapper__description9").hide();
  // $(".c-wrapper__text11").show();
  // $(".c-wrapper__text10").show();
  // $(".c-wrapper__text9").show();

  $(".c-wrapper__toggle1").click(function(){
    $(".c-wrapper__description11").slideToggle(300);
    $(".c-wrapper__text11").slideToggle(300);
    $(".c-icon__show11").toggleClass("c-rotage");
  });

  $(".c-wrapper__toggle2").click(function(){
    $(".c-wrapper__description10").slideToggle(300);
    $(".c-wrapper__text10").slideToggle(300);
    $(".c-icon__show10").toggleClass("c-rotage");
  });

  $(".c-wrapper__toggle3").click(function(){
    $(".c-wrapper__description9").slideToggle(300);
    $(".c-wrapper__text9").slideToggle(300);
    $(".c-icon__show9").toggleClass("c-rotage");

  });

  $(".c-wrapper__toggle4").click(function(){
    $(".c-wrapper__description8").toggle(300);
    $(".c-wrapper__text8").toggle(300);
    $(".c-icon__show8").toggleClass("c-rotage");

  });

  $(".c-wrapper__toggle5").click(function(){
    $(".c-wrapper__description7").toggle(300);
    $(".c-wrapper__text7").toggle(300);
    $(".c-icon__show7").toggleClass("c-rotage");
  });

  $(".c-wrapper__toggle6").click(function(){
    $(".c-wrapper__description6").toggle(300);
    $(".c-wrapper__text6").toggle(300);
    $(".c-icon__show6").toggleClass("c-rotage");
  });

  $(".c-wrapper__toggle7").click(function(){
    $(".c-wrapper__description5").toggle(300);
    $(".c-wrapper__text5").toggle(300);
    $(".c-icon__show5").toggleClass("c-rotage");
  });

  $(".c-wrapper__toggle8").click(function(){
    $(".c-wrapper__description4").toggle(300);
    $(".c-wrapper__text4").toggle(300);
    $(".c-icon__show4").toggleClass("c-rotage");
  });

  $(".c-wrapper__toggle9").click(function(){
    $(".c-wrapper__description3").toggle(300);
    $(".c-wrapper__text3").toggle(300);
    $(".c-icon__show3").toggleClass("c-rotage");
  });

  $(".c-wrapper__toggle10").click(function(){
    $(".c-wrapper__description2").toggle(200);
    $(".c-wrapper__text2").toggle(300);
    $(".c-icon__show2").toggleClass("c-rotage");
  });

  $(".c-wrapper__toggle11").click(function(){
    $(".c-wrapper__description1").toggle(200);
    $(".c-wrapper__text1").toggle(300);
    $(".c-icon__show1").toggleClass("c-rotage");
  });


//c-bar__item
  $(".c-icon__bar").click(function(){
    $(".c-bar").toggleClass("c-header__show");
    $(".c-icon__bar").toggleClass("c-icon__show");
  });
  
  $(".c-bar__item").click(function(){
    $(".c-bar").toggleClass("c-header__show");
    $(".c-icon__bar").toggleClass("c-icon__show");
  });
  
});
  console.log('hi guys');
