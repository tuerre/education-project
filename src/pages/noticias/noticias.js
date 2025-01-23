document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('buscador__nav');
    const clearSearchButton = document.getElementById('clearSearch');
    const allPosts = document.getElementById('allPosts');
    const posts = Array.from(allPosts.getElementsByClassName('cardPost'));

    searchInput.addEventListener('input', () => {
        const query = searchInput.value.toLowerCase();
        posts.forEach(post => {
            const title = post.querySelector('h3').textContent.toLowerCase();
            if (title.includes(query)) {
                post.style.display = 'block';
            } else {
                post.style.display = 'none';
            }
        });
    });

    clearSearchButton.addEventListener('click', () => {
        searchInput.value = '';
        posts.forEach(post => {
            post.style.display = 'block';
        });
    });
});
