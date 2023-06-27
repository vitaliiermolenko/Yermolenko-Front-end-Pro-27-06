function fetchPostById(postId) {
  return new Promise((resolve, reject) => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
      .then(response => {
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        return response.json();
      })
      .then(post => {
        resolve(post);
      })
      .catch(error => {
        reject(error);
      });
  });
}

function fetchCommentsByPostId(postId) {
  return new Promise((resolve, reject) => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
      .then(response => {
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        return response.json();
      })
      .then(comments => {
        resolve(comments);
      })
      .catch(error => {
        reject(error);
      });
  });
}

function displayComments(comments) {
  const commentsContainer = document.getElementById("commentsContainer");
  commentsContainer.innerHTML = "<h3>Коментарі:</h3>";

  comments.forEach(comment => {
    const commentElement = document.createElement("div");
    commentElement.innerHTML = `
      <strong>${comment.name}</strong>
      <p>${comment.body}</p>
    `;
    commentsContainer.appendChild(commentElement);
  });
}

document.getElementById("searchBtn").addEventListener("click", () => {
  const postId = document.getElementById("postId").value;

  fetchPostById(postId)
    .then(post => {
      const postContainer = document.getElementById("postContainer");
      postContainer.innerHTML = `
        <h2>Пост #${post.id}</h2>
        <h3>${post.title}</h3>
        <p>${post.body}</p>
      `;

      const commentsBtn = document.createElement("button");
      commentsBtn.innerText = "Отримати коментарі";
      commentsBtn.addEventListener("click", () => {
        fetchCommentsByPostId(post.id)
          .then(comments => {
            displayComments(comments);
          })
          .catch(error => {
            console.error(error);
          });
      });

      postContainer.appendChild(commentsBtn);

      const commentsContainer = document.createElement("div");
      commentsContainer.id = "commentsContainer";
      postContainer.appendChild(commentsContainer);
    })
    .catch(error => {
      console.error(error);
      const postContainer = document.getElementById("postContainer");
      postContainer.innerHTML = "<p>Пост не знайдено.</p>";
    });
});