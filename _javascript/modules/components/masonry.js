export function loadGrid() {
  const gridElement = $('.masonry-grid');
  if (gridElement.length) {
    const grid = $('.masonry-grid').masonry({
      percentPosition: true
    });

    // layout Masonry after each image loads
    grid.imagesLoaded().progress(function () {
      grid.masonry('layout');
    });
  }
}
