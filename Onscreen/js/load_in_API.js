
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
        let html = "";
    
        movies.forEach(function (movie, index) {
            const cardClass = `Card ${index + 1}`;
            const bannerClass = `movie-banner ${index + 1}`;
                // <img src="${movie.banner}" alt="${movie.title} banner"/>
            html += `
            <div class="${cardClass}">
                <div class="${bannerClass}">
                    <img src="${movie.poster}" alt="${movie.title} poster"/>
                </div>
                <div class="card_info">
                    <div class="titles">${index + 1}. ${movie.title}</div>
                    <div class="release_date">${movie.year}</div>
                    <div class="ratings">${movie.rating}</div>
                </div>
            </div>
            `;
    
            console.log(`Movie: ${movie.title}, Banner Class: ${bannerClass}`);
        });
    
        document.querySelector(".Spotlight").innerHTML += html;
    }
