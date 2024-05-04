fetch('http://localhost:3000/api/movie/399566')
    .then(response => response.json())
    .then(movies =>{
        const div = document.createElement("div")
        div.className = "header"
        document.getElementById("container").appendChild(div)

        const h1 = document.createElement("h1")
        div.innerHTML = `${movies.title}`
        div.appendChild(h1)

        const div2 = document.createElement("div")
        div2.className = "isi"
        document.getElementById("container").appendChild(div2)

        const table = document.createElement("table")

        const tr = document.createElement("tr")
        tr.innerHTML =  `<img src='${"https://image.tmdb.org/t/p/w600_and_h900_bestv2" + movies.poster_path}' width='140' height='200'>`;
                            
        const tr2 = document.createElement("tr")
        tr2.innerHTML = `
        <p class = "judul" >${movies.title} (${(movies.release_date).slice(0,4)})</p>
        <p class = "certi">${movies.certification} | ${movies.release_date} | ${movies.original_language}</p>`

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
            <p class = "mmovie">${movies.overview}</p>
        `

        const trb2 = document.createElement("p")
        trb2.innerHTML = `
            <p class = "director">${movies.directors[0].name}<br><span class = "key" >Director</span></p>`
        sect.appendChild(trb);

        const div10 = document.createElement("div")
        div10.className = "writer"


        for (let i = 0; i < movies.writers.length; i++){
          let people = document.createElement("p")
          people.innerHTML = `${movies.writers[i].name}<br><span>Writer</span>`
          div10.appendChild(people)
        }
        sect.appendChild(trb2)
        sect.appendChild(div10);

        const div20 = document.createElement("div")
        div20.className = "cast"

        for (let i = 0; i < movies.cast.length; i++){
          let cast = document.createElement("p")
          cast.innerHTML = `${movies.cast[i].name}<br><span>Cast</span>`
          div20.appendChild(cast)
        }
        sect.appendChild(div20);
        table.appendChild(tr);
        table.appendChild(tr2);
        div2.appendChild(table);
        div4.appendChild(sect);
    })