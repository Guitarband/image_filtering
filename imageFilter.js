function displayImage(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();

            reader.onload = function (e) {
                $('#uploadedImage')
                        .attr('src', e.target.result)
                         var width = imageElement.naturalWidth;
                         var height = imageElement.naturalHeight;
                        .width(width);
                        .height(height);
            };

            reader.readAsDataURL(input.files[0]);
        }
    }




//ImageBitmap.height()
