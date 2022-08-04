$(document).ready(function () {
  // SLICK SLAJDER
  $(".projects_slider").slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    dots: false,
    variableWidth: true,
    arrow: true,
    autoplay: true,
    autoplaySpeed: 2000,
    infinite: true,
    prevArrow: ".arrow--left",
    nextArrow: ".arrow--right",
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          centerMode: true,
        },
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1,
          centerMode: false,
        },
      },
    ],
  });

  $(".companies_slider").slick({
    slidesToShow: 7,
    slidesToScroll: 1,
    dots: false,
    variableWidth: true,
    arrow: true,
    autoplay: true,
    autoplaySpeed: 2000,
    infinite: true,
    prevArrow: null,
    nextArrow: null,
    responsive: [
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 3,
          centerMode: true,
        },
      },
      {
        breakpoint: 540,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  });

  $(".story_slider").slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    dots: false,
    variableWidth: true,
    arrow: true,
    autoplay: true,
    autoplaySpeed: 2000,
    infinite: true,
    prevArrow: ".arrow--left",
    nextArrow: ".arrow--right",
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          centerMode: true,
        },
      },
    ],
  });

  // TAB TOGGLE
  $(".tab_wrapper").on("click", function () {
    // clicks je undefined
    let clicks = $(this).data("clicks");
    if (clicks) {
      // second click
      $(this).children(".senectus_panel").slideToggle();
      $(this)
        .children(".senectus_nascetur__title")
        .children(".senectus_nascetur__plus")
        .children(".plus_vertical")
        .show();
    } else {
      // first click
      $(".tab_wrapper").each(function () {
        // clicks je false
        $(".tab_wrapper").data("clicks", "");
      });
      $(".tab_wrapper").children(".senectus_panel").slideUp();
      $(".tab_wrapper")
        .children(".senectus_nascetur__title")
        .children(".senectus_nascetur__plus")
        .children(".plus_vertical")
        .show();
      $(this).children(".senectus_panel").slideToggle();
      $(this)
        .children(".senectus_nascetur__title")
        .children(".senectus_nascetur__plus")
        .children(".plus_vertical")
        .hide();
    }
    // !clicks je true
    $(this).data("clicks", !clicks);
    console.log(clicks);
  });

  // TAB TOGGLE samo plus znak
  // $(".senectus_nascetur__plus").on("click", function () {
  //   $(this).parent().next().slideToggle();
  //   $(this)
  //     .children(".plus_vertical")
  //     .toggle();
  // });

  //ISOTOPE CATEGORIES
  let categories = $(".isotope_container");

  categories.isotope({
    layoutMode: "fitRows",
    percentPosition: true,
    itemSelector: ".card--categories",
  });

  //da li je potreban <a> tag na blog_tabs ili mogu da ga izbacim i sve stavim u style
  $(".categories_tabs ul li").on("click", function () {
    //isotope
    // let filterValue = $(this).attr("data-filter");
    let filterValue = $(this).data("filter");
    categories.isotope({ filter: filterValue });
    console.log(filterValue);
    //activacija buttona
    // let tabs = $(".categories_tabs ul").children();
    let tabs = $(this).siblings();
    tabs.removeClass("active");
    $(this).addClass("active");
  });

  //scroll shadow
  $(window).on("scroll", function () {
    let height = $(this).scrollTop();
    let nav = $(".navbar");

    if (height > 0) {
      nav.addClass("navbar_shadow");
    } else {
      nav.removeClass("navbar_shadow");
    }
  });
});
