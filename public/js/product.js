const productImages = document.querySelectorAll(".product-images img"); // selecting all
const productImageSlide = document.querySelector(".image-slider"); // seclecting image sl

let activeImageSlide = 0; // default slider image

productImages.forEach((item, i) => { // loopinh through each image thumb
   item.addEventListener('click', () => { // adding click event to each image thumbnail
        productImages[activeImageSlide].classList.remove('active'); // removing active cl
        item.classList.add('active'); // adding active class to the current or clicked im
        productImageSlide.style.backgroundImage = `url('${item.src}')`; // setting up ima
        activeImageSlide = i; // updating the image slider variable to track current thum
})
})
// toggle size buttons

const sizeBtns = document.querySelectorAll('.size-radio-btn'); // selecting size buttons
let checkedBtn = 0; // current selected button

sizeBtns.forEach((item, i) => { // looping through each button
    item.addEventListener('click', () => { // adding click event to each 
        sizeBtns[checkedBtn].classList.remove('check'); // removing check class from the current button
        item.classList.add('check'); // adding check class to clicked button
        checkedBtn = i; // upading the variable
    })
})
