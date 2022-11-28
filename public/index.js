let d = new Date();

let us = document.querySelector('#US');
console.log(us);
us.innerHTML = d.toLocaleString('en-US',{
    timeZone: 'America/Los_Angeles'
})