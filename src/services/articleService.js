const STORAGE_KEY = 'blog_articles';

export const articleService = {
    getAll: () => {
        const articles = localStorage.getItem(STORAGE_KEY);
        return articles ? JSON.parse(articles) : [];
    },

    getById: (id) => {
        const articles = articleService.getAll();
        return articles.find(a => a.id === id);
    },

    save: (article) => {
        const articles = articleService.getAll();
        if (article.id) {
            // Update
            const index = articles.findIndex(a => a.id === article.id);
            if (index !== -1) {
                articles[index] = { ...articles[index], ...article, updatedAt: new Date().toISOString() };
            }
        } else {
            // Create
            const newArticle = {
                ...article,
                id: Date.now().toString(), // Simple ID generation
                createdAt: new Date().toISOString(),
                updatedAt: new Date().toISOString()
            };
            articles.push(newArticle);
        }
        localStorage.setItem(STORAGE_KEY, JSON.stringify(articles));
    },

    delete: (id) => {
        const articles = articleService.getAll();
        const filtered = articles.filter(a => a.id !== id);
        localStorage.setItem(STORAGE_KEY, JSON.stringify(filtered));
    },

    // Get unique tags from all articles
    getTags: () => {
        const articles = articleService.getAll();
        const tags = new Set();
        articles.forEach(article => {
            if (article.tags && Array.isArray(article.tags)) {
                article.tags.forEach(tag => tags.add(tag));
            }
        });
        return Array.from(tags).sort();
    }
};
