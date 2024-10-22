
    // console loggen API of error aangeven
    function fStart() {
        let url = 'https://vidstream-api.vercel.app/home';
        fetch(url)
            .then((response) => response.json())    
            .then((response) => {
                console.log("response =", response);
                let spotlight = response.spotlight;
                let Trending_movie = response.trending.movies;
                let Trending_series = response.trending.tvSeries;
                let latestmovies = response.latestMovies;
                let latestvSeries = response.latestTvSeries;  

                console.log("spotlight =", spotlight);
                console.log("trending =", Trending_movie);
                console.log("trending =", Trending_series);
                console.log("latestmovies =", latestmovies);
                console.log("latestvseries =", latestvSeries);
                
                fShow(spotlight, ".Spotlight");
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
    
    function fShow(spotlight, elementClass) {
        let html = "";
    
        spotlight.forEach(function (movie_serie, index) {
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
                            <div class="release_date">${movie_serie.year}</div>
                            <div class="ratings">${movie_serie.rating} <i class='bx bxs-star-half'></i></div>
                        </div>
                </div>
            </div>
            `;
    
            // console.log(`Movie: ${spot.title}, Banner Class: ${bannerClass}`);
        });
    
        document.querySelector(elementClass).innerHTML += html;
        // document.querySelector(".latestMovies").innerHTML += html;
    }
