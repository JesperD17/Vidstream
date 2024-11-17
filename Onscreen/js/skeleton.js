const skeletonCards = [
    {
        poster: "poster1.jpg",
        title: "Movie 1",
        stats: { year: 2021, seasons: 3, duration: "120 mins", rating: 4.5 }
    },
    {
        poster: "poster2.jpg",
        title: "Movie 2",
        stats: { year: 2022, seasons: 2, duration: "100 mins", rating: 4.2 }
    }
    // Add more card objects here
];

function fShow(skeletonCards) {
    let html = "";
    skeletonCards.forEach(function (movie_serie, index) {
        const cardClass = `Card ${index + 1}`;
        const bannerClass = `movie-banner ${index + 1}`;
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
    });
    document.querySelector(".skeleton").innerHTML += html;
}

// Call the function with the skeletonCards array
fShow(skeletonCards);
