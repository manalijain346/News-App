var el=document.getElementById("news-container");

const xhr= new XMLHttpRequest();

xhr.open('GET','https://newsapi.org/v2/everything?q=bitcoin&apiKey=b3b458aef33944a993200b385116c4a6',true)

xhr.onload=function(){
    if(this.status===200){
        let json=JSON.parse(this.responseText)
        let articles=json.articles;
        console.log(articles);
        let newsHtml="";
        articles.forEach(function(element){
            let news= 
            `<div id="news-block">
                <div id="image-container">
                    <img class="news-image" src=${element["urlToImage"]}>
                </div>
                <div id="news">
                    <li>
                        <a class="news-title" href=${element["url"]}>${element["title"]}</a>
                    </li>
                    <li class="news-description">
                        ${element["content"]}
                    </li>
                    <li>
                        <span class="published-label">Published:</span>
                        <span class="published-value"> ${formatDate(element["publishedAt"])}</span></li>
                </div>
            </div>`
            newsHtml+=news;
        });
        el.innerHTML=newsHtml;
    }
    else{
        console.log("some error occurred")
    }
}
xhr.send()

function formatDate(date) {
    return new Date(date).toDateString();
} 