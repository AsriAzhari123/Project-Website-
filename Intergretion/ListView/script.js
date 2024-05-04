fetch('http://localhost:3000/api/movies')
    .then((response) => response.json())
    .then((movies) =>{
        const h1 = document.createElement("h1");
        h1.appendChild(document.createTextNode("Popular Movie"))
        document.getElementById("container").appendChild(h1);

        const table = document.createElement("table");
        const tr = document.createElement("tr");

        table.appendChild(tr);
        id = 0
        movies.slice(0, 100).map((x, i) => {
            const tr = document.createElement("tr")
            document.createElement("td").innerHTML = i+2;

            const td1 = document.createElement("td");
            td1.innerHTML = `<img src='${"https://image.tmdb.org/t/p/w600_and_h900_bestv2" + x.poster_path}' width='100' height='120'>`;

            const td2 = document.createElement("td");
            td2.innerHTML = `<div class = "border">
            <ul>
                <li><h3>${x.title}</h3></li>
                <li><p class = "tag">${x.tagline}</p></li>
            </ul></div>`;

            const td3 = document.createElement("td");
            td3.innerHTML = `<a id="${id}" value="${id++}" target="_blank" href="../DetailView/movie.html"><p class = "symbol">&rsaquo;</p></a>`
            
            tr.appendChild(td1);
            tr.appendChild(td2);
            tr.appendChild(td3);
            table.appendChild(tr);
        });
        document.getElementById("container").appendChild(table);  
    })