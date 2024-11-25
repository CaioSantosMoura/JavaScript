fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  .then(posts => {
    posts.forEach(post => console.log(post.title));
  })
  .catch(error => console.error('Erro ao buscar os posts:', error));
