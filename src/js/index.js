import dados from '../dados-postagem.json' assert { type: 'json'}

addEventListener('DOMContentLoaded', postGerador)

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
      
      // renderiza somente um item
      if (indice < 1) {
        main.appendChild($clone)
      }      
    })
  }
}