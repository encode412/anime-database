//https://api.jikan.moe/v3/anime/1/animei/2
const API_URL = "https://api.jikan.moe/v3/top/anime/1/bypopularity";
const main = document.getElementById("main");
const form = document.getElementById("form");
const search = document.getElementById("search");
const searchURL =  'https://api.jikan.moe/v3/search/anime';
const genreAPI = 'https://api.jikan.moe/v3/genre/anime/'

const genre =  [
    {
      "mal_id": 1,
      "type": "anime",
      "name": "Action",
      "url": "https://myanimelist.net/anime/genre/1/Action"
    },
    {
      "mal_id": 38,
      "type": "anime",
      "name": "Military",
      "url": "https://myanimelist.net/anime/genre/38/Military"
    },
    {
      "mal_id": 2,
      "type": "anime",
      "name": "Adventure",
      "url": "https://myanimelist.net/anime/genre/2/Adventure"
    },
    {
      "mal_id": 4,
      "type": "anime",
      "name": "Comedy",
      "url": "https://myanimelist.net/anime/genre/4/Comedy"
    },
    {
      "mal_id": 8,
      "type": "anime",
      "name": "Drama",
      "url": "https://myanimelist.net/anime/genre/8/Drama"
    },
    {
      "mal_id": 10,
      "type": "anime",
      "name": "Fantasy",
      "url": "https://myanimelist.net/anime/genre/10/Fantasy"
    },
    {
      "mal_id": 27,
      "type": "anime",
      "name": "Shounen",
      "url": "https://myanimelist.net/anime/genre/27/Shounen"
    },
    {
      "mal_id": 24,
      "type": "anime",
      "name": "Sci-Fi",
      "url": "https://myanimelist.net/anime/genre/24/Sci-Fi"
    },
    {
      "mal_id": 4,
      "type": "anime",
      "name": "Comedy",
      "url": "https://myanimelist.net/anime/genre/4/Comedy"
    },
    {
      "mal_id": 20,
      "type": "anime",
      "name": "Parody",
      "url": "https://myanimelist.net/anime/genre/20/Parody"
    },
    {
      "mal_id": 31,
      "type": "anime",
      "name": "Super Power",
      "url": "https://myanimelist.net/anime/genre/31/Super_Power"
    },
    {
      "mal_id": 23,
      "type": "anime",
      "name": "School",
      "url": "https://myanimelist.net/anime/genre/23/School"
    },
    {
      "mal_id": 8,
      "type": "anime",
      "name": "Drama",
      "url": "https://myanimelist.net/anime/genre/8/Drama"
    },
    {
      "mal_id": 18,
      "type": "anime",
      "name": "Mecha",
      "url": "https://myanimelist.net/anime/genre/18/Mecha"
    },
    {
      "mal_id": 41,
      "type": "anime",
      "name": "Thriller",
      "url": "https://myanimelist.net/anime/genre/41/Thriller"
    },
    {
      "mal_id": 11,
      "type": "anime",
      "name": "Game",
      "url": "https://myanimelist.net/anime/genre/11/Game"
    },
    {
        "mal_id": 42,
        "type": "anime",
        "name": "Seinen",
        "url": "https://myanimelist.net/anime/genre/42/Seinen"
      },
      {
        "mal_id": 11,
        "type": "anime",
        "name": "Madhouse",
        "url": "https://myanimelist.net/anime/genre/11/Madhouse"
      },
      {
        "mal_id": 43,
        "type": "anime",
        "name": "Ufotable",
        "url": "https://myanimelist.net/anime/genre/43/ufotable"
      },
      {
        "mal_id": 37,
        "type": "anime",
        "name": "Studio Deen",
        "url": "https://myanimelist.net/anime/genre/37/Studio Deen"
      },
      {
        "mal_id": 4,
        "type": "anime",
        "name": "Bones",
        "url": "https://myanimelist.net/anime/genre/4/Bones"
      },
      {
        "mal_id": 569,
        "type": "anime",
        "name": "MAPPA",
        "url": "https://myanimelist.net/anime/genre/569/MAPPA"
      },
      {
        "mal_id": 21,
        "type": "anime",
        "name": "Seinen",
        "url": "https://myanimelist.net/anime/genre/21/Samurai"
      },
      {
        "mal_id": 13,
        "type": "anime",
        "name": "History",
        "url": "https://myanimelist.net/anime/genre/13/History"
      },
      {
        "mal_id": 31,
        "type": "anime",
        "name": "Super Power",
        "url": "https://myanimelist.net/anime/genre/31/Super Power"
      },
   
      {
        "mal_id": 7,
        "type": "anime",
        "name": "Mystery",
        "url": "https://myanimelist.net/anime/genre/7/Mystery"
      },
      {
        "mal_id": 15,
        "type": "anime",
        "name": "Kids",
        "url": "https://myanimelist.net/anime/genre/15/Kids"
      },
      {
        "mal_id": 19,
        "type": "anime",
        "name": "Music",
        "url": "https://myanimelist.net/anime/genre/19/Music"
      },
      {
        "mal_id": 30,
        "type": "anime",
        "name": "Sports",
        "url": "https://myanimelist.net/anime/genre/30/Sports"
      },
      {
        "mal_id": 40,
        "type": "anime",
        "name": "Psychological",
        "url": "https://myanimelist.net/anime/genre/40/Psychological"
      }
    


  ]


     
  



