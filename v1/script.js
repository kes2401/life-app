let user = 'Keith';

$('.greeting').text(`Hello, ${user}!`);

let quote = quotes[new Date().getDate() - 1];
$('p.quote').text(`"${quote.quote}"`);
$('p.person').text(`-${quote.person}`);

let lat;
let lng;
// check if navigator.geolocation object is available in the browser and if so get weather
if (!navigator.geolocation){
    alert("Geolocation is not supported by your browser.");
} else {
    navigator.geolocation.getCurrentPosition(success, error);

    // code to run once geolocation data has successfully been obtained
    function success(position) {
        lat = position.coords.latitude;
        lng = position.coords.longitude;
        $.getJSON(`http://api.openweathermap.org/data/2.5/weather?lat=${lat.toFixed(3)}&lon=${lng.toFixed(3)}&units=metric&APPID=4fa408523a0e38e40107a969ee53d5d6`, function(data) {
            if (data.weather[0].main.toLowerCase() === 'clouds') {
                $('.weather-icon').html('<ion-icon name="cloudy"></ion-icon>');
            } else {
                $('.weather-icon').html('<ion-icon name="alert"></ion-icon>');
            }
            $('.temp').text(`${data.main.temp} °C`);
            $('.location').text(data.name);
        });   
    }
    
    // code to run if geolocation data could not be retrieved
    function error() {
        alert("Unable to retrieve your location");
    }
}






function timer() {
    let time = new Date();
    let h = time.getHours();
    let m = time.getMinutes();
    let s = time.getSeconds();
    m = zerofill(m);
    s = zerofill(s);

    $('.time').text(`${h}:${m}:${s}`);
    $('.date').text(`${getDay(time.getDay())}, ${getMonth(time.getMonth())} ${zerofill(time.getDate())}, ${time.getFullYear()}`);

    let t = setTimeout(timer, 500);

    function zerofill(i) {
        if (i < 10) {i = "0" + i};
        return i;
    }

    function getDay(dayNum) {
        let day;
        switch (dayNum) {
            case 0:
                day = 'Sunday';
                break;
            case 1:
                day = 'Monday';
                break;
            case 2:
                day = 'Tuesday';
                break;
            case 3:
                day = 'Wednesday';
                break;
            case 4:
                day = 'Thursday';
                break;
            case 5:
                day = 'Friday';
                break;
            case 6:
                day = 'Saturday';
                break;
        }
        return day;
    }

    function getMonth(monthNum) {
        let month;
        switch (monthNum) {
            case 0:
                month = 'Jan';
                break;
            case 1:
                month = 'Feb';
                break;
            case 2:
                month = 'Mar';
                break;
            case 3:
                month = 'Apr';
                break;
            case 4:
                month = 'May';
                break;
            case 5:
                month = 'Jun';
                break;
            case 6:
                month = 'Jul';
                break;
            case 7:
                month = 'Aug';
                break;
            case 8:
                month = 'Sep';
                break;
            case 9:
                month = 'Oct';
                break;
            case 10:
                month = 'Nov';
                break;
            case 11:
                month = 'Dec';
                break;
        }
        return month;
    }
}