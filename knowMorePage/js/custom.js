$(document).ready(function () {
  $(window).scroll(function () {
    if ($(window).width() < 768 && $(this).scrollTop() > 300) {
      $(".mobile-section").show();
    } else {
      $(".mobile-section").hide();
    }
  });
});

$(window).scroll(function () {
  // $('.pricelistdiv12').css('display','block');
  const scrollTopValue = $(window).scrollTop();

  if (window.matchMedia("(min-width: 768px)").matches) {
    if (scrollTopValue > 700) {
      $(".form-box").addClass("fixed");
      // $('.pricelistdiv13').css('display','none');
      $(".pricelistdiv13").slideUp();
    } else {
      $(".form-box").removeClass("fixed");
      $(".pricelistdiv13").css("display", "block");
    }
  }
});

$(document).ready(function () {
  $(document).on("click", ".form-box.fixed .top_form h2", function () {
    $(this).closest(".top_form").siblings(".pricelistdiv13").slideToggle();
  });
});
