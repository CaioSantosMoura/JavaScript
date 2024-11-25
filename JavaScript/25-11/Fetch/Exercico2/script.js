const postId = 1;

fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
  .then(response => response.json())
  .then(comments => {
    const filteredComments = comments.filter(comment => 
      comment.body.includes('dolor')
    );
    console.log('Comentários filtrados:', filteredComments);
  })
  .catch(error => console.error('Erro ao buscar os comentários:', error));
