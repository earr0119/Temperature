document.addEventListener("DOMContentLoaded", function() {
    let tempeture={
        apikey:"b0d83137a19fe716269965a0b2fcbf3d",
        fetchTempeture:function(city){
            fetch(
                "https://api.openweathermap.org/data/2.5/weather?q="
                + city
                + "&units=metric&appid="
                + this.apikey
            )
            .then((response)=>{
                return response.json();
            })
            .then((data)=>this.showWeather(data));
        },
        showWeather:function(data){
            const {temp} = data.main;
            let tempElement = document.querySelector("#temp");
            if (tempElement) {
                tempElement.innerHTML = temp + " &#8451;";
            }
        }
    }

    let city = document.querySelector("#city");
    city.addEventListener("change", function() {
            tempeture.fetchTempeture(city.value);
        })
    tempeture.fetchTempeture("caracas");
});