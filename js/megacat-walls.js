$('.swatch-right-boxes-main .swatch-right-boxes').click(function () {
    var getmainchild = $(this).children().last();
    var getswatchtitlename = getmainchild.attr('data-name');
    $('.swatch-left-preview-box .swatch-glazing-title span').attr('data-name', getswatchtitlename)
    $('.swatch-left-preview-box .swatch-glazing-title span').text(getswatchtitlename)

    var swatchimgtopreview = $(this).children().first().children().attr('src');
    $('.swatch-preview-img img').attr('src', swatchimgtopreview)
});

$('.swatch-right-boxes-main .swatch-right-boxes-paint').click(function () {
  var getmainchild1 = $(this).children().last();
  var getswatchtitlename1 = getmainchild1.attr('data-paint-name');
  $('.swatch-left-preview-box .swatch-paint-title span').attr('data-paint-name', getswatchtitlename1)
  $('.swatch-left-preview-box .swatch-paint-title span').text(getswatchtitlename1)

  var swatchimgtopreview1 = $(this).children().first().children().attr('src');
  $('.swatch-preview-img-paint img').attr('src', swatchimgtopreview1)
});
$('.swatch-right-boxes-main .swatch-right-boxes-panel-fabric').click(function () {
  var getmainchild2 = $(this).children().last();
  var getswatchtitlename2 = getmainchild2.attr('data-panel-name');
  $('.swatch-left-preview-box .swatch-panel-fabric-title span').attr('data-panel-name', getswatchtitlename2)
  $('.swatch-left-preview-box .swatch-panel-fabric-title span').text(getswatchtitlename2)

  var swatchimgtopreview2 = $(this).children().first().children().attr('src');
  $('.swatch-preview-img-panel-fabric img').attr('src', swatchimgtopreview2)
});

$('.swatch-right-boxes-main .swatch-right-boxes-panel-door').click(function () {
  var getmainchild3 = $(this).children().last();
  var getswatchtitlename3 = getmainchild3.attr('data-panel-door-name');
  $('.swatch-left-preview-box .swatch-panel-door-title span').attr('data-panel-door-name', getswatchtitlename3)
  $('.swatch-left-preview-box .swatch-panel-door-title span').text(getswatchtitlename3)

  var swatchimgtopreview3 = $(this).children().first().children().attr('src');
  $('.swatch-preview-img-panel-door img').attr('src', swatchimgtopreview3)
});


$('.swatch-right-boxes-main .swatch-right-boxes-laminate').click(function () {
  var getmainchild4 = $(this).children().last();
  var getswatchtitlename4 = getmainchild4.attr('data-laminate-name');
  $('.swatch-left-preview-box .swatch-laminate-title span').attr('data-laminate-name', getswatchtitlename4)
  $('.swatch-left-preview-box .swatch-laminate-title span').text(getswatchtitlename4)

  var swatchimgtopreview4 = $(this).children().first().children().attr('src');
  $('.swatch-preview-img-laminate img').attr('src', swatchimgtopreview4)
});


$(document).ready(function(){
  var multiideaslider = $('.multi-carousel-inner').children();
 
 var multiideaslidercontent = $('.idea-right-content-main').children();

  for (let index = 0; index < multiideaslidercontent.length; index++) {
    multiideaslidercontent[index].setAttribute('data-content-idea-id', index);
  }

  for (let index1 = 0; index1 < multiideaslider.length; index1++) {
    multiideaslider[index1].setAttribute('data-idea-id', index1);
  }

  $(document).on("click",".multi-carousel-item",function(e){
    e.preventDefault();
    $('.idea-right-content').removeClass('show-item');
    $('.multi-carousel-item').removeClass('selected');
    var imagetoset = multiideaslider[$(this).attr("data-idea-id")];
    $(imagetoset).addClass('selected');
    var image_tag = $(imagetoset).children();
    var imagepathtoset = $(image_tag).attr('src');
    $('.idea-starters-preview-img').attr('src', imagepathtoset);
    var showitem = multiideaslidercontent[$(this).attr("data-idea-id")];
    $(showitem).addClass('show-item');
  });  
  
});



var currentSlide = "";
var slidewidth = "";
$(document).on("click", ".custom-control-arrows .next-arrow", function (e) {
    e.preventDefault();
    currentSlide = $("body").find(".custom-slider .custom-slide.active"); 
    currentSlide.next().addClass("active");
    currentSlide.removeClass("active");
    slidewidth = currentSlide.width() + 10;    
    currentSlide.css('margin-left', "-" + slidewidth + "px");
    $(".custom-control-arrows .prev-arrow").removeClass("disabled");
    if ($("body").find(".custom-slider .custom-slide:last-child").hasClass("active")) {
        $(".custom-control-arrows .next-arrow").addClass("disabled");
        $(".custom-control-arrows .prev-arrow").removeClass("disabled");
    }else{
        $(".custom-control-arrows .next-arrow").removeClass("disabled");
    }
});


$(document).on("click", '.custom-control-arrows .prev-arrow', function (e) {
    e.preventDefault();
    currentSlide = $("body").find(".custom-slider .custom-slide.active");
    currentSlide.prev().addClass("active");
    slidewidth = currentSlide.width();
    currentSlide.prev().css('margin-left', 0);
    currentSlide.removeClass("active");
    $(".custom-control-arrows .next-arrow").removeClass("disabled");
    if ($("body").find(".custom-slider .custom-slide:first-child").hasClass("active")) {
      $(".custom-control-arrows .prev-arrow").addClass("disabled");
      $(".custom-control-arrows .next-arrow").removeClass("disabled");
    }else{
      $(".custom-control-arrows .prev-arrow").removeClass("disabled");
    }    
});


const mediamax991 = window.matchMedia('(max-width: 991.99px)');
var imagedivtocopy = $('.desktop-html-to-copy').html();
$('.mobile-image-append').append(imagedivtocopy);
document.addEventListener('DOMContentLoaded', function () {
  if (mediamax991.matches) {
    const titanCatBlock = document.querySelector('.titanvategorybg');
    const voloCatBlock = document.querySelector('.volovategorybg');
    const trendCatBlock = document.querySelector('.trendwallvategorybg');
    const titan_showOnMobile = document.querySelector('.titan_showOnMobile');
    const volo_showOnMobile = document.querySelector('.volo_showOnMobile');
    const trend_showOnMobile = document.querySelector('.trend_showOnMobile');

    titan_showOnMobile.classList.add('show');

    titanCatBlock.addEventListener('click', function () {
      document.querySelector('.showOnMobile.show').classList.remove('show');
      titan_showOnMobile.classList.add('show');
    });

    voloCatBlock.addEventListener('click', function () {
      document.querySelector('.showOnMobile.show').classList.remove('show');
      volo_showOnMobile.classList.add('show');
    });

    trendCatBlock.addEventListener('click', function () {
      document.querySelector('.showOnMobile.show').classList.remove('show');
      trend_showOnMobile.classList.add('show');
    });
  }
});
function equalHeight() {
  var wallcaption = Array.from(document.getElementsByClassName('wall-slider-caption'));

  for (let w = 0; w < wallcaption.length; w++) {
    var setheightcaption = Math.max(wallcaption[0].scrollHeight);
    wallcaption[w].style.height = setheightcaption + 'px';
  }
  var wallindicators = document.getElementsByClassName('wallsliderindicators');
  wallindicators[0].style.bottom = setheightcaption - 58 + 'px';
}
equalHeight();

