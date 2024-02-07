const change = document.getElementById('changeID');

function anime_quote() {
    document.getElementById('quoteID').textContent = " ";
    document.getElementById('characterID').textContent = " ";
    document.getElementById('animeID').textContent = " ";
    document.getElementById('loadingID').textContent = 'Loading...';

    fetch('https://animechan.xyz/api/random')
        .then(response => response.json())
        .then(data => {
            const quote = data.quote;
            const character = data.character;
            anime = data.anime;
            document.getElementById('quoteID').textContent = '"' + quote + '"';
            document.getElementById('characterID').textContent = "- " + character;
            document.getElementById('animeID').textContent = anime;
            document.getElementById('loadingID').textContent = '';
        })
        .catch(error => console.error('Error fetching data:', error));
}

document.getElementById('quoteID').addEventListener('click',function () {
    change.classList.toggle('shrink')

    setTimeout(function () {
        change.classList.remove('shrink');
        anime_quote();
    }, 150);
});

document.getElementById('animechanID').addEventListener('click', function () {
    window.open('https://animechan.xyz/')
});

window.onload = function() {
    anime_quote();
};
