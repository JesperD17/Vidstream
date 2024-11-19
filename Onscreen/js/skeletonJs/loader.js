export function loader() {
    document.title = "Loading..."; // Set a default title
    history.pushState(null, null, location.href);

    var dots = window.setInterval(function() {
        var wait = document.title; // Use document.title instead of .loader
        if (wait.length > 10) {
            document.title = "Loading."; // Reset title when it gets too long
        } else {
            document.title += "."; // Append a dot
        }
    }, 500);

    // function pauseLoader() {
    //     dots = true;
    // }
}

