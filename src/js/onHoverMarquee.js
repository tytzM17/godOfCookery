
(function() {
  
  const mouseTarget = document.getElementById("subtitle");
  const mouseTargetClassList = mouseTarget.classList;
  
  mouseTarget.addEventListener('mouseenter', e => {

  mouseTargetClassList.add("marquee");
});

mouseTarget.addEventListener('mouseleave', e => {
 
    mouseTargetClassList.remove("marquee");
});

})();
