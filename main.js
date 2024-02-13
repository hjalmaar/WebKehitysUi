const jokeButton = document.querySelector('.chuck');
const jokeDiv = document.querySelector('.show_joke');

jokeButton.addEventListener('click', async () => {
    try {
        const response = await fetch('https://api.chucknorris.io/jokes/random');
        const data = await response.json();
        jokeDiv.textContent = data.value;
    } catch (error) {
        console.error('Error fetching Chuck Norris joke:', error);
        jokeDiv.textContent = 'Failed to fetch joke. Please try again.';
    }
});
