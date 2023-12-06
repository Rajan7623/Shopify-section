const cusSwatch = document.querySelectorAll('label.custom_swatch');

cusSwatch.forEach((element) => {
  element.addEventListener('click', (elm) =>{
    let value = elm.target.getAttribute('data-img-url');

    elm.target.closest('.product-card').querySelector('.product-card__figure img').setAttribute('srcset',value);

    console.log('swatch done');

  })
})
