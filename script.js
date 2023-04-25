function anime_quote() {
    fetch('https://animechan.vercel.app/api/random')
        .then(response => response.json())
        .then(data => {
            const quote = data.quote;
            const character = data.character;
            anime = data.anime;
            document.getElementById('quoteID').textContent = '"' + quote + '"';
            document.getElementById('characterID').textContent = "- " + character;
            document.getElementById('animeID').textContent = anime;
        })
        .catch(error => console.error('Error fetching data:', error));
}

document.getElementById('quoteID').addEventListener('click', anime_quote);

document.getElementById('animechanID').addEventListener('click', function () {
    window.open('https://animechan.vercel.app/')
});

window.onload = function() {
    anime_quote();
};