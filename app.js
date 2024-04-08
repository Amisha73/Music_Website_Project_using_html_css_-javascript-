const music = new Audio("assests/audio/1.mp3");
// music.play();
const songs = [
  {
    id: 1,
    songName: `On My Way <br><div class="subtitle">Alan Walker</div>`,
    poster: "assests/img/1.jpg",
  },
  {
    id: 2,
    songName: `Fade <br><div class="subtitle">Alan Walker</div>`,
    poster: "assests/img/2.jpg",
  },
  {
    id: 3,
    songName: `Cartoon - On & On <br><div class="subtitle">Daniel Levi</div>`,
    poster: "assests/img/3.jpg",
  },
  {
    id: 4,
    songName: `Warriyo - Mortals <br><div class="subtitle">Mortals</div>`,
    poster: "assests/img/4.jpg",
  },
  {
    id: 5,
    songName: `Ertugrul Gazi <br><div class="subtitle">Ertugurul</div>`,
    poster: "assests/img/5.jpg",
  },
  {
    id: 6,
    songName: `Electronic Music <br><div class="subtitle">Electro</div>`,
    poster: "assests/img/6.jpg",
  },
  {
    id: 7,
    songName: `Agar Tum Sath Ho <br><div class="subtitle">Tamashaa</div>`,
    poster: "assests/img/7.jpg",
  },
  {
    id: 8,
    songName: `Suna Hai <br><div class="subtitle">Neha Kakker</div>`,
    poster: "assests/img/8.jpg",
  },
  {
    id: 9,
    songName: `Dilbar <br><div class="subtitle">Satyameva Jayate</div>`,
    poster: "assests/img/9.jpg",
  },
  {
    id: 10,
    songName: `Duniya <br><div class="subtitle">Luka Chuppi</div>`,
    poster: "assests/img/10.jpg",
  },
  {
    id: 11,
    songName: `Lagdi Lahore Di <br><div class="subtitle">Street Dancer 3D</div>`,
    poster: "assests/img/11.jpg",
  },
  {
    id: 12,
    songName: `Putt Jatt Da <br><div class="subtitle">Putt Jatt Da</div>`,
    poster: "assests/img/12.jpg",
  },
  {
    id: 13,
    songName: `Baarishein <br><div class="subtitle"></div>`,
    poster: "assests/img/13.jpg",
  },
  {
    id: 14,
    songName: `Vaaste <br><div class="subtitle">Dhavni Bhanushali</div>`,
    poster: "assests/img/14.jpg",
  },
  {
    id: 15,
    songName: `Lut Gaye <br><div class="subtitle">Jubin Nautiyal</div>`,
    poster: "assests/img/15.jpg",
  },
  {
    id: 16,
    songName: `Tu Meri Zindagi Hai <br><div class="subtitle">Jubin Nautiyal</div>`,
    poster: "assests/img/16.jpg",
  },
  {
    id: 17,
    songName: `Zaroori Tha <br><div class="subtitle">Rahat Fateh Ali Khan</div>`,
    poster: "assests/img/17.jpg",
  },
  {
    id: 18,
    songName: `Mere Dhol Judaiyan <br><div class="subtitle">Ali Sethi Seha Gill</div>`,
    poster: "assests/img/18.jpg",
  },
  {
    id: 19,
    songName: `Eh Munde Pagal Ne Saare <br><div class="subtitle">Ap Dhillon, Gurinder Gill, Shinda Kahlon</div>`,
    poster: "assests/img/19.jpg",
  },
  {
    id: 20,
    songName: `Dunny 82K <br><div class="subtitle">Ap Dhillon, Gurinder Gill, Shinda Kahlon</div>`,
    poster: "assests/img/20.jpg",
  },
];
Array.from(document.getElementsByClassName("songItem")).forEach((e, i) => {
  e.getElementsByTagName("img")[0].src = songs[i].poster;
  e.getElementsByTagName("h5")[0].innerHTML = songs[i].songName;
});

// search data start
let search_results = document.getElementsByClassName('search_results')[0];
songs.forEach(element => {
  const { id, songName, poster }= element;
  // console.log(id);
  let card = document.createElement('a');
  card.classList.add('card');
  card.href = '#' + id;
  card.innerHTML = ` 
      <img src="${poster}" alt="">
            <div class="content">
                ${songName}
            </div>
    `;
      search_results.appendChild(card);
});

