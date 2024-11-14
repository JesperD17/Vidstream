// let dummyCard = 10;

function fShow(dummyCard) {
    let html = "";
    
    // Loads in for every movie
    // el.forEach(function (dummyCard) {
    Array.from({ length: dummyCard }).forEach((_, index) => {

        const cardClass = `Card ${index + 1}`;
        const bannerClass = `movie-banner ${index + 1}`;
        html += `
        <div class="{cardClass}">
            <div class="{bannerClass}">
                <img src="{movie_serie.poster}" alt="{movie_serie.title} poster"/>
            </div>
            <div class="card_info">
                <div class="titles">${index + 1}. {movie_serie.title}</div>
                    <div class="rating_release">
                        <div class="release_date">{movie_serie.stats.year}</div>
                        <div class="seasons">{movie_serie.stats.seasons}</div>
                        <div class="duration">{movie_serie.stats.duration}</div>
                        <div class="ratings">{movie_serie.stats.rating} <i class='bx bxs-star-half'></i></div>
                    </div>
            </div>
        </div>
        `;

    });

    document.querySelector(".skeleton.output").innerHTML += html;
}