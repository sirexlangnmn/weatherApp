//* Darksky API : https://darksky.net
//* Icons : https://darkskyapp.github.io/skycons/
//* Video Tutorial link : https://www.youtube.com/watch?v=wPElVpR1rwA
//* Tutorial title : Build A Weather App With Vanilla Javascript Tutorial | Javascript For Beginners

//* Darksky API does not allow you to access in localhost because it has cross browser origin (CORS issue)
//* to get around this issue (simpliest way I can get around) use as proxy the link below to make a request even from localhost.
//* 'https://cors-anywhere.herokuapp.com/'


window.addEventListener("load", ()=> {
	let longitude;
	let latitude;
	let celcius;
	let temparatureDescription = document.querySelector('#temperature-description');
	let temperatureDegree = document.querySelector('#temperature-degree');
	let locationTimezone = document.querySelector('#location-timezone');
	let iconID = document.querySelector("#icon");
	let temperatureSection = document.querySelector("#temperature-section");
	let temperatureSpan = document.querySelector("#fahrenheit-celsius");

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            longitude = position.coords.longitude;
            latitude = position.coords.latitude;

            const proxy = 'https://cors-anywhere.herokuapp.com/';
            const darksky_api = `${proxy}https://api.darksky.net/forecast/863e539aeced0e7d28a2ec70efaf7126/${latitude},${longitude}`;

            fetch(darksky_api)
                .then((response) => {
                  return response.json();
                })
                .then((data) => {
					const { temperature, summary, icon} = data.currently;

					temperatureDegree.textContent = temperature;
					temparatureDescription.textContent = summary;
					locationTimezone.textContent = data.timezone;

					setIcons(icon, iconID);

					celcius = Math.floor((temperature - 32) * (5 / 9));

					temperatureSection.addEventListener("click", () => {
						if (temperatureSpan.textContent === "°F") {
							temperatureSpan.textContent = "°C";
							temperatureDegree.textContent = celcius;
						} else {
							temperatureSpan.textContent = "°F";
							temperatureDegree.textContent = temperature;
						}
					});
                });
        });
    } else {
        alert("Geolocation is not supported by this browser.");
	}
});

function setIcons(icon, iconID) {
	const skycons = new Skycons({"color": "white"});
	const currentIcon = icon.replace(/-/g, "_").toUpperCase();

	skycons.play();
	skycons.add(iconID, Skycons[currentIcon]);
	return skycons;
}