let input = document.getElementsByTagName('input')[0];
input.addEventListener('keyup', () =>{
  let input_value = input.value.toUpperCase();
  let items = search_results.getElementsByTagName('a');

  for (let index = 0; index < items.length; index++) {
     let as = items[index].getElementsByClassName('content')[0];
     let text_value = as.textContent || as.innerHTML;

     if (text_value.toUpperCase().indexOf(input_value) > -1) {
      items[index].style.display = 'flex';
     } else {
      items[index].style.display = 'none';
     }
    
     if(input.value == 0){
      search_results.style.display = 'none';
     }
     else{
      search_results.style.display = '';
     }
  }
})
// search data end

let masterPlay = document.getElementById("masterPlay");
let wave = document.getElementById("wave");

masterPlay.addEventListener("click", () => {
  if (music.paused || music.currentTime <= 0) {
    music.play();
    wave.classList.add("active1");
    masterPlay.classList.remove("bi-play-fill");
    masterPlay.classList.add("bi-pause-fill");
  } else {
    music.pause();
    wave.classList.remove("active1");
    masterPlay.classList.add("bi-play-fill");
    masterPlay.classList.remove("bi-pause-fill");
  }
});

const makeAllplays = () => {
  Array.from(document.getElementsByClassName("playlistPlay")).forEach((el) => {
    el.classList.add("bi-play-fill");
    el.classList.remove("bi-pause-fill");
  });
};

const makeAllBackground = () => {
  Array.from(document.getElementsByClassName("songItem")).forEach((el) => {
    el.style.background = "rgb(105, 105, 105 , .0)";
  });
};

let index = 0;
let poster_master_play = document.getElementById("poster_master_play");
let download_music = document.getElementById("download_music");
let title = document.getElementById("title");
Array.from(document.getElementsByClassName("playlistPlay")).forEach((e) => {
  e.addEventListener("click", (el) => {
    index = el.target.id;
    music.src = `assests/audio/${index}.mp3`;
    // way to fix img in masterplay
    poster_master_play.src = `assests/img/${index}.jpg`;
    music.play();
    masterPlay.classList.remove("bi-play-fill");
    masterPlay.classList.add("bi-pause-fill");
    download_music.href = `assests/audio/${index}.mp3`;
    let songTitles = songs.filter((els) => {
      return els.id == index;
    });
    songTitles.forEach((elss) => {
      // let{songName, poster } = elss;
      let { songName } = elss;
      title.innerHTML = songName;
      download_music.setAttribute("download", songName);
      // another way to fix img in masterplay area
      // poster_master_play.innerHTML = poster;
    });

    makeAllBackground();
    Array.from(document.getElementsByClassName("songItem"))[
      index - 1
    ].style.background = "rgb(105, 105, 105 , 0.1)";
    makeAllplays();
    el.target.classList.remove("bi-play-circle-fill");
    el.target.classList.add("bi-pause-circle-fill");
    wave.classList.remove("active1");
  });
});

let currentStart = document.getElementById("currentStart");
let currentEnd = document.getElementById("currentEnd");
let seek = document.getElementById("seek");
let bar2 = document.getElementById("bar2");
let dot = document.getElementsByClassName("dot");
music.addEventListener("timeupdate", () => {
  let music_curr = music.currentTime;
  let music_dur = music.duration;
  let min1 = Math.floor(music_dur / 60);
  let sec1 = Math.floor(music_dur % 60);
  if (sec1 < 10) {
    sec1 = `0${sec1}`;
  }
  currentEnd.innerText = `${min1}:${sec1}`;
  let min2 = Math.floor(music_curr / 60);
  let sec2 = Math.floor(music_curr % 60);
  if (sec2 < 10) {
    sec2 = `0${sec2}`;
  }
  currentStart.innerText = `${min2}:${sec2}`;
  let progressBar = parseInt((music_curr / music_dur) * 100);
  seek.value = progressBar;
  let seekbar = seek.value;
  bar2.style.width = `${seekbar}%`;
  dot.style.left = `${seekbar}%`;
});
seek.addEventListener("change", () => {
  music.currentTime = (seek.value * music.duration) / 100;
});

let vol_icon = document.getElementById("vol_icon");
let vol = document.getElementById("vol");
let vol_bar = document.getElementsByClassName("vol_bar")[0];
let vol_dot = document.getElementById("vol_dot");

