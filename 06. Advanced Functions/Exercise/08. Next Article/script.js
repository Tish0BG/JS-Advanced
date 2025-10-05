function getArticleGenerator(articles) {
    const container = $('#content');

    return function showNext() {
        if (articles.length === 0) {
            return;
        }

        const currentArticleText = articles.shift();
        const articleElement = $('<article>'); 
        articleElement.text(currentArticleText);
        container.append(articleElement);
    };
}
