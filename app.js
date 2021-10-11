
const scrollBtn = document.querySelector('.scrollToTop-btn');
const selectField = document.querySelector('#topNav');

// scroll to top button toggler
scrollBtn.addEventListener('scroll', () => {
    scrollBtn.classList.toggle("active", window.scrollY > 500);
});

// back to top on click
scrollBtn.addEventListener('click', () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});

// make responsive select go to the selected section
// selectField.addEventListener('click', () => {
//     selectField.onChange.location = this.value;
// })