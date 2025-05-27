const apiKey = 'YOUR_API_KEY'; // Replace with your actual API key
const apiUrl = 'https://api.example.com/latest-technologies'; // Replace with the actual API endpoint

async function fetchLatestTechnologies() {
    try {
        const response = await fetch(apiUrl, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${apiKey}`,
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();
        return data.articles; // Adjust based on the actual API response structure
    } catch (error) {
        console.error('Error fetching latest technologies:', error);
    }
}

function displayTechnologies(technologies) {
    const blogContainer = document.getElementById('blog-container'); // Ensure this ID exists in your blog.html
    technologies.forEach(tech => {
        const article = document.createElement('article');
        article.innerHTML = `
            <h2>${tech.title}</h2>
            <p>${tech.description}</p>
            <a href="${tech.url}" target="_blank">Read more</a>
        `;
        blogContainer.appendChild(article);
    });
}

// Call the fetch function and display the technologies when the page loads
document.addEventListener('DOMContentLoaded', async () => {
    const technologies = await fetchLatestTechnologies();
    if (technologies) {
        displayTechnologies(technologies);
    }
});