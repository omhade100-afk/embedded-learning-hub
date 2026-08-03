console.log("System Initialized");
const btn = document.getElementById('themeToggle');
if(btn) {
    btn.addEventListener('click', () => {
        const theme = document.body.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
        document.body.setAttribute('data-theme', theme);
    });
}
