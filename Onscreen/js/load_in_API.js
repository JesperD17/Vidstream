
    // console loggen API of error aangeven
    let url = 'https://vidstream-api.vercel.app/home';
    function fStart() {
        fetch(url)
            .then((response) => response.json())    
            .then((response) => {
                console.log("response =", response);
                let spotlight = response.spotlight;
                let Trending_movie = response.trending.movies;
                let Trending_series = response.trending.tvSeries;
                let latestmovies = response.latestMovies;
                let latestvSeries = response.latestTvSeries;  

                // console.log("spotlight =", spotlight);
                console.log("spotlight = ", spotlight)
                console.log("trending =", Trending_movie);
                console.log("trending =", Trending_series);
                console.log("latestmovies =", latestmovies);
                console.log("latestvseries =", latestvSeries);
                
                // fShow(spotlight, ".Spotlight");
                lShow(spotlight, ".Spotlight");
                fShow(Trending_movie, ".Trending_movies");
                fShow(Trending_series, ".Trending_series");
                fShow(latestmovies, ".latestMovies");
                fShow(latestvSeries, ".latesTvSeries");
            })
            .catch(function (error) {
                console.log("error=", error);
            });
    }
    fStart();
    
    function fShow(el, elementClass) {
        let html = "";
    
        el.forEach(function (movie_serie, index) {
            const cardClass = `Card ${index + 1}`;
            const bannerClass = `movie-banner ${index + 1}`;
                // <img src="${movie_serie.banner}" alt="${movie_serie.title} banner"/>
            html += `
            <div class="${cardClass}">
                <div class="${bannerClass}">
                    <img src="${movie_serie.poster}" alt="${movie_serie.title} poster"/>
                </div>
                <div class="card_info">
                    <div class="titles">${index + 1}. ${movie_serie.title}</div>
                        <div class="rating_release">
                            <div class="release_date">${movie_serie.stats.year}</div>
                            <div class="seasons">${movie_serie.stats.seasons}</div>
                            <div class="duration">${movie_serie.stats.duration}</div>
                            <div class="ratings">${movie_serie.stats.rating} <i class='bx bxs-star-half'></i></div>
                        </div>
                </div>
            </div>
            `;
    
            // console.log(`Movie: ${spot.title}, Banner Class: ${bannerClass}`);
        });
    
        document.querySelector(elementClass).innerHTML += html;
        // document.querySelector(".latestMovies").innerHTML += html;
    }

    function lShow(movies) {
        let html = "";

        movies.forEach(function (movie, index) {
            
            const cardClass = `slide-Card ${index + 1}`;
            const bannerClass = `slide-movie-banner ${index + 1}`;
    
                // <img src="${movie.banner}" alt="${movie.title} banner"/>
                // <img src="${movie.poster}" alt="${movie.title} poster"/>
            html += `
            <div class="${cardClass}">
                <div class="${bannerClass}">
                <img src="${movie.banner}" alt="${movie.title} banner"/>
                    <div class="slide-card_info">
                        <div class="slide-titles">${index + 1}. ${movie.title}</div>
                        <div class="slide-release_date">${movie.year}</div>
                        <div class="slide-ratings">${movie.rating}</div>
                    </div>
                </div>
            </div>
            `;

            console.log(`Movie: ${movie.title}, Banner Class: ${bannerClass}`);
        });

        document.querySelector(".output").innerHTML += html;

    }
