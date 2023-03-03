/* ADD CLASS ON SCROLL
-------------------------------------------------------------------------------------------------- */
window.addEventListener('scroll', function() {
   let heightHero = document.querySelector('.hero').offsetHeight;

   if(window.scrollY > (heightHero - 190)){

     document.body.classList.add('scroll-down');
   } else {
     document.body.classList.remove('scroll-down');
   }
});

 