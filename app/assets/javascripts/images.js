$(document).ready(function() {
  fetchImages().then(renderImagesAndAddEventListeners)
                .then(addImagesToGrid)
                .then(reorderByHeight)
  // sorted();
})

var realImageSizes = [];

function reorderByHeight(imageHeights) {
  // var balance = [];
  // for (i = 0; i < realImageSizes.length; i++) {
  //   balance.push(realImageSizes[i].height);
  // };
  var a = imageHeights.sort(function(img1, img2) {
    return img1.height() - img2.height();
  }).map(function (img) {
    return img.height();
  });
    debugger;
  // realImageSizes.forEach(function (image) {
  //   // height = $('img').height;
  // });
}

function renderImagesAndAddEventListeners(images) {
  return images.map(renderImage);
}

function addImagesToGrid(images) {
  images.forEach(function (image) {
    image.appendTo('.grid');
  });
  return images;
}

function renderImage(image) {
  return $('<img src="' + image + '">').on('load', function () {
    realImageSizes.push({image: this, height: this.height});
  });
}

function fetchImages() {
  return $.ajax({
    type: "GET",
    dataType: "jsonp",
    url: "http://numberonelarge.com/tapjoy/jsonp.php"
  });
}

function render(image) {

  $(".grid").append(
    "<div class='image'><img src='"
    + image
    + "'></div>"
  )
}

// temporary array holds objects with position and sort-value
function sorted() {
  var mapped = $("#images img").map(function(img, i) {
    return { index: i, value: img.height };
  })
  // console.table(mapped);

  // sorting the mapped array containing the reduced values
  // mapped.sort(function(a, b) {
  //   return +(a.value > b.value) || +(a.value === b.value) - 1;
  // });
  //
  // // container for the resulting order
  // var result = mapped.map(function(el){
  //   return images[el.value];
  // });
}