form.addEventListener('submit', (e) => {
    e.preventDefault();
    const searchValue = search.value;
    const searchURL =  'https://api.jikan.moe/v3/search/anime?q='+ searchValue;

    if(searchValue){
         getSearch(searchURL)
        
    }
    else{
     getAnime(API_URL)
    } 
  
    
})

function getSearch(url) {
    fetch(url).then(res => res.json()).then(data => {
            showAnime(data.results)
        
    })
}

getAnime(API_URL)
function getAnime(url) {
    fetch(url).then(res => res.json()).then(data => {
            showAnime(data.top)
       
    })
}


function showAnime(data){
main.innerHTML= '';
data.forEach(anime => {
        const{title, image_url, score, url} = anime
        const animeEl = document.createElement('div');
        animeEl.classList.add('anime')
        animeEl.innerHTML = `<a href= "${url}"><img src="${image_url}" src= "${url}" alt="${title}"></a>
        <div class="anime-info">
     <h2>${title}</h2>
     <span class="${getColor(score)}">${score}</span>
        </div>
        <div class="overview">
             <div class="info"><h3>Click for more info</h3></div>
             </div>`
         main.appendChild(animeEl)
    })
    
}

function getColor(score) {
    if(score>8){
        return 'green'
    }
    else if(score > 7) {
        return 'orange'
    }
    else{
        return 'red'
    }
}
const tagsEl = document.getElementById("tags");
var selectedGenre = []
setGenre()
function setGenre() {
    tagsEl.innerHTML = "";
    genre.forEach(genres => {
        const t = document.createElement("div")
        t.classList.add('tag')
        t.id = genres.mal_id;
        t.innerText = genres.name
        
        t.addEventListener("click", () => {
            if(selectedGenre == 0){
                selectedGenre.push(genres.mal_id)
            }
            else{
                if(selectedGenre.includes(genres.mal_id)){
                    selectedGenre.forEach((id, idx) => {
                        if(genres.mal_id == 12){
                            selectedGenre.splice(idx, 1);
                        
                        }
                    })
                }else{
                    selectedGenre.push(genres.mal_id)
                }
            }
                          if(selectedGenre.length !== 1){
                    selectedGenre.shift()
                    const highlightedTag = document.getElementById(id)
                    highlightedTag.classList.add('highlight')
                          }
                
               
                    
                
            
            console.log(selectedGenre)
            getGenre(genreAPI + selectedGenre)
            

          
           showAnime(genreAPI)
           console.log(genreAPI)
           highlight()
        })
        tagsEl.append(t)
      
    })
    function getGenre(url) {
        fetch(url).then(res => res.json()).then(data => {
         // console.log(data.anime);
            showAnime(data.anime)
           
        })
    }

}

function highlight(){
  if(selectedGenre.length !== 1) {
    selectedGenre.forEach(id => {
      const highlightedTag = document.getElementById(id)
      highlightedTag.classList.add('highlight')
    })
  }
}