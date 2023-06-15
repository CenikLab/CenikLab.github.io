/**
 * Set up image lazy-load
 */

export function imgLazy() {
  if ($('#core-wrapper img[data-src]') <= 0) {
    return;
  }

  /* Stop shimmer when image loaded */
  document.addEventListener('lazyloaded', function (e) {
    const $img = $(e.target);
    $img.parent().removeClass('shimmer');

   document.querySelectorAll("img.lazyloaded").forEach(function(img){
      if (img.complete && img.naturalHeight !== 0) {
        $(img).parent().removeClass('shimmer');
      }
    })
  });
}
