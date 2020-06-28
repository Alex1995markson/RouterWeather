function showIcon(summary) {
const weather_icon = 
 [
     {
        weather : 'clear-day',
        name : "icon/sun.png"
     },
     {
        weather :'clear-night',
        name : "icon/sleep.png"
     },
     {
        weather :'rain',
        name : "icon/water.png"
     },
     {
        weather :'show',
        name : 'icon/snow.png'
     },
     {
        weather : "sleet",
        name : 'icon/sleet.png';
     },
     {
        weather: 'wind',
        name : "" 
     },
     {
        weather: 'fog',
        name : ""   
     },
     {
         weather: "cloudy",
         name : ""
     }, 
     {
         weather: "partly-cloudy-day",
         name : ""
     },
     {
        weather: 'partly-cloudy-night',
        name: ""
     },
    {
        weather: 'hail',
        name : ""
    },
    {
        weather: 'thunderstorm',
        name: ""
    },
    {
        weather: 'tornado',
        name: ""
    }
 ];
 return weather_icon.filter(function(val) {
     return weather_icon.weather == summary
 })[0].name;
}






