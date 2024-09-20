let counter = 0;
document.getElementById('clickMe').addEventListener('click', function() {
    counter++;
    document.getElementById('message').textContent = `Button clicked ${counter} times!`;
});