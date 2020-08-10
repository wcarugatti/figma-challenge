$(() => {
  slickEstados();
  fetchTours();
});

function slickEstados() {
  $(".estados").slick({
    dots: true,
    prevArrow:
      '<svg class="slick-arrow arrow-prev" width="19" height="30" viewBox="0 0 19 30" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18.525 26.475L7.07502 15L18.525 3.525L15 0L2.47955e-05 15L15 30L18.525 26.475Z" /></svg>',
    nextArrow:
      '<svg class="slick-arrow arrow-next" width="19" height="30" viewBox="0 0 19 30" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18.525 26.475L7.07502 15L18.525 3.525L15 0L2.47955e-05 15L15 30L18.525 26.475Z" /></svg>',
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 1050,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
}

function slickAtividades() {
  $(".atividades").slick({
    dots: true,
    prevArrow:
      '<svg class="slick-arrow arrow-prev" width="19" height="30" viewBox="0 0 19 30" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18.525 26.475L7.07502 15L18.525 3.525L15 0L2.47955e-05 15L15 30L18.525 26.475Z" /></svg>',
    nextArrow:
      '<svg class="slick-arrow arrow-next" width="19" height="30" viewBox="0 0 19 30" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18.525 26.475L7.07502 15L18.525 3.525L15 0L2.47955e-05 15L15 30L18.525 26.475Z" /></svg>',
    infinite: false,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 764,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
}

function fetchTours() {
  $.get(
    "https://c2.tours/getToursFromCategories?categories=CAT-ZB0131&lang=br&reduced=1"
  ).then(function (response) {
    let tours = response.data[0].products;
    let htmlString = "";
    for (let i = 0; i < tours.length; i++) {
      let tourPrice =
        tours[i].tipo_tour != "privativo"
          ? tours[i].price_adult
          : tours[i].price;
      htmlString += createCard(
        tours[i].image,
        tours[i].modalidade_nome,
        tourPrice
      );
    }
    $(".atividades").html(htmlString);
    slickAtividades();
  });
}

function createCard(imgUrl, tourName, price) {
  let cardHtml = /* HTML */ `
    <div class="card">
      <div class="img-container">
        <img src="${imgUrl}" />
      </div>
      <div class="card-body d-flex flex-column p-2">
        <strong class="card-title">${tourName}</strong>
        <p class="card-text mb-1 mt-auto">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam,
          quia deserunt.
        </p>
        <hr class="mt-0" />
        <h4>
          <strong>R$</strong> ${price.toLocaleString("pt-br", {
            minimumFractionDigits: 2,
          })}
        </h4>
      </div>
    </div>
  `;
  return cardHtml;
}
