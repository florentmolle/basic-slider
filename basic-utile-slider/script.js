// BASIC UTILE SLIDER


// get all we need
const innerSlideBox = document.querySelector('.slider-innerbox');
const innerSlide = document.querySelectorAll('.inner-slide');
const sliderImg = document.querySelectorAll('.slider-img');
const slideBtn = document.querySelectorAll('.slide-btn');
const nextBtn = document.querySelector('.next-btn');
const prevBtn = document.querySelector('.prev-btn');


// background colors for div
let colors = ['#87D6D0', '#F3EDE4', '#F7E0AE', '#FB9485', '#FA748F', '#F4771D'];

for(i=0; i<colors.length; i++){
    sliderImg.forEach((s)=>{
        s.style.background = `${colors[i++]}`
    })
}



// slide next and prev
let counter = 0;
let size = innerSlide[0].clientWidth;

function nextSlide(){
    if(counter+1 >= innerSlide.length)return;
    counter++;
    innerSlideBox.style.transform = 'translateX('+(-size * counter)+'px)';
};
function prevSlide(){
    if(counter<=0) return;
    counter--;
    innerSlideBox.style.transform = 'translateX('+(-size * counter)+'px)';
};

nextBtn.addEventListener('click', nextSlide)
prevBtn.addEventListener('click', prevSlide);


//btn colors depend on div current color -- cool for the demo ;) 

slideBtn.forEach((btn)=>{
    btn.style.color = `${colors[0]}`
})

function btnColorChange(){
    colors.forEach((c, i)=>{
        i = counter
        slideBtn.forEach((b)=>{
            b.style.color = `${colors[i]}`
        });
    });
};

slideBtn.forEach((btn)=>{
    btn.addEventListener('click', btnColorChange);
});

// if window resize
window.addEventListener('resize', ()=>{
    size = innerSlide[0].clientWidth;
});






