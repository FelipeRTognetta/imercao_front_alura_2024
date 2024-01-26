const resultsArtist = document.getElementById('result-artist');
const resultPlaylist = document.getElementById('result-playlists');
const searchInput = document.getElementById('search-input');

function requestApi(searchTerm) {
    const url = `http://localhost:3000/artists?name_like=${searchTerm}`
    fetch(url)
        .then((response) => response.json())
        .then((result) => displayResults(result))
}

function displayResults(result) {
    resultPlaylist.classList.add('hidden');
    const artistImage = document.getElementById('artist-img');
    const artistName = document.getElementById('artist-name');

    result.forEach((element) => {
        artistImage.src = element.urlImg;
        artistName.innerText = element.name;
    });

    resultsArtist.classList.remove('hidden');
}

function hidePlaylists() {
    playlistContainer.classList.add("hidden");
}

searchInput.addEventListener('input', () => {
    const searchTerm = searchInput.value.toLowerCase();
    if (searchTerm === '') {
        resultsArtist.classList.add('hidden');
        resultPlaylist.classList.remove('hidden');
        return;
    }

    requestApi(searchTerm);
})