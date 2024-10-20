
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
            // Create a unique class for each movie, e.g., "movie-banner-1"
            const cardClass = `Card-${index + 1}`;
            const bannerClass = `movie-banner-${index + 1}`;
    
            html += `
            <div class="${cardClass}">
                <div class="${bannerClass}">
                    <img src="${movie.banner}" alt="${movie.title} banner"/>
                </div>
                <div class="titles">${index + 1}. ${movie.title}</div>
                <div></div>
            </div>
            `;
    
            console.log(`Movie: ${movie.title}, Banner Class: ${bannerClass}`);
        });
    
        document.querySelector(".output").innerHTML += html;
    }
