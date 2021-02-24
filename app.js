const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li')



    burger.addEventListener('click', () => {
        //toggle nav
        nav.classList.toggle('nav-active');


        //animate links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + .5}s`;

            }
        });
        //Burger animation 
        burger.classList.toggle('toggle')
    });
}

navSlide();  

// Slide show for photo gallery

var counter = 1;
setInterval(function(){
    console.log(setInterval)
    document.getElementById('radio' + counter).checked = true;
    console.log(counter)
    counter++
    console.log(counter)
    if(counter > 4){
        console.log(counter)
        counter = 1;
        console.log(counter)
    }
}, 5000); 

// End of Photo Gallery 