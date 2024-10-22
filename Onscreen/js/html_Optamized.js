const sections = [
    { title: "Trending Movies", className: "Trending_movies", mainClass: "MainCards" },
    { title: "Trending Series", className: "Trending_series", mainClass: "MainCards" },
    { title: "Newest Movies", className: "latestMovies", mainClass: "MainCards" },
    { title: "Newest Series", className: "latesTvSeries", mainClass: "MainCards" },
  ];
  
  const main = document.getElementById("main"); 
  sections.forEach(section => {
    // Creëer sectie-header
    const headDiv = document.createElement("div");
    headDiv.classList.add("head");
  
    const headerDiv = document.createElement("div");
    headerDiv.classList.add("align_Headers");
  
    const titleDiv = document.createElement("div");
    titleDiv.classList.add("header_title");
    titleDiv.textContent = section.title;
  
    const seeAllDiv = document.createElement("div");
    seeAllDiv.classList.add("text-right");
    const linkElement = document.createElement("a");
    linkElement.href = "error.html"; // naar 404 page
    linkElement.textContent = "See all";
    seeAllDiv.appendChild(linkElement);
  
    headerDiv.appendChild(titleDiv);
    headDiv.appendChild(headerDiv);
    headDiv.appendChild(seeAllDiv);
  
    // Creëert de sectie-content
    const movieDiv = document.createElement("div");
    movieDiv.classList.add("movie");
  
    const contentDiv = document.createElement("div");
    contentDiv.classList.add(section.mainClass);
    contentDiv.classList.add(section.className);
  
    movieDiv.appendChild(contentDiv);
  
    const sectionContainer = document.createDocumentFragment();
    sectionContainer.appendChild(headDiv);
    sectionContainer.appendChild(movieDiv);
  
    main.appendChild(sectionContainer); // Voegt uiteindelijk alles toe
  });
