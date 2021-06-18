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
            
            var imgd = ctx.getImageData(image);
            var pix = imgd.data;
            
            image.onload = function(){
                  for (var i = 0, n = pix.length; i < n; i += 4) {
                      pix[i  ] = 255 - pix[i  ]; // red
                      pix[i+1] = 255 - pix[i+1]; // green
                      pix[i+2] = 255 - pix[i+2]; // blue
                      // i+3 is alpha (the fourth element)
                  }
                  ctx.putImageData(imgd, 0, 0, input.clientWidth, input.clientHeight);
            }

      } 
    }


/*const canvas = document.getElementById('cv');
const ctx = canvas.getContext('2d');
var image = document.getElementById('uploadedImage');

image.addEventListener('load', e => {
  ctx.drawImage(image, 21, 20);
});
*/

//ImageBitmap.height()
