function getCity()
{
    city = document.getElementById("searchBoxInput").value;
    return city;
}

//APIKEY: 76f0e5a362aa73602dc0d38ecbda4216

async function getWeather ()
{
    let city = await getCity();
    //console.log(city);

    apiKey = "76f0e5a362aa73602dc0d38ecbda4216"

    response = await fetch 
    ("https://api.openweathermap.org/data/2.5/weather?q=" +
    city +
    "&units=metric&appid=" +
    this.apiKey)
    //console.log(response);

    data = await response.json();
    //console.log(data);

    const description = data.weather[0].description;
    //console.log("Description: " + description);
    const temp = data.main.temp;
    //console.log("Temp: " + temp);
    const windSpeed = data.wind.speed;
    //console.log("Wind Speed: " + windSpeed);
    const tempMin = data.main.temp_min;
    //console.log("Min temp: " + tempMin);
    const tempMax = data.main.temp_max;
    //console.log("Max temp: " + tempMax);
    const icon = data.weather[0].icon;
    //console.log("Icon: " + icon);
    const name = data.name;
    //console.log("Location: " + name);

    width = screen.width
    height = screen.height
    document.body.style.backgroundImage =
    "url('https://source.unsplash.com/"+ width +"x" +height+"/?" + name + "')";

    var iconurl = "http://openweathermap.org/img/w/" + icon + ".png";
    const img = new Image(400,400);
    img.src = iconurl;
    document.getElementById("Icon").appendChild(img);
    
    document.getElementById("info1").innerHTML = "The weather is " + description;
    document.getElementById("info2").innerHTML ="The temp is " + temp + "° Celsius";
    document.getElementById("info3").innerHTML = "The wind speed is " + windSpeed + "mph";
    document.getElementById("info4").innerHTML = "H: " + tempMax + "° Celsius" + " L: " + tempMin + "° Celsius";;
    
    document.getElementById("Location").innerHTML = name + "<i class=" + "material-icons" + " style=" + "font-size:1em>edit_location</i>";
}

