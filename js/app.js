//Función para obtener la hora con formato hh:mm 
function printDate() {
    var time = new Date();
    var hours = time.getHours();
    var minutes = time.getMinutes();
    var meridian = '';
    if (minutes < 10) {
        minutes = (String(0) + String(minutes));
    }
    if (hours >= 13) {
        hours = hours - 12;
        meridian = 'PM';
    } else {
        meridian = 'AM';
    }
    return hours + ':' + minutes + ' ' + meridian;
}

//Función que agrega evento al botón / formulario e incorpora el texto al html

var addTweet = document.forms['add-tweet'];
addTweet.addEventListener('submit', function(e) {
    e.preventDefault();
    var value = addTweet.querySelector('input[type="text"]').value;
    var timeLine = document.getElementById('time-line');
    var newTweet = document.createElement('div');
    var tweetText = document.createElement('p');
    var timeTweet = document.createElement('span');
    var time = printDate();
    tweetText.textContent = value;
    timeTweet.textContent = time;
    newTweet.appendChild(tweetText);
    newTweet.appendChild(timeTweet);
    timeLine.prepend(newTweet);
});

//Función para deshabilitar botón
//document.getElementById("myBtn").disabled = true;