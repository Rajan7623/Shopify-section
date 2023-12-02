<style>
  .carousel {
    width: 60%;
    margin: 100px auto;
    background-color: #087f5b;
    padding: 32px 48px 32px 86px;
    border-radius: 8px;
    position: relative;
    display: flex;
    align-items: center;
    gap: 86px;
  }

  img {
    height: 200px;
    width: 400px;
    /* Set a fixed width or adjust as needed */
    border-radius: 8px;
    transform: scale(1.8);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.25);
  }

  .testimonial-text {
    font-size: 18px;
    font-weight: 500;
    line-height: 1.5;
    margin-bottom: 32px;
    color: #e6fcf5;
  }

  .testimonial-author {
    font-size: 14px;
    margin-bottom: 4px;
    color: #c3fae8;
  }

  .testimonial-job {
    font-size: 12px;
    color: #c3fae8;
  }

</style>
{% for block in section.blocks %}
  {% if block.type == "auth-slider" %}
    <section class="carousel">
      <img
        src="{{ block.settings.img-sld | image_url }}"
        width="600"
        alt="Maria de Almeida">

      <blockquote class="testimonial">
        <p class="testimonial-text">
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Official nesciunt aliquid ex atque quibusdam. Rerum officia unde suscipit quo sunt hic illo fugit."
        </p>
        <p class="testimonial-author">Maria de Almeida</p>
        <p class="testimonial-job">Senior Product Manager at EDP Comercial</p>
      </blockquote>
    </section><br>
  {% endif %}
{% endfor %}

{% schema %}
  {
    "name": "testimonial_slider",
    "blocks": [
      {
        "name": "auth-slider",
        "type": "auth-slider",
        "settings": [
          {
            "type": "image_picker",
            "label": "Image Picker",
            "id": "img-sld"
          }
        ]
      }
    ],
    "presets": [
      {
        "name": "testimonial_slider",
        "blocks": [
          {
            "type": "auth-slider"
          }
        ]
      }
    ]
  }
{% endschema %}
