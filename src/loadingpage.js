function showLoading() {
    const loadingElement = document.getElementById('loading');
    loadingElement.style.display = 'block';
}
function hideLoading() {
    const loadingElement = document.getElementById('loading');
    loadingElement.style.display = 'none';
}
setTimeout(hideLoading, 2000);
window.addEventListener('load', showLoading);
window.addEventListener('DOMContentLoaded', hideLoading);
