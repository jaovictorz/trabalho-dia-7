document.addEventListener('DOMContentLoaded', function() {
    // Armazena o conteúdo original da div #conteudo
    const conteudoOriginal = document.getElementById('conteudo').innerHTML;

    // Adiciona evento de clique para o link "Publicações"
    document.getElementById('publicacoes').addEventListener('click', function(event) {
        event.preventDefault();

        // Restaura o conteúdo original da div #conteudo
        document.getElementById('conteudo').innerHTML = conteudoOriginal;

        // Oculta o indicador de Salvos e exibe o indicador de Publicações
        document.getElementById('indicator-salvos').style.display = 'none';
        document.getElementById('indicator-publicacoes').style.display = 'block';
    });

    // Adiciona evento de clique para o link "Salvos"
    document.getElementById('salvos').addEventListener('click', function(event) {
        event.preventDefault();

        // Atualiza o conteúdo da div #conteudo com as imagens de salvos
        document.getElementById('conteudo').innerHTML = `
        
            <img src="img/salvo1.jpg" alt="Salvo 2">
            <img src="img/salvo2.jpg" alt="Salvo 3">
            <img src="img/salvo3.jpg" alt="Salvo 4">
            <div class="videos-container">
                <video controls autoplay class="video-salvos" id="meu-video">
                    <source src="video/HeyBrother.mp4" type="video/mp4">
                </video>
                <video controls autoplay class="video-salvos" id="meu-video">
                    <source src="video/minhavida.mp4" type="video/mp4">
                </video>
            </div>
        `;
        // Oculta o indicador de Publicações e exibe o indicador de Salvos
        document.getElementById('indicator-publicacoes').style.display = 'none';
        document.getElementById('indicator-salvos').style.display = 'block';
    });

    const publicacoesLink = document.getElementById('publicacoes');
    const salvosLink = document.getElementById('salvos');
    const indicatorPublicacoes = document.getElementById('indicator-publicacoes');
    const indicatorSalvos = document.getElementById('indicator-salvos');

    // Adiciona evento de clique para o link "Publicações"
    publicacoesLink.addEventListener('click', function(event) {
        event.preventDefault();
        indicatorPublicacoes.style.display = 'block'; // Exibe a linha indicadora de Publicações
        indicatorSalvos.style.display = 'none'; // Esconde a linha indicadora de Salvos
    });

    // Adiciona evento de clique para o link "Salvos"
    salvosLink.addEventListener('click', function(event) {
        event.preventDefault();
        indicatorSalvos.style.display = 'block'; // Exibe a linha indicadora de Salvos
        indicatorPublicacoes.style.display = 'none'; // Esconde a linha indicadora de Publicações
    });
});
