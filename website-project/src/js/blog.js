const BASE_URL = "https://saurav.tech/NewsAPI";
const TOP_HEADLINES_API = `${BASE_URL}/top-headlines/category/technology/in.json`; // Fetch technology news for India

// Fetch and display the latest news
async function fetchLatestNews() {
    try {
        const response = await fetch(TOP_HEADLINES_API);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        displayNews(data.articles);
    } catch (error) {
        console.error("Error fetching news:", error);
        document.getElementById("posts-container").innerHTML = `<p>Failed to load news. Please try again later.</p>`;
    }
}

// Display news articles in the blog section
function displayNews(articles) {
    const postsContainer = document.getElementById("posts-container");
    postsContainer.innerHTML = ""; // Clear any existing content

    articles.forEach((article) => {
        const post = document.createElement("div");
        post.classList.add("blog-post");

        post.innerHTML = `
            <h3>${article.title}</h3>
            <p><strong>Source:</strong> ${article.source.name}</p>
            <p>${article.description || "No description available."}</p>
            <a href="${article.url}" target="_blank" class="read-more">Read More</a>
        `;

        postsContainer.appendChild(post);
    });
}

// Fetch news on page load
fetchLatestNews();