let updateTime = () => {

    let d = new Date();

    let us = document.querySelector('#US');
    us.innerHTML = d.toLocaleString('en-US', {
        timeZone: 'America/Los_Angeles'
    }).split(',')[1];

    let india = document.querySelector('#india');
    india.innerHTML = d.toLocaleString('en-US', {
        timeZone: 'Asia/Kolkata'
    }).split(',')[1];

    let europe = document.querySelector('#europe');
    europe.innerHTML = d.toLocaleString('en-US', {
        timeZone: 'Europe/London'
    }).split(',')[1];

}

setInterval(updateTime,1000)