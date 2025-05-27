// This file contains JavaScript code for interactivity and functionality across the website, such as form validation, API calls, and dynamic content updates.

document.addEventListener('DOMContentLoaded', function() {
    // Example of a simple form validation
    const form = document.querySelector('form');
    if (form) {
        form.addEventListener('submit', function(event) {
            const inputFields = form.querySelectorAll('input, textarea');
            let valid = true;

            inputFields.forEach(input => {
                if (!input.value) {
                    valid = false;
                    input.classList.add('error');
                } else {
                    input.classList.remove('error');
                }
            });

            if (!valid) {
                event.preventDefault();
                alert('Please fill in all fields.');
            }
        });
    }

    // Example of fetching latest technologies for the blog
    const blogSection = document.getElementById('blog-posts');
    if (blogSection) {
        fetch('/api/latest-technologies.js')
            .then(response => response.json())
            .then(data => {
                data.articles.forEach(article => {
                    const articleElement = document.createElement('div');
                    articleElement.classList.add('article');
                    articleElement.innerHTML = `
                        <h2>${article.title}</h2>
                        <p>${article.summary}</p>
                        <a href="${article.url}" target="_blank">Read more</a>
                    `;
                    blogSection.appendChild(articleElement);
                });
            })
            .catch(error => console.error('Error fetching latest technologies:', error));
    }

    // Add a simple interactive feature: Scroll to top button
    const scrollToTopBtn = document.createElement("button");
    scrollToTopBtn.textContent = "↑ Top";
    scrollToTopBtn.style.position = "fixed";
    scrollToTopBtn.style.bottom = "20px";
    scrollToTopBtn.style.right = "20px";
    scrollToTopBtn.style.padding = "10px 15px";
    scrollToTopBtn.style.backgroundColor = "#0078d7";
    scrollToTopBtn.style.color = "#fff";
    scrollToTopBtn.style.border = "none";
    scrollToTopBtn.style.borderRadius = "5px";
    scrollToTopBtn.style.cursor = "pointer";
    scrollToTopBtn.style.display = "none";
    scrollToTopBtn.style.zIndex = "1000";

    document.body.appendChild(scrollToTopBtn);

    window.addEventListener("scroll", () => {
        if (window.scrollY > 200) {
            scrollToTopBtn.style.display = "block";
        } else {
            scrollToTopBtn.style.display = "none";
        }
    });

    scrollToTopBtn.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
});

// Show "Back to Home" button when scrolling down
document.addEventListener("DOMContentLoaded", () => {
    const backToHomeBtn = document.getElementById("backToHome");

    // Show the button when the user scrolls down 100px
    window.addEventListener("scroll", () => {
        if (window.scrollY > 100) {
            backToHomeBtn.style.display = "block";
        } else {
            backToHomeBtn.style.display = "none";
        }
    });

    // Scroll to the top of the page when the button is clicked
    backToHomeBtn.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const topButton = document.getElementById("topButton");
    const backToHomeButton = document.getElementById("backToHome");

    // Show "Top" button on scroll (Home Page)
    if (topButton) {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                topButton.style.display = "block";
            } else {
                topButton.style.display = "none";
            }
        });

        topButton.addEventListener("click", () => {
            window.scrollTo({ top: 0, behavior: "smooth" });
        });
    }

    // "Back to Home" button functionality (Other Pages)
    if (backToHomeButton) {
        backToHomeButton.addEventListener("click", () => {
            window.location.href = "../index.html";
        });
    }
});

document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelectorAll(".nav-link");

    // Highlight the active section in the navbar
    window.addEventListener("scroll", () => {
        let currentSection = "";
        document.querySelectorAll("section").forEach((section) => {
            const sectionTop = section.offsetTop;
            if (window.scrollY >= sectionTop - 50) {
                currentSection = section.getAttribute("id");
            }
        });

        navLinks.forEach((link) => {
            link.classList.remove("active");
            if (link.getAttribute("href").includes(currentSection)) {
                link.classList.add("active");
            }
        });
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const menuIcon = document.getElementById("menuIcon");
    const drawerMenu = document.getElementById("drawerMenu");

    // Toggle the drawer menu
    menuIcon.addEventListener("click", () => {
        drawerMenu.classList.toggle("open");
    });
});