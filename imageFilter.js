let preview = document.getElementById("uploadedImage");
preview.src = 'test.jpg';


function showPreviewOne(event){
      if(event.target.files.length > 0){
        let src = URL.createObjectURL(event.target.files[0]);
        let preview = document.getElementById("uploadedImage");
        preview.src = src;
        preview.style.display = "block";
            
            
            var img = document.getElementById("scream");
            var canvas, context;

            canvas = document.getElementById('cv');
            context = canvas.getContext('2d');
            context.fillStyle = "#FF0000";
            context.fillRect(0, 0, 150, 75);

      } 
    }



//ImageBitmap.height()
