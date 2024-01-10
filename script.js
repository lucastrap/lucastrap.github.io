$(document).ready(function() {
    $(window).scroll(function() {
        // apparition de la navbar au scroll
        if (this.scrollY > 20) {
            $('.navbar').addClass("sticky");
        } else {
            $('.navbar').removeClass("sticky");
        }

        // apparition du bouton au scroll
        if (this.scrollY > 500) {
            $('.scroll-up-btn').addClass("show");
        } else {
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // aller en haut de la page au click
    $('.scroll-up-btn').click(function() {
        $('html').animate({ scrollTop: 0 });

        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function() {

        $('html').css("scrollBehavior", "smooth");
    });

    // menu navigation responsive
    $('.menu-btn').click(function() {
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    

    // code carousel framework 
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            900: {
                items: 2,
                nav: false
            },
            1000: {
                items: 3,
                nav: false
            }
        }
    });
});

// Ajoutez ces fonctions à votre fichier JavaScript existant

const contenus = document.querySelectorAll(".animation");
const contenus2 = document.querySelectorAll(".animation2");

window.addEventListener("scroll", checkBoxes);
window.addEventListener("scroll", checkBoxes2);

checkBoxes();
checkBoxes2();



function checkBoxes() {
  const triggerBottom = (window.innerHeight / 5) * 4;

  contenus.forEach((animation) => {
    const boxTop = animation.getBoundingClientRect().top;

    if (boxTop < triggerBottom && !animation.classList.contains("show")) {
      animation.classList.add("show");
    } else if (boxTop >= triggerBottom && animation.classList.contains("show")) {
      animation.classList.remove("show");
    }
  });
}

function checkBoxes2() {
  const triggerBottom = (window.innerHeight / 5) * 4;

  contenus2.forEach((animation2) => {
    const boxTop = animation2.getBoundingClientRect().top;

    if (boxTop < triggerBottom && !animation2.classList.contains("show")) {
      animation2.classList.add("show");
    } else if (boxTop >= triggerBottom && animation2.classList.contains("show")) {
      animation2.classList.remove("show");
    }
  });
}

document.addEventListener("DOMContentLoaded", function () {
  const accueil = document.querySelector(".accueil");
  const trails = [];

 
  accueil.addEventListener("click", createShockwave);


  function createShockwave(e) {
      const shockwave = document.createElement("div");
      shockwave.className = "shockwave";
      document.body.appendChild(shockwave);

      const rect = accueil.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      shockwave.style.left = `${x}px`;
      shockwave.style.top = `${y}px`;

      setTimeout(() => {
          shockwave.style.transform = "scale(5)";
          shockwave.style.opacity = 0;
          setTimeout(() => {
              shockwave.remove();
          }, 2000);
      }, 10);
  }
});

function clearForm() {
  setTimeout(function () {
    document.getElementById('nom').value = '';
    document.getElementById('prenom').value = '';
    document.getElementById('email').value = '';
    document.getElementById('message').value = '';
    console.log("Form cleared");
}, 100);
 // Ne pas permettre la soumission du formulaire immédiatement
 return true;
}