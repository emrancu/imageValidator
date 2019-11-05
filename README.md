# imageValidator
# webToast
<p>A jQuery plugin for validating image height, width, size, mime type before upload.</p>
 
 

#Example..
 
 
<pre>

#html
     <div class="form-group imageValidateControl">
                <div class="preview"><img src="" /></div>
                <div class="controls"></div>
                <div class="field-area">
                    <label for="image" class="form-control"> Select Image </label>
                    <input type="file" id="image" name="image">
                </div>
            </div>
           
           
    #js
    
  $("#image").on("change", function () {
            var self = this;
            let options = {
                input: self,
                previewArea: $(self)
                    .closest(".imageValidateControl")
                    .find(".preview"),
                diamention: {
                    minWidth: 100,
                    maxWidth: 1800,
                    minHeight: 100,
                    maxHeight: 1800
                },
                size: 9000,
                mimes: ["image/gif", "image/jpeg", "image/png", "image/PNG", "image/jpg"],
                removeButtonContainer: ".morePhoto"
            };

            ImageValidator.init(options);
        });
</pre>
 

#License
<p>The MIT License (MIT)</p>

<p>Author: <a href="https://alemran.me">AL EMRAN</a></p>
