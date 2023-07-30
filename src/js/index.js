import dados from './dados.js'

addEventListener('DOMContentLoaded', () => {
  postGerador()
  modalCriarConta()
  configMenuManipular()
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
    
    $modal?.showModal()
  }
  
  function modalFechar() {
    document.body.style.overflow = 'auto'
    const $modal = document.querySelector('.modal-cadastro')
    
    $modal?.close()
  } 
}

function configMenuManipular() {
  const $configBtn = document.querySelector('.js-config-btn')

  $configBtn?.addEventListener('click', () => {
    setTimeout(() => {
      location.hash == '#settings' && configMenuAbrir()      
    }, 10)
  })
}

function configMenuAbrir() {
  const $configMenu = document.querySelector('.js-config-menu')
  const $configMenuLista = document.querySelector('.js-config-menu-lista')  

  $configMenu && ($configMenu.style.display = 'block')
  
  $configMenuLista?.addEventListener('click', evento => {
    const $clicado = evento.target

    configSubMenuAbrir($clicado)
  })   
  
  postsRemover()
}

function configSubMenuAbrir($clicado) {
  const classeAlvo = $clicado.dataset.alvo || ''
  const $subMenu = document.querySelector(classeAlvo)
  
  $subMenu && ($subMenu.style.display = 'block')

  nivelVoltar($subMenu)
}

function nivelVoltar($alvo) {
  const $btnVoltar = document.querySelector('.js-sub-menu-voltar-btn')

  $btnVoltar?.addEventListener('click', () => {  
    $alvo && ($alvo.style.display = 'none')    
  })
}

function postsRemover() {
  const $posts = document.querySelectorAll('.js-post-limite')

  $posts.forEach($post => $post.remove())  
}