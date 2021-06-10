function displayImage(input) {
        if (input.files && input.files[0]) {
                var reader = new FileReader();
                var width = imageElement.naturalWidth;
                var height = imageElement.naturalHeight;

            reader.onload = function (e) {
                    document.getElementById("uploadedImage").src = 'e.target.result';
                $('#uploadedImage')
                        .attr('src', e.target.result)
                        .width(400);
                        .height(400);
            };

            reader.readAsDataURL(input.files[0]);
        }
    }




//ImageBitmap.height()
