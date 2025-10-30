const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const Boy = document.getElementById("Boy");
    const Girl = document.getElementById("Girl");

    const l1 = Boy.value.length;
    const l2 = Girl.value.length;
    const result = Math.pow(l1 + l2, 15) % 101;
    document.querySelector('h2').textContent = `❤️ Love Percentage: ${result}% ❤️` ;
    form.reset()
});
