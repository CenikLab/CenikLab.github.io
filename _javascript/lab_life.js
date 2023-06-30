$(function () {
  const main = new Splide('#main-slider', {
    rewind: true,
    keyboard: true,
    type: 'fade',
    width: "100%",
    height: "65vh",
    pagination: false,
    lazyLoad: 'nearby'
    // arrows: false,
    // cover: true
  });

  const thumbnails = new Splide('#thumbnail-slider', {
    lazyLoad: 'sequential',
    rewind: true,
    fixedWidth: 104,
    fixedHeight: 58,
    isNavigation: true,
    gap: 10,
    focus: 'center',
    pagination: false,
    cover: true,
    dragMinThreshold: {
      mouse: 4,
      touch: 10
    },
    breakpoints: {
      640: {
        fixedWidth: 66,
        fixedHeight: 38
      }
    }
  });

  main.sync(thumbnails);
  main.mount();
  thumbnails.mount();

  $('#main-slider').removeClass('d-none');
  $('#thumbnail-slider').removeClass('d-none');
});