vol.addEventListener("change", () => {
  if (vol.value == 0) {
    vol_icon.classList.remove("bi-volume-up-fill");
    vol_icon.classList.remove("bi-volume-down-fill");
    vol_icon.classList.add("bi-volume-off-fill");
  }
  if (vol.value > 0) {
    vol_icon.classList.remove("bi-volume-up-fill");
    vol_icon.classList.add("bi-volume-down-fill");
    vol_icon.classList.remove("bi-volume-off-fill");
  }
  if (vol.value > 50) {
    vol_icon.classList.add("bi-volume-up-fill");
    vol_icon.classList.remove("bi-volume-down-fill");
    vol_icon.classList.remove("bi-volume-off-fill");
  }
  let vol_a = vol.value;
  vol_bar.style.width = `${vol_a}%`;
  vol_dot.style.left = `${vol_a}%`;
  music.volume = vol_a / 100;
});
let back = document.getElementById("back");
let next = document.getElementById("next");
back.addEventListener("click", () => {
  index -= 1;
  if (index < 1) {
    index = Array.from(document.getElementsByClassName("songItem")).length;
  }
  music.src = `assests/audio/${index}.mp3`;
  poster_master_play.src = `assests/img/${index}.jpg`;
  music.play();
  masterPlay.classList.remove("bi-play-fill");
  masterPlay.classList.add("bi-pause-fill");

  let songTitles = songs.filter((els) => {
    return els.id == index;
  });
  songTitles.forEach((elss) => {
    let { songName } = elss;
    title.innerHTML = songName;
  });

  makeAllBackground();
  Array.from(document.getElementsByClassName("songItem"))[
    index - 1
  ].style.background = "rgb(105, 105, 105 , 0.1)";
  makeAllplays();
  el.target.classList.remove("bi-play-circle-fill");
  el.target.classList.add("bi-pause-circle-fill");
  wave.classList.remove("active1");
});
next.addEventListener("click", () => {
  index++;
  if (index > Array.from(document.getElementsByClassName("songItem")).length) {
    index = 1;
  }
  music.src = `assests/audio/${index}.mp3`;
  poster_master_play.src = `assests/img/${index}.jpg`;
  music.play();
  masterPlay.classList.remove("bi-play-fill");
  masterPlay.classList.add("bi-pause-fill");

  let songTitles = songs.filter((els) => {
    return els.id == index;
  });
  songTitles.forEach((elss) => {
    let { songName } = elss;
    title.innerHTML = songName;
  });

  makeAllBackground();
  Array.from(document.getElementsByClassName("songItem"))[
    index - 1
  ].style.background = "rgb(105, 105, 105 , 0.1)";
  makeAllplays();
  el.target.classList.remove("bi-play-circle-fill");
  el.target.classList.add("bi-pause-circle-fill");
  wave.classList.remove("active1");
});

let pop_song_left = document.getElementById("pop_song_left");
let pop_song_right = document.getElementById("pop_song_right");
let pop_song = document.getElementsByClassName("pop_song")[0];

pop_song_right.addEventListener("click", () => {
  pop_song.scrollLeft += 330;
});
pop_song_left.addEventListener("click", () => {
  pop_song.scrollLeft -= 330;
});

let pop_art_left = document.getElementById("pop_art_left");
let pop_art_right = document.getElementById("pop_art_right");
let item = document.getElementsByClassName("item")[0];

pop_art_right.addEventListener("click", () => {
  item.scrollLeft += 300;
});
pop_art_left.addEventListener("click", () => {
  item.scrollLeft -= 300;
});

let shuffle = document.getElementsByClassName("shuffle")[0];
shuffle.addEventListener("click" , () => {
  let a = shuffle.innerHTML;
  switch(a) {
    case "next":
      shuffle.classList.add(" bi-arrow-repeat");
      shuffle.classList.remove("bi-music-note-beamed");
      shuffle.classList.remove("bi-shuffle");
      shuffle.classList.remove("bi-repeat-1");
      shuffle.innerHTML = "repeat";
      break;
    case "repeat":
      shuffle.classList.remove(" bi-arrow-repeat");
      shuffle.classList.remove("bi-music-note-beamed");
      shuffle.classList.remove("bi-shuffle");
      shuffle.classList.add("bi-repeat-1");
      shuffle.innerHTML = "random";
      break;
    case "random":
      shuffle.classList.remove(" bi-arrow-repeat");
      shuffle.classList.add("bi-music-note-beamed");
      shuffle.classList.remove("bi-shuffle");
      shuffle.classList.remove("bi-repeat-1");
      shuffle.innerHTML = "next";
      break;
  }
});

