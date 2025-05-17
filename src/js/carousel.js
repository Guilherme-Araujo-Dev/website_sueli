// Objetos jQuery
const $carouselItems = $('.carousel-item');
const $prevButton = $('.prev-button');
const $nextButton = $('.next-button');
const $dot = $('.dot');

let currentIndex = 0;
let autoScroll;

// Exibe as imagens do carrossel
function showImage(index) {
  currentIndex = index;

  // Verifica se o índice está fora do intervalo
  if (currentIndex < 0) {
    currentIndex = $carouselItems.length - 1;
  } else if (currentIndex >= $carouselItems.length) {
    currentIndex = 0;
  }

  // Desliza a imagem atual e mostra a próxima
  $carouselItems.css('transform', `translateX(-${currentIndex * 100}%)`);

  // Atualiza os pontos
  $dot.removeClass('active');
  $dot.eq(currentIndex).addClass('active');
}

// Faz o scroll automático
function startScroll() {
  autoScroll = setInterval(() => {
    showImage(currentIndex + 1);
  }, 7000);
}

// Reseta o timeout do scroll automático
function resetScroll() {
  clearInterval(autoScroll);
  startScroll();
}

// Adiciona o evento de clique a cada ponto
$dot.click((event) => {
  const idItem = $(event.target).attr('id').split('-')[1];

  resetScroll();
  showImage(idItem - 1);
});

// Adiciona os eventos de clique aos botões de navegação
$prevButton.click(() => {
  resetScroll();
  showImage(currentIndex - 1);
});

$nextButton.click(() => {
  resetScroll();
  showImage(currentIndex + 1);
});

// Inicia o carrossel
startScroll();
