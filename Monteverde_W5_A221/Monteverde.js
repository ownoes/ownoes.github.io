let count = 0;
document.getElementById('countButton').addEventListener('click', () => {
    document.getElementById('count').textContent = ++count;
});
