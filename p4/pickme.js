const extraNews = [
    {
        title: 'Why do we use it?',
        text: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'
    },
    {
        title: 'Where does it come from?',
        text: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC.'
    },
    {
        title: 'Where can I get some?',
        text: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.'
    }
];

const newsList = document.getElementById('news-list');
const loadMoreBtn = document.getElementById('load-more');

loadMoreBtn.addEventListener('click', function() {
    if (extraNews.length > 0) {
        const newsData = extraNews.shift();

        const newsItem = document.createElement('div');
        newsItem.className = 'news-item';

        const titleDiv = document.createElement('div');
        titleDiv.className = 'news-title';
        titleDiv.textContent = newsData.title;

        const textDiv = document.createElement('div');
        textDiv.className = 'news-text';
        textDiv.textContent = newsData.text;

        newsItem.append(titleDiv, textDiv);
        newsList.append(newsItem);
    }

    if (extraNews.length === 0) {
        loadMoreBtn.disabled = true;
        loadMoreBtn.textContent = 'Новин більше немає';
    }
});