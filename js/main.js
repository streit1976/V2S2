$(function(){

  $('.slider').slick({
    arrows: false,
    dots: true,
});

})


document.querySelectorAll('.accordion-item__trigger').forEach((item) =>
item.addEventListener('click', () => {
      const parent = item.parentNode;

      parent.classList.toggle('accordion-item--active')
}) 
)