const circles = document.querySelectorAll('img');
console.log(circles);

// circles.addEventListener('click', changeBackgroundColor);



circles.forEach( function (element) {
    element.addEventListener('click', () =>{
        document.body.style.backgroundColor = element.style.backgroundColor;
    });
})
circles.forEach( function (element) {
    element.addEventListener('click', () =>{
        document.body.style.color = element.style.color;
    });
})

