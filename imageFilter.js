function showPreviewOne(event){
      if(event.target.files.length > 0){
        let src = URL.createObjectURL(event.target.files[0]);
        let preview = document.getElementById("uploadedImage");
        preview.src = src;
        preview.style.display = "block";
            
            const canvas = document.getElementById('cv');
            const ctx = canvas.getContext('2d');
            const input = document.getElementById('uploadedImage')
            
            var image = new Image();
            image.src = document.getElementById('uploadedImage').src;
            
            var imgd = ctx.getImageData(60, 50, input.clientWidth, input.clientHeight);
            var pix = imgd.data;
            
            image.onload = function(){
                  for (var i = 0, n = pix.length; i < n; i += 4) {
                      pix[i  ] = 255 - pix[i  ]; // red
                      pix[i+1] = 255 - pix[i+1]; // green
                      pix[i+2] = 255 - pix[i+2]; // blue
                      // i+3 is alpha (the fourth element)
                  }
                  ctx.drawImage(imgd, 0, 0, input.clientWidth, input.clientHeight);
            }

      } 
    }


/*
function putImageData(ctx, imageData) {
  var data = imageData.data;
  var height = imageData.height;
  var width = imageData.width;
  var limitBottom = dirtyY + dirtyHeight;
  var limitRight = dirtyX + dirtyWidth;
  for (var y = dirtyY; y < limitBottom; y++) {
    for (var x = dirtyX; x < limitRight; x++) {
      var pos = y * width + x;
      ctx.fillStyle = 'rgba(' + data[pos*4+0]
                        + ',' + data[pos*4+1]
                        + ',' + data[pos*4+2]
                        + ',' + (data[pos*4+3]/255) + ')';
      ctx.fillRect(x + 60, y + 50, 1, 1);
    }
  }
}

// Create an ImageData object from it
var imagedata = ctx.getImageData(60, 50, input.clientWidth, input.clientHeight);
// use the putImageData function that illustrates how putImageData works
putImageData(ctx, imagedata, 150, 0, 50, 50, 25, 25);


/*const canvas = document.getElementById('cv');
const ctx = canvas.getContext('2d');
var image = document.getElementById('uploadedImage');

image.addEventListener('load', e => {
  ctx.drawImage(image, 21, 20);
});
*/

//ImageBitmap.height()
*/
