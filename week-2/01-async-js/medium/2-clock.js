                     //HH:MM::SS (Eg. 13:45:23)//

function showTime() {
    const now = new Date();

    const hours = String(now.getHours()).padStart(2, "0");
    const minutes = String(now.getMinutes()).padStart(2, "0");
    const seconds = String(now.getSeconds()).padStart(2, "0");

    console.log(`${hours}:${minutes}:${seconds}`);
}

setInterval(showTime, 1000);

                    //HH:MM::SS AM/PM (Eg 01:45:23 PM)//
            
function showTime() {
    const now = new Date();

    let hours = now.getHours();
    const minutes = String(now.getMinutes()).padStart(2, "0");
    const seconds = String(now.getSeconds()).padStart(2, "0");

    const ampm = hours >= 12 ? 'PM' : 'AM';

    hours = hours % 12;

    if(hours === 0){
        hours = 12;
    }

    hours = String(hours).padStart(2, "0");

    console.log(`${hours}:${minutes}:${seconds} ${ampm}`);
}

setInterval(showTime, 1000);