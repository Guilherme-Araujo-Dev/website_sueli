const coll = $('.panel'); // Pega todos os paineis

for (var i = 0; i < coll.length; i++) {
  // Entrando na função de clique
  $(coll[i]).click(function() {
    const parent = $(this).parent();
    const content = $(this).next(); // Obtém o próximo elemento (o texto)

    // Se o pai tiver a classe 'active-panel', a remove e esconde o elemento
    if (parent.hasClass('active-panel')) {
      parent.removeClass('active-panel');
      content.slideUp();

      return;
    }

    // Se não tiver, adiciona a classe 'active-panel' e mostra o elemento
    parent.addClass('active-panel');
    content.slideDown();

    // Remove a classe 'active-panel' e esconde os outros elementos
    for (var x = 0; x < coll.length; x++) {
      if (coll[x] !== this) {
        $(coll[x]).parent().removeClass('active-panel');
        $(coll[x]).next().slideUp();
      }
    }
  });
}

// Ativa a primeira aba
$(coll[0]).click();
