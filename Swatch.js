const cusSwatch = document.querySelectorAll('label.custom_swatch');

cusSwatch.forEach((element) => {
  element.addEventListener('click', (elm) =>{
    let value = elm.target.getAttribute('data-img-url');

    elm.target.closest('.product-card').querySelector('.product-card__figure img').setAttribute('srcset',value);

    console.log('swatch done');

  })
})
  or Swatch liquid
===========================

     {%- if href == blank -%}
      <label class="color-swatch custom_swatch {% if settings.round_color_swatches %}rounded-full{% endif %} {% if white_label == value_downcase %}border{% endif %}" for="{{ id | escape }}" {% if show_tooltip %}data-tooltip="{{ value | escape }}"{% endif %} data-option-value style="{{ swatch_style }} " data-img-url="{{ prd.variants[forLoopNum].image |  img_url: 'master' }}">
        <span class="sr-only" >{{ value }}</span>
      </label>
    {%- else -%}
