const icons = document.querySelectorAll('.icon');








icons.forEach((icon) => {
  icon.addEventListener('mouseover', () => {
    //console.log(icon.children[0].classList);
    icon.children[0].classList.add('active');
    icon.children[1].style.display = 'block';
  })
})

icons.forEach((icon) => {
  icon.addEventListener('mouseleave', () => {
    //console.log(icon.children[0].classList);
    icon.children[0].classList.remove('active');
    icon.children[1].style.display = 'none';
  })
})


const albumsArray = [
  {
      name: "The Journey Within",
      description: "An exploration of inner landscapes through melodic compositions."
  },
  {
      name: "Echoes of Solitude",
      description: "A hauntingly beautiful collection of ambient tracks for introspection."
  },
  {
      name: "Serenade of the Stars",
      description: "Celestial melodies that whisk you away to distant galaxies."
  },
  {
      name: "Whispers in the Wind",
      description: "Gentle acoustic tunes that resonate with the soul."
  },
  {
      name: "Ethereal Dreams",
      description: "Dreamy compositions that evoke a sense of wonder and tranquility."
  },
  {
      name: "Lost in Translation",
      description: "Music that speaks the unspoken emotions of the heart."
  },
  {
      name: "Mystic Voyage",
      description: "Embark on a mystical journey with enchanting rhythms and melodies."
  },
  {
      name: "Echoes of Eternity",
      description: "Timeless sounds that echo through the corridors of existence."
  },
  {
      name: "Aurora Symphony",
      description: "A symphonic ode to the beauty of the northern lights."
  },
  {
      name: "Rhythms of Renewal",
      description: "Uplifting beats and melodies to rejuvenate the spirit."
  },
  {
      name: "Sunset Serenade",
      description: "Melancholic melodies that capture the fleeting beauty of dusk."
  },
  {
      name: "Harmony in Chaos",
      description: "Finding beauty and order amidst the chaos of life."
  },
  {
      name: "Midnight Reflections",
      description: "Reflective tunes for the quiet moments under the stars."
  },
  {
      name: "Whispers of the Past",
      description: "A nostalgic journey through melodies of bygone eras."
  },
  {
      name: "Sonic Odyssey",
      description: "An epic adventure through soundscapes and melodies."
  }
];

//console.log(albumsArray);

const albums = document.getElementById('albums');

albumsArray.forEach((album) => {
  //console.log(album.name);
  const albumDiv = document.createElement("div");
  albumDiv.classList.add("album");

  // Create the paragraph element for the description
  const descriptionPara = document.createElement("p");
  descriptionPara.textContent = album.description;

  // Create the paragraph element for the album name
  const namePara = document.createElement("p");
  namePara.textContent = album.name;
  namePara.id = "aname";

  // Append the paragraph elements to the outer div
  albumDiv.appendChild(descriptionPara);
  albumDiv.appendChild(namePara);

  // Append the outer div to the parent element
  albums.appendChild(albumDiv);
});


var likedSongs = [];


function createSong(song, singer) {
  // Create song element
  var songDiv = document.createElement("div");
  songDiv.classList.add("song");

  // Create cover image element
  var coverImgDiv = document.createElement("div");
  coverImgDiv.classList.add("coverImg");
  songDiv.appendChild(coverImgDiv);

  // Create song details element
  var songDtlsDiv = document.createElement("div");
  songDtlsDiv.classList.add("songDtls");
  songDiv.appendChild(songDtlsDiv);

  // Create song name paragraph
  var songNameP = document.createElement("p");
  songNameP.classList.add("songName");
  songNameP.textContent = song;
  songDtlsDiv.appendChild(songNameP);

  // Create song description paragraph
  var songDescP = document.createElement("p");
  songDescP.classList.add("songDesc");
  songDescP.textContent = singer;
  songDtlsDiv.appendChild(songDescP);

  // Create controls element
  var controlsDiv = document.createElement("div");
  controlsDiv.classList.add("controls");
  songDiv.appendChild(controlsDiv);

  // Create play button
  var playDiv = document.createElement("div");
  playDiv.classList.add("play");
  controlsDiv.appendChild(playDiv);

  var playIcon = document.createElement("i");
  playIcon.classList.add("fa-solid", "fa-circle-play");
  playDiv.appendChild(playIcon);

  // Create options button
  var optionsDiv = document.createElement("div");
  optionsDiv.classList.add("options");
  controlsDiv.appendChild(optionsDiv);

  var optionsIcon = document.createElement("i");
  optionsIcon.classList.add("fa-solid", "fa-ellipsis");
  optionsDiv.appendChild(optionsIcon);

  // Create options box
  var optionsBoxDiv = document.createElement("div");
  optionsBoxDiv.classList.add("optionsBox");
  var like = document.createElement("p");
  var queue = document.createElement("p");
  var playlist = document.createElement("p");
  like.textContent = 'like';
  queue.textContent = 'Add to queue';
  playlist.textContent = 'Add to playlist';
  optionsBoxDiv.appendChild(like);
  optionsBoxDiv.appendChild(queue);
  optionsBoxDiv.appendChild(playlist);
  songDiv.appendChild(optionsBoxDiv);
  like.addEventListener("click",()=>{
    if (!likedSongs.includes(song)) {
      likedSongs.push(song);
      console.log("Value added:", song,likedSongs);
    } else {
      console.log("Value already exists:", song);
    }
  })

  // Set onclick handler for optionsIcon
  optionsIcon.onclick = function() {
    if (optionsBoxDiv.style.display === "none" || optionsBoxDiv.style.display === "") {
      optionsBoxDiv.style.display = "block";
    } else {
      optionsBoxDiv.style.display = "none";
    }
  };

  // Append the song to the container
  var container = document.getElementById("songs");
  container.appendChild(songDiv);
}

// Call the function to create the song

var songsData = [
  { songName: "Perfect", singer: "Ed Sheeran" },
  { songName: "Shape of You", singer: "Ed Sheeran" },
  { songName: "Someone Like You", singer: "Adele" },
  { songName: "Hello", singer: "Adele" },
  { songName: "Believer", singer: "Imagine Dragons" },
  { songName: "Radioactive", singer: "Imagine Dragons" },
  { songName: "Bohemian Rhapsody", singer: "Queen" },
  { songName: "Stairway to Heaven", singer: "Led Zeppelin" },
  { songName: "Billie Jean", singer: "Michael Jackson" },
  { songName: "Hotel California", singer: "Eagles" },
  { songName: "Smells Like Teen Spirit", singer: "Nirvana" },
  { songName: "Hurt", singer: "Johnny Cash" }
];

songsData.forEach((song) => {
  let songg = song.songName;
  let singer = song.singer;
  //console.log(songg, singer)
  createSong(songg, singer);
});


const currentSongg = document.getElementById('currentMusic');
const cross = document.getElementById('cross');


currentSongg.addEventListener("click",()=>{
  console.log('hello')
  const popSong =   document.getElementById('playingSong');
  popSong.classList.remove('slideOut');

  popSong.style.display = 'flex';
  popSong.classList.add('slide');
});

cross.addEventListener("click",()=>{
  console.log('hello')
  const popSong =   document.getElementById('playingSong');
//popSong.style.display = 'block
  popSong.classList.remove('slide');
  popSong.classList.add('slideOut');
   
})





