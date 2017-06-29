function fadeToChildhood(person) {
	document.getElementById(person).src ="img/team/"+person+"_kid.jpg"
}

function ageMe(person) {
	document.getElementById(person).src ="img/team/"+person+".jpg"
}

//smooth scrolling function
$(function() {
       $("a[href*='#']:not([href='#'])").click(function() {
          console.log(this.href)
          if(!this.href.includes('carousel')) {
             if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                 var target = $(this.hash);
                 target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                 if (target.length) {
                     $('html, body').animate({
                         scrollTop: target.offset().top-35
                     }, 600);
                     return false;
                 }
             }
          }
       });
   })

