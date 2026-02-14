const playlists = [
  {
    title: 'Chill Vibes',
    image: './img/playlist-chill.jpg',
    description: 'A playlist for chill vibes',
  },
  {
    title: 'Focus',
    image: './img/playlist-focus.jpg',
    description: 'A playlist for focus',
  },
  {
    title: 'Late Night',
    image: './img/playlist-late-night.jpg',
    description: 'A playlist for late night',
  },
  {
    title: 'Love Songs',
    image: './img/playlist-love.jpg',
    description: 'A playlist for love songs',
  },
  {
    title: 'Oldies',
    image: './img/playlist-oldies.jpg',
    description: 'A playlist for oldies',
  },
  {
    title: 'Sad',
    image: './img/playlist-sad.jpg',
    description: 'A playlist for sad songs',
  },
];

// Add your code here...
const playlistsGrid = document.querySelector('#playlists-grid');

playlists.forEach((playlist) => {
  const playlistCard = document.createElement('li');
  const img = document.createElement('img');
  const title = document.createElement('p');

  playlistCard.className = ('playlist-card');
  playlistCard.dataset.title = playlist.title;
  img.src = playlist.image;
  img.alt = `${playlist.title} playlist cover`;
  title.textContent = playlist.title;

  playlistCard.append(img, title);
  playlistsGrid.append(playlistCard);
});

playlistsGrid.addEventListener('click', (event) => {
  const span = document.querySelector('#now-playing-title');
  const closeLi = event.target.closest('li');
  const currentlySelected = document.querySelector('li.selected');

  if (currentlySelected) {
    currentlySelected.classList.remove('selected');
  }

  closeLi.classList.toggle('selected');


  span.textContent = closeLi.dataset.title;
});