import dados from '../dados-postagem.json' assert { type: 'json'}

addEventListener('DOMContentLoaded', postGerador)

function postGerador() {
  const postagens = dados.posts 
  const $postLimite = document.querySelector('.js-post-limite')
  const main = document.querySelector('main')

  if ($postLimite) clonar($postLimite)

  function clonar($alvo) { 
    postagens.forEach(post => {
      const $clone = $alvo.cloneNode(true)
      $clone.id = post.id

      $clone.querySelector('.js-usuario-img').src = post.url_thumb
      $clone.querySelector('.js-post-username').innerText = post.nome
      $clone.querySelector('.js-post-nickname').innerText = post.nick
      $clone.querySelector('.js-post-img').src = post.url_img         
      $clone.querySelector('.js-post-tempo time').innerText = post.tempo
      
      main.appendChild($clone)
    })
  }
}