function showPreviewOne(event){
      if(event.target.files.length > 0){
        let src = URL.createObjectURL(event.target.files[0]);
        let preview = document.getElementById("uploadedImage");
        preview.src = src;
        preview.style.display = "block";
            
            var canvas = document.getElementById('cv');
            var context = canvas.getContext('2d');
            var img = document.getElementById("uploadedImage");
            context.drawImage(img, 100, 100);
            context.drawImage(document.getElementById("uploadedImage"), 100, 100);

      } 
    }



//ImageBitmap.height()
