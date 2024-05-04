const movie = 
    {
      "budget": 200000000,
      "genres": ["Action", "Science Fiction"],
      "homepage": "https://www.godzillavskong.net",
      "id": 399566,
      "original_language": "English",
      "overview": "In a time when monsters walk the Earth, humanity’s fight for its future sets Godzilla and Kong on a collision course that will see the two most powerful forces of nature on the planet collide in a spectacular battle for the ages.",
      "popularity": 10755.513,
      "poster_path": "/pgqgaUx1cJb5oZQQ5v0tNARCeBp.jpg",
      "release_date": "2021-03-24",
      "revenue": 298573106,
      "runtime": 113,
      "tagline": "One Will Fall",
      "title": "Godzilla vs. Kong",
      "vote_average": 8.4,
      "vote_count": 4108,
      "external_ids": {
        "imdb_id": "tt5034838",
        "facebook_id": "GodzillaVsKong",
        "instagram_id": "godzillavskong",
        "twitter_id": "GodzillavsKong"
      },
      "similar": [
        { "id": 15767, "title": "Godzilla: Final Wars" },
        { "id": 929, "title": "Godzilla" },
        { "id": 12636, "title": "Godzilla Against MechaGodzilla" },
        { "id": 18983, "title": "Godzilla, King of the Monsters!" },
        { "id": 315011, "title": "Shin Godzilla" },
        { "id": 36679, "title": "Godzilla vs. King Ghidorah" },
        { "id": 18289, "title": "Godzilla vs. Biollante" },
        { "id": 268896, "title": "Pacific Rim: Uprising" },
        { "id": 536115, "title": "Godzilla: The Planet Eater" },
        { "id": 1678, "title": "Godzilla" },
        { "id": 254, "title": "King Kong" },
        { "id": 7191, "title": "Cloverfield" },
        { "id": 68726, "title": "Pacific Rim" },
        { "id": 293167, "title": "Kong: Skull Island" },
        { "id": 19333, "title": "Terror of Mechagodzilla" },
        { "id": 26947, "title": "Gamera vs. Guiron" },
        { "id": 803386, "title": "The Legend of King Kong" },
        { "id": 19742, "title": "Rodan" },
        { "id": 54433, "title": "Gamera: Guardian of the Universe" },
        {
          "id": 39468,
          "title": "Godzilla vs. Megaguirus: The G Extermination Strategy"
        }
      ],
      "certification": "PG-13",
      "directors": [{ "id": 98631, "name": "Adam Wingard" }],
      "writers": [
        { "id": 1706, "name": "Terry Rossio" },
        { "id": 11012, "name": "Michael Dougherty" },
        { "id": 579281, "name": "Eric Pearson" },
        { "id": 1080778, "name": "Max Borenstein" },
        { "id": 1443683, "name": "Zach Shields" }
      ],
      "cast": [
        { "id": 28846, "name": "Alexander Skarsgård" },
        { "id": 1356210, "name": "Millie Bobby Brown" },
        { "id": 15556, "name": "Rebecca Hall" }
      ],
      "trailer_yt": "odM92ap8_c0"
    }   
const div = document.createElement("div")
div.className = "header"
document.getElementById("container").appendChild(div)

const h1 = document.createElement("h1")
div.innerHTML = `${movie.title}`
div.appendChild(h1)

const div2 = document.createElement("div")
div2.className = "isi"
document.getElementById("container").appendChild(div2)

const table = document.createElement("table")

const tr = document.createElement("tr")
tr.innerHTML =  `<img src='${"https://image.tmdb.org/t/p/w600_and_h900_bestv2" + movie.poster_path}' width='140' height='200'>`;
                    
const tr2 = document.createElement("tr")
tr2.innerHTML = `
<p class = "judul" >${movie.title} (${(movie.release_date).slice(0,4)})</p>
<p class = "certi">${movie.certification} | ${movie.release_date} | ${movie.original_language}</p>`

const div3 = document.createElement("div")
div3.className = "headerOver"
div3.innerHTML = `
<div class = "overview">
    <p class = "text">Overview</p>
</div>
`
document.getElementById("container").appendChild(div3)

const div4 = document.createElement("div")
div4.className = "deskripsi"
document.getElementById("container").appendChild(div4)

const sect = document.createElement("section")
const trb = document.createElement("p")
trb.innerHTML = `
    <p class = "mmovie">${movie.overview}</p>
`

const trb2 = document.createElement("p")
trb2.innerHTML = `
    <p class = "director">${movie.directors[0].name}<br><span class = "key" >Director</span></p>`
sect.appendChild(trb);

const div10 = document.createElement("div")
div10.className = "writer"


for (let i = 0; i < movie.writers.length; i++){
  let people = document.createElement("p")
  people.innerHTML = `${movie.writers[i].name}<br><span>Writer</span>`
  div10.appendChild(people)
}
sect.appendChild(trb2)
sect.appendChild(div10);

const div20 = document.createElement("div")
div20.className = "cast"

for (let i = 0; i < movie.cast.length; i++){
  let cast = document.createElement("p")
  cast.innerHTML = `${movie.cast[i].name}<br><span>Cast</span>`
  div20.appendChild(cast)
}
sect.appendChild(div20);
table.appendChild(tr);
table.appendChild(tr2);
div2.appendChild(table);
div4.appendChild(sect);