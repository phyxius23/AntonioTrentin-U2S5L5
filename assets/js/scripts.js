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

 