
    let stringHtml = "";
    for (var i=0; i<30; i++){
      stringHtml +=  '<div class="slide overlay"><img src="images/'+'imagem'+i+'.jpeg" alt="Image" class="img-fluid"> </div>';
    }
    
    let valor = document.getElementsByClassName("owl-carousel slide-one-item hero-slider");
    valor[0].innerHTML = stringHtml;