const next_music = () => {
  if (index == songs.length) {
    index = 1;
  } else {
    index++;
  }
  music.src = `assests/audio/${index}.mp3`;
  poster_master_play.src = `assests/img/${index}.jpg`;
  music.play();
  masterPlay.classList.remove("bi-play-fill");
  masterPlay.classList.add("bi-pause-fill");
  download_music.href = `assests/audio/${index}.mp3`;
  let songTitles = songs.filter((els) => {
    return els.id == index;
  });
  songTitles.forEach((elss) => {
    // let{songName, poster } = elss;
    let { songName } = elss;
    title.innerHTML = songName;
    download_music.setAttribute("download", songName);
    // another way to fix img in masterplay area
    // poster_master_play.innerHTML = poster;
  });

  makeAllBackground();
  Array.from(document.getElementsByClassName("songItem"))[
    index - 1
  ].style.background = "rgb(105, 105, 105 , 0.1)";
  makeAllplays();
  el.target.classList.remove("bi-play-circle-fill");
  el.target.classList.add("bi-pause-circle-fill");
  wave.classList.remove("active1");
};

const repeat_music = () => {
  index;
  music.src = `assests/audio/${index}.mp3`;
  poster_master_play.src = `assests/img/${index}.jpg`;
  music.play();
  masterPlay.classList.remove("bi-play-fill");
  masterPlay.classList.add("bi-pause-fill");
  download_music.href = `assests/audio/${index}.mp3`;
  let songTitles = songs.filter((els) => {
    return els.id == index;
  });
  songTitles.forEach((elss) => {
    // let{songName, poster } = elss;
    let { songName } = elss;
    title.innerHTML = songName;
    download_music.setAttribute("download", songName);
    // another way to fix img in masterplay area
    // poster_master_play.innerHTML = poster;
  });

  makeAllBackground();
  Array.from(document.getElementsByClassName("songItem"))[
    index - 1
  ].style.background = "rgb(105, 105, 105 , 0.1)";
  makeAllplays();
  el.target.classList.remove("bi-play-circle-fill");
  el.target.classList.add("bi-pause-circle-fill");
  wave.classList.remove("active1");
};


const random_music = () => {
    if(index == songs.length){
        index = 1;
    }
    else{
        index = Math.floor((Math.random() * songs.length) + 1);
    }
    music.src = `assests/audio/${index}.mp3`;
    poster_master_play.src = `assests/img/${index}.jpg`;
    music.play();
    masterPlay.classList.remove("bi-play-fill");
    masterPlay.classList.add("bi-pause-fill");
    download_music.href = `assests/audio/${index}.mp3`;
    let songTitles = songs.filter((els) => {
      return els.id == index;
    });
    songTitles.forEach((elss) => {
      // let{songName, poster } = elss;
      let { songName } = elss;
      title.innerHTML = songName;
      download_music.setAttribute("download", songName);
      // another way to fix img in masterplay area
      // poster_master_play.innerHTML = poster;
    });
  
    makeAllBackground();
    Array.from(document.getElementsByClassName("songItem"))[
      index - 1
    ].style.background = "rgb(105, 105, 105 , 0.1)";
    makeAllplays();
    el.target.classList.remove("bi-play-circle-fill");
    el.target.classList.add("bi-pause-circle-fill");
    wave.classList.remove("active1");
  };
  
  music.addEventListener("ended", () => {
  let b = shuffle.innerHTML;
  switch(b){
    case 'repeat':
        repeat_music();
        break;
    case 'next':
        next_music();
        break;
    case 'random':
        random_music();
        break;
  }
  });
  

























// // Authorization token that must have been created previously. See : https://developer.spotify.com/documentation/web-api/concepts/authorization
// const token = 'BQBXZx247ibWbEIQJqGoLbZOWQOnCjFw_cDuWwoP8w3JL1Hn0Z3NpMs712UOeFy_dpuSLL4qb1-rCBh5Ela4jkcxJmEpde0BqeGObXp9YeQNNcozpa-MugucpNazdm8WCFtGVwe27W8n913abq7Jg4CtO945oDyYm4BU9D7wZ1fjUBzqrx84Vg1oE5TysPd5lzu9Lssm-HQbPO988X9xBmihWqcK4lKzlhpg-ZcJgD1d6Z1Ip9zbAiyK-CV5xxzWVB0dSI04tq1fvFqxL1oX2YfG';
// async function fetchWebApi(endpoint, method, body) {
//   const res = await fetch(`https://api.spotify.com/${endpoint}`, {
//     headers: {
//       Authorization: `Bearer ${token}`,
//     },
//     method,
//     body:JSON.stringify(body)
//   });
//   return await res.json();
// }

// async function getTopTracks(){
//   // Endpoint reference : https://developer.spotify.com/documentation/web-api/reference/get-users-top-artists-and-tracks
//   return (await fetchWebApi(
//     'v1/me/top/tracks?time_range=short_term&limit=5', 'GET'
//   )).items;
// }

// const topTracks = await getTopTracks();
// console.log(
//   topTracks?.map(
//     ({name, artists}) =>
//       `${name} by ${artists.map(artist => artist.name).join(', ')}`
//   )
// );
