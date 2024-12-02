const circleSection = document.querySelector('.circles');
const circles = document.querySelectorAll('.circle');
const progressCircles = document.querySelectorAll('.progress');

window.addEventListener("scroll", function() {
    
    if (scrollY > circleSection.offsetTop - 600 ) {
        
        for(let i = 0; i < circles.length; i++){
                
            let radius = progressCircles[i].r.baseVal.value;
            let circumference = radius * 2 * Math.PI;
            progressCircles[i].style.strokeDasharray = circumference;
            const progress = circles[i].dataset.prog;
            progressCircles[i].style.strokeDashoffset = circumference - ( progress / 100 ) * circumference;
        }
    }
})