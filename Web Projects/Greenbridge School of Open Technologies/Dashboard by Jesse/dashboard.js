// Ensure elements exist before adding event listeners
document.addEventListener("DOMContentLoaded", () => {
    const menuBtn = document.getElementById("menuBtn");
    const sidebar = document.getElementById("sidebar");
    const mainContent = document.querySelector(".main");

    const settingsPage = document.getElementById("settingsPage");
    const settingsBtn = document.querySelector(".sidebar ul li:nth-child(2)");
    const closeSettingsBtn = document.getElementById("closeSettings");

    const articles = document.querySelectorAll(".article");
    const articleModal = document.getElementById("articleModal");
    const articleTitle = document.getElementById("articleTitle");
    const articleContent = document.getElementById("articleContent");
    const closeArticleModal = document.getElementById("closeArticleModal");

    const commentsCard = document.getElementById("commentsCard");
    const commentsModal = document.getElementById("commentsModal");
    const closeCommentsModal = commentsModal?.querySelector(".close-btn");

    // 🟢 Sidebar Toggle
    if (menuBtn && sidebar) {
        menuBtn.addEventListener("click", () => {
            sidebar.classList.toggle("open");
        });
    }

    // 🟢 Article Modal
    if (articleModal) {
        articles.forEach(article => {
            article.addEventListener("click", () => {
                articleTitle.textContent = article.dataset.title || "No Title";
                articleContent.textContent = article.dataset.content || "No Content";
                articleModal.style.display = "flex";
            });
        });

        closeArticleModal.addEventListener("click", () => {
            articleModal.style.display = "none";
        });

        window.addEventListener("click", (event) => {
            if (event.target === articleModal) {
                articleModal.style.display = "none";
            }
        });
    }

    // 🟢 Comments Modal
    if (commentsCard && commentsModal) {
        commentsCard.addEventListener("click", () => {
            commentsModal.style.display = "flex";
        });

        closeCommentsModal?.addEventListener("click", () => {
            commentsModal.style.display = "none";
        });

        window.addEventListener("click", (event) => {
            if (event.target === commentsModal) {
                commentsModal.style.display = "none";
            }
        });
    }

    // 🟢 Settings Page
    if (settingsBtn && settingsPage) {
        settingsBtn.addEventListener("click", () => {
            settingsPage.style.display = "block";
        });
    }

    if (closeSettingsBtn) {
        closeSettingsBtn.addEventListener("click", () => {
            settingsPage.style.display = "none";
        });
    }
});