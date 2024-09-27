let counter = 0;
let counter2 = 0;
document.getElementById('clickMe').addEventListener('click', function() {
    counter += 2;
    document.getElementById('message').textContent = `Button clicked ${counter} times!`;
});
document.getElementById('clickMe2').addEventListener('click', function() {
    counter2++;
    document.getElementById('message2').textContent = `Button clicked ${counter2} times`;
});