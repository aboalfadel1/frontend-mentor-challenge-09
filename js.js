(function() {
    const second = 1000,
        minute = second * 60,
        hour = minute * 60,
        day = hour * 24;

    let birthday = "Sep 9, 2021 00:00:00",
        countDown = new Date(birthday).getTime(),
        x = setInterval(function() {

            let now = new Date().getTime(),
                distance = countDown - now;

            document.getElementById("days").innerText = Math.floor(distance / (day)),

                document.getElementById("hour").innerText = Math.floor((distance % (day)) / (hour)),
                document.getElementById("min").innerText = Math.floor((distance % (hour)) / (minute)),
                document.getElementById("sec").innerText = Math.floor((distance % (minute)) / second);
            if (document.getElementById("sec").innerText < 10) { document.getElementById("sec").innerText = "0" + Math.floor((distance % (minute)) / second); }
            if (document.getElementById("days").innerText < 10) { document.getElementById("days").innerText = "0" + Math.floor(distance / (day)) }
            if (document.getElementById("min").innerText < 10) { document.getElementById("min").innerText = "0 " + Math.floor((distance % (hour)) / (minute)); }
            if (document.getElementById("hour").innerText < 10) { document.getElementById("hour").innerText = "0" + Math.floor((distance % (day)) / (hour)); }

        }, 0)
}());