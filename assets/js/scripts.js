/* ADD CLASS ON SCROLL
-------------------------------------------------------------------------------------------------- */
window.addEventListener('scroll', function(e) {
   let heightHero = document.querySelector('.hero').offsetHeight;

   if(window.scrollY > (heightHero - 150)){

     document.body.classList.add('scroll-down');
   } else {
     document.body.classList.remove('scroll-down');
   }
});


/* EMME (M) ANIMATION 
-------------------------------------------------------------------------------------------------- */
let emmeLists = document.querySelectorAll('.hero svg path');

setInterval(()=>{

   let numRandom = Math.floor(Math.random() * emmeLists.length)

   let emme = emmeLists[numRandom]

   if(emme.style.opacity === '0' || emme.style.opacity === ''){
      emme.style.opacity = 1
   }else{
      emme.style.opacity = 0
   }

}, 30);