function clickWeapons() {
    var popup = document.getElementById("Weapons");
    popup.classList.toggle("show");
  }
  
  function clickAmmos() {
    var popup = document.getElementById("Ammos");
    popup.classList.toggle("show"); 
  }

  var boxArray = ['box1','box2','box3'];
  window.addEventListener('mouseup', function(event){
    for(var i=0; i < boxArray.length; i++){
        var box = document.getElementById(boxArray[i]);
        if(event.target != box && event.target.parentNode != box){
         box.style.display = 'none';
        }
    }
  });