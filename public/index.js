// const audioURL = require('../audio/Shri Hari Stotram _ Meaning in Hindi_256k.mp3');

const alarmAudio = async ()=>{
        const audioURL = "https://download.samplelib.com/mp3/sample-15s.mp3";
        // const audioURL = "../audio/Shri Hari Stotram _ Meaning in Hindi_256k.mp3";
        const audio =  await new Audio(audioURL);
        audio.play();
}


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
    
    const alarmTime = document.querySelector('#timepicker')
    // console.log(JSON.stringify(alarmTime.value))
    const alarmHour = alarmTime.value.split(":")[0];
    const alarmMin = alarmTime.value.split(":")[1];
//     const alarmSuffix = String(alarmTime).splice(6);
    
    if(d.getHours()== alarmHour && d.getMinutes()== alarmMin){
        console.log(alarmHour, alarmMin)
        console.log("Audio is playing");
        alarmAudio();
        
    }

 }



setInterval(updateTime,1000)