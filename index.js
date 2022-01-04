var el = document.getElementById("news-container");

function getNews() {
    fetch('https://gnews.io/api/v4/top-headlines?&token=ea89d7bb706e9905ec5f5f3808ec4c50&lang=en')
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
            var content = "";
            var newsList = data.articles;
            for (let index = 0; index < newsList.length; index++) {
                const element = newsList[index];
                content = content + `<div class="news-block" id="news-block">
            <div class="image-container" id="image">
                <img src=${element.image} class="image" height="100px" width="100px" alt="news">
            </div>
            <div class="news-description" id="news-description">
            <a class="news-title" href="${element.url}"> ${element.title}</a>
                <p class="full-news">${element.description}</p>
                <span class="published">Published: </span>
                <span class="published-on">${formatDate(element.publishedAt)}</span>
            </div>
        </div>`
            }
            el.innerHTML = content;
        });
}

getNews();

function formatDate(value) {
    var date = new Date(value);
    var n = date.toDateString();
    return n;
};