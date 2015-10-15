$(document).ready(function() {
  fetchImages().then(renderImagesAndAddEventListeners)
});

function fetchImages() {
  return $.ajax({
    type: "GET",
    dataType: "jsonp",
    url: "http://numberonelarge.com/tapjoy/jsonp.php"
  });
}

function reorderByHeight(images) {
  var sortedByHeight = images.sort(function (img1, img2) {
    return img2.height - img1.height;
  }); //now I need to order by 400px heights and make a new array

};

function renderImagesAndAddEventListeners(images) {
  var imagesLoaded = 0;
  var totalNumberOfImages = images.length;
  var $images = $(images.map(renderImage).join(''));

  $images.hide()
         .on('load', function () {
           if (++imagesLoaded === totalNumberOfImages) {
             var reordered = reorderByHeight($images);
             $('.grid img').remove();
             reordered.appendTo('.grid').show();
           }
         }).appendTo('.grid');
}

function renderImage(image) {
  return '<img src="' + image + '">';
}
