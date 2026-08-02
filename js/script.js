document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('themeToggle');
    btn.addEventListener('click', () => {
        const theme = document.body.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
        document.body.setAttribute('data-theme', theme);
        btn.innerText = theme === 'light' ? '🌙' : '☀️';
    });
});
