let user = 'Keith';

$('.greeting').text(`Hello, ${user}!`);

let quote = quotes[new Date().getDate() - 1];
$('p.quote').text(`"${quote.quote}"`);
$('p.person').text(`-${quote.person}`);


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