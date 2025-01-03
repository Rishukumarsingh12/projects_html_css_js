
function updateclock(){
    const now = new Date();

    let hr = now.getHours().toString().padStart(2,'0');
    
    const meridiem = hr > 12? "Pm":"Am";
    hr = hr%12 || 12;
    hr = hr.toString().padStart(2,'0');
    
    const min = now.getMinutes().toString().padStart(2,'0');
    const sec = now.getSeconds().toString().padStart(2,'0');
    const time = `${hr}:${min}:${sec} ${meridiem}`;
    
    document.getElementById("clock").textContent = time;
}

updateclock();
setInterval(updateclock, 1000);