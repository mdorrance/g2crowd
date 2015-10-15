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
function sumTo(sum) {
  for (var i = 0; i < array.length; i++) {
    for (var j = array.length; j > i; j--) {
      if (array[i] + array[j] === sum) {
        var x = array[i];
        var y = array[j];

        array.splice(array[i-1], 1);
        array.pop();
        return [x,y];
      }
    }
  }
}
function reorderByHeight(images) {
  var pairedImages = [];
  var sorted = images.sort(function (img1, img2) {
    return img2.height - img1.height;
  });

  for (var i = 0; i < sorted.length; i++) {
    for (var j = sorted.length-1; j > i; j--) {
      if (sorted[i].height + sorted[j].height === 400) {
        var x = sorted[i];
        var y = sorted[j];
        sorted.splice(j--, 1);
        sorted.splice(i, 1);
        pairedImages.push(x,y);
      }
    }
  }
  return $.merge(pairedImages, sorted);
};

function renderImagesAndAddEventListeners(images) {
  var imagesLoaded = 0;
  var totalNumberOfImages = images.length;
  var $images = $(images.map(renderImage).join(''));

  $images.hide()
         .on('load', function () {
           if (++imagesLoaded === totalNumberOfImages) {
             var reordered = $( reorderByHeight($images) );
             $('.grid img').remove();
             reordered.appendTo('.grid').show();
           }
         }).appendTo('.grid');
}

function renderImage(image) {
  return '<img src="' + image + '">';
}
