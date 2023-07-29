import dados from './dados.js'

addEventListener('DOMContentLoaded', () => {
  postGerador()
  modalCriarConta()
})

function postGerador() {
  const postagens = dados.posts
  const $post = document.querySelector('.js-post-limite')
  const main = document.querySelector('main')

  if ($post) clonar($post)

  function clonar($alvo) {
    postagens.forEach((post, indice) => {
      const $clone = $alvo.cloneNode(true)
      
      $clone.dataset.cloneId = post.id

      // dados post header
      $clone.querySelector('.js-usuario-img').src = post.url_thumb
      $clone.querySelector('.js-post-username').innerText = post.nome
      $clone.querySelector('.js-post-nickname').innerText = post.nick
      $clone.querySelector('.js-post-img').src = post.url_img         
      $clone.querySelector('.js-post-tempo time').innerText = post.tempo

      // statisticas do post
      const statClasses = [
        '.js-post-stat-coments',
        '.js-post-stat-retweets',
        '.js-post-stat-likes',
        '.js-post-stat-views'
      ]
      
      statClasses.map(classe => {
        $clone.querySelector(classe).innerText = Math.floor(Math.random() * 1000)        
      })
      
      main.appendChild($clone)  
    })
  }
}

function modalCriarConta() {
  const $criarContaBtn = document.querySelector('.js-criar-conta-btn')
  const $rodapeInscrcaoBtn = document.querySelector('.js-rodape-inscricao-btn')
  const $modalBtnFechar = document.querySelector('.js-modal-btn-fechar')
  
  $criarContaBtn?.addEventListener('click', modalAbrir)
  $rodapeInscrcaoBtn?.addEventListener('click', modalAbrir)
  $modalBtnFechar?.addEventListener('click', modalFechar)
  
  function modalAbrir() {
    document.body.style.overflow = 'hidden'
    const $modal = document.querySelector('.modal-cadastro')
    
    $modal.showModal()
  }
  
  function modalFechar() {
    document.body.style.overflow = 'auto'
    const $modal = document.querySelector('.modal-cadastro')
    
    $modal.close()
  } 
}