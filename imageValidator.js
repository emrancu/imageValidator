/*Author :AL EMRAN
email:emrancu1@gmail.com
website:http://alemran.me
*/


"use strict";

const FileValidator= (function() {

// variable defining
let is_valid_image=true;
let options = {} ;
let reader,file,fileType,ValidImageTypes,file_size;


const check_diamention = (w,h) => {
    
    if ((w >= options.diamention.minWidth) && ( w <=  options.diamention.maxWidth)) {            
      }else{
          is_valid_image = false;
      }

  
    if ((h >= options.diamention.minHeight) && ( w <=  options.diamention.maxHeight)) {            
     }else{
        is_valid_image = false; 
     }
  


     }

const check_size = () => {
     
  console.log('Size', options.size*1000)

    if ( (options.size*1000) >= file_size ) {   
    }else{
        is_valid_image = false;
        console.log('Diamention Problem Size')
    }
 
     } 

const check_mimes = () => {

        if (  $.inArray(fileType, ValidImageTypes) > 0 ) {  
        }else{
        is_valid_image = false;
        }
        
    }


const  finishProcess = (img) => {

    
        if (is_valid_image) {
 
          $(options.previewArea).show();
          $(options.previewArea).find('img').attr('src', img);
        

        } else {
         
            alert('Problem')

            $(options.input).replaceWith($(options.input).clone(true));

            $(options.previewArea).hide();
            $(options.previewArea).find('img').removeAttr("src");

        }
    }


const watchSelection = () => {
  
    if (options.input.files && options.input.files[0]) {
 
            reader = new FileReader();
      
            file = options.input.files[0];
       
            fileType = file["type"];
        
            ValidImageTypes = options.mimes 
      
            file_size = options.input.files[0].size;
      
      
      
        reader.onload = function (e) {

          // image diamention validate
    
          if (options.diamention) {
              
              var img = new Image();
              img.src = e.target.result;
      
              img.onload = function () {
                
                check_diamention(this.width,this.height)

                if (options.size) { 
                   check_size()
                }
 

                if (options.mimes && options.mimes.length>0) { 
                    check_mimes()
                }
  
                 finishProcess(e.target.result);

              
            }
      
          }else{
 

            if (options.size) { 
               check_size()
             }


            if (options.mimes && options.mimes.length>0) { 
                check_mimes()
            }

            
            finishProcess(e.target.result);
        
      
          }
       
      
        }
      
        reader.readAsDataURL(options.input.files[0]);
      }



}


  return {    
    init:function(opt){
        options = opt;
        is_valid_image=true;
        watchSelection();
    } 
  };


})();

