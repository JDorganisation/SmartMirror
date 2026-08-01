function updateClock() {
    const now = new Date();

    document.getElementById("time").textContent =
        now.toLocaleTimeString("en-GB", {
            hour: "2-digit",
            minute: "2-digit"
        });

    document.getElementById("date").textContent =
        now.toLocaleDateString("en-GB", {
            weekday: "long",
            day: "numeric",
            month: "long",
            year: "numeric"
        });
}

updateClock();
setInterval(updateClock, 1000);

// Temporary weather until we connect a live weather service
document.getElementById("weather").textContent = "☀️ 21°C";
document.getElementById("forecast").innerHTML =
`Mon 22°<br>
Tue 21°<br>
Wed 20°<br>
Thu 23°<br>
Fri 24°`;

document.getElementById("sun").innerHTML =
"🌅 Sunrise 05:28<br>🌇 Sunset 20:57";
