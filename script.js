function filterAlerts(level) {

    let alerts = document.querySelectorAll(".alert");

    alerts.forEach(function(alert) {

        if(level === "all") {
            alert.style.display = "block";
        }

        else if(alert.classList.contains(level)) {
            alert.style.display = "block";
        }

        else {
            alert.style.display = "none";
        }

    });

}


// Search Alerts

function searchAlerts() {

    let input =
    document.getElementById("searchBox")
    .value
    .toLowerCase();

    let alerts = document.querySelectorAll(".alert");

    alerts.forEach(function(alert) {

        let text = alert.innerText.toLowerCase();

        if(text.includes(input)) {
            alert.style.display = "block";
        }

        else {
            alert.style.display = "none";
        }

    });

}
