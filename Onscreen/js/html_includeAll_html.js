function header() {
    document.querySelector("#header")
    let html = "";
    html += `
        
        <div id="navigation">
        <!-- Logo's -->
        <img id="logo" src="./pics/2e logo kopie.png">
        <img id="logo2" src="./pics/Logo Icon.png">
        
        <!-- Link bar -->
        <div class="alignBars">
            <div class="Full_collapsible_content">
            <div id="content">
                <i class='bx bx-align-left'></i>

                <summary>
                <div class="links">
                    <a href="#">HOME</a>
                    <a href="#">NEWS</a>
                    <a href="#">IN THEATERS</a>
                    <a href="#">COMING SOON</a>
                    <a href="#">CONTACT</a>
                    <a href="#">ADVERTISE</a>
                </div>
                </summary>
            </div>
            </div>

            <!-- Search bar -->
            <div class="full_search_bar">
            <div id="search">
                <input type="text" name="search-field" placeholder="Zoeken..." id="search-field"
                class="blink search-field">
                <i id="searchIcon1" class='bx bx-search bx-tada'></i>
                <i id="IconNoClick" class="bx bx-search bx-tada"></i>
                </input>
            </div>
            </div>
            <!-- End search bar -->
        </div>
        <!-- End link bar -->
        </div>

    `;
}
document.querySelector("#header").innerHTML += html;