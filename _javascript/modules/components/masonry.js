export function loadGrid() {
    const grid = $('.masonry-grid').masonry({
        percentPosition: true
    })

    // layout Masonry after each image loads
    grid.imagesLoaded().progress( function() {
        grid.masonry('layout');
    });
}