function showPreviewOne(event){
      if(event.target.files.length > 0){
        let src = URL.createObjectURL(event.target.files[0]);
        let preview = document.getElementById("uploadedImage");
        preview.src = src;
        preview.style.display = "block";
            
            var canvas, context;

            canvas = document.getElementById('cv');
            context = canvas.getContext('2d');
            context.drawImage(src', 10, 30, 20, 20);
      } 
    }





//ImageBitmap.height()
