
    // console loggen API of error aangeven
    function fStart() {
        let url = 'http://localhost:4030/home';
        fetch(url)
            .then((response) => response.json())    
            .then((response) => {
                console.log("response =", response);
                let movies = response.spotlight;  
                console.log("movies =", movies);
                fShow(movies);
            })
            .catch(function (error) {
                console.log("error=", error);
            });
    }
    fStart();

    function fShow(movies) {
        let html = "<h3>Hieronder komen de movies</h3>";

        movies.forEach(function (movie, index) {
            html += `
                <div>
                    <h4>${index + 1} ${movie.title}</h4>
                    <img src="${movie.banner}" alt="${movie.title} banner" style="width:100%;max-width:600px;"/>
                </div>
            `;
            console.log(movie.title);
        });
        document.getElementById("output").innerHTML += html;
    }
