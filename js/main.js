/* ================== CHANGE BACKGROUND HEADER ================== */
function scrollHeader() {
    const header = document.getElementById('header');
    if (this.scrollY >= 50) header.classList.add('srcoll-header'); else header.classList.remove('srcoll-header');
}
window.addEventListener('scroll', scrollHeader);