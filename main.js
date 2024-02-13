const jokeBtn = document.getElementById('jokeBtn');
const jokeText = document.getElementById('jokeText');

jokeBtn.addEventListener('click', async () => {
    try {
        const response = await fetch('https://api.chucknorris.io/jokes/random');
        const data = await response.json();
        jokeText.innerText = data.value;
    } catch (error) {
        console.error('Error fetching Chuck Norris joke:', error);
        jokeText.innerText = 'Failed to fetch joke. Please try again.';
    }
});
