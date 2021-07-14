$(document).ready(function(){


  if($('.product-price').hasClass("price") === true) {
    $('.regular-price').css({"font-size" : "13px", 
                             "color" : "#999999",
                             "text-decoration" : "line-through"})
  } else {
    $('.regular-price').css({"font-size" : "14px",
                             "color" : "#181717"
                            })
  }

  $('.btn-more').click(function(){
    $('.m_list').fadeIn(1000);
  })
  
})