function showPreviewOne(event){
      if(event.target.files.length > 0){
        let src = URL.createObjectURL(event.target.files[0]);
        let preview = document.getElementById("uploadedImage");
        preview.src = src;
        preview.style.display = "block";
            
            const canvas = document.getElementById('cv');
            const ctx = canvas.getContext('2d');
            var image = document.getElementById('uploadedImage');
            ctx.drawImage(image, 21, 20);

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
