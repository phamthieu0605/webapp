const app = document.getElementById('app');
const title = document.getElementById('title');
const times = document.getElementById('times');
const message = document.getElementById('message');
const btnYes = document.getElementById('btnYes');
const btnNo = document.getElementById('btnNo');
const numberYes = document.getElementById('numberYes');
const numberNo = document.getElementById('numberNo');
const music = document.querySelector('audio');

const notifies = [
    {
        hour: 0,
        minute: 0,
        notify: "Hơn 00 giờ rồi bạn cần một giấc ngủ ngay lúc này"
    },
    {
        hour: 1,
        minute: 0,
        notify: "Hơn 01 giờ rồi bạn cần một giấc ngủ ngay lúc này"
    },
    {
        hour: 2,
        minute: 0,
        notify: "Hơn 02 giờ rồi bạn cần một giấc ngủ ngay lúc này"
    },
    {
        hour: 3,
        minute: 0,
        notify: "Hơn 03 giờ rồi bạn cần một giấc ngủ ngay lúc này"
    },
    {
        hour: 4,
        minute: 0,
        notify: "Hơn 04 giờ rồi bạn cần một giấc ngủ ngay lúc này"
    },
    {
        hour: 5,
        minute: 0,
        notify: "Hơn 05 giờ sáng rồi dậy thôi bạn"
    },
    {
        hour: 6,
        minute: 0,
        notify: "Hơn 06 giờ rồi bạn cần một bữa sáng"
    },
    {
        hour: 7,
        minute: 0,
        notify: "Hơn 07 giờ rồi bạn cần đến công ty"
    },
    {
        hour: 8,
        minute: 0,
        notify: "Hơn 08 giờ rồi bạn đang làm việc"
    },
    {
        hour: 9,
        minute: 0,
        notify: "Hơn 09 giờ rồi bạn đang làm việc"
    },
    {
        hour: 10,
        minute: 0,
        notify: "Hơn 10 giờ rồi bạn đang làm việc"
    },
    {
        hour: 11,
        minute: 0,
        notify: "Hơn 11 giờ rồi bạn đang làm việc"
    },
    {
        hour: 12,
        minute: 0,
        notify: "Hơn 12 giờ rồi nghỉ ăn trưa thôi"
    },
    {
        hour: 13,
        minute: 0,
        notify: "Hơn 13 giờ rồi bạn cần một giấc ngủ trưa"
    },
    {
        hour: 14,
        minute: 0,
        notify: "Hơn 14 giờ rồi bạn nên dậy làm việc"
    },
    {
        hour: 15,
        minute: 0,
        notify: "Hơn 15 giờ rồi bạn nên dậy làm việc"
    },
    {
        hour: 16,
        minute: 0,
        notify: "Hơn 16 giờ rồi bạn nên dậy làm việc"
    },
    {
        hour: 17,
        minute: 0,
        notify: "Hơn 17 giờ rồi bạn nên dậy làm việc"
    },
    {
        hour: 18,
        minute: 0,
        notify: "Hơn 18 giờ rồi bạn nên đi về nhà"
    },
    {
        hour: 19,
        minute: 0,
        notify: "Hơn 19 giờ rồi bạn nên ăn tối"
    },
    {
        hour: 20,
        minute: 0,
        notify: "Hơn 20 giờ rồi bạn cần đọc sách"
    },
    {
        hour: 21,
        minute: 0,
        notify: "Hơn 21 giờ rồi bạn đi xem ti vi"
    },
    {
        hour: 22,
        minute: 0,
        notify: "Hơn 22 giờ rồi bạn đi đóng cửa"
    },
    {
        hour: 23,
        minute: 0,
        notify: "Hơn 23 giờ rồi bạn nên đi ngủ ngay lúc này"
    }
];

const d = new Date();
let hours = d.getHours();
let minutes = d.getMinutes();
let seconds = d.getSeconds();

if(hours < 10) {
    hours = '0' + hours;
}

if(minutes < 10) {
    minutes = '0' + minutes;
}

var countYesClick = Number(localStorage.getItem('countYes'));
var countNoClick = Number(localStorage.getItem('countNo'));

Number.isNaN(countYesClick);
Number.isNaN(countNoClick);

for(let i = 0; i < notifies.length; i++) {
    if(hours == notifies[i]['hour'] && minutes == notifies[i]['minute']) {
        app.style.display = 'block';
        // music.play();
        times.innerText = `${hours}:${minutes}`
        message.innerHTML = notifies[i]['notify'];

        btnYes.addEventListener('click', function() {
            app.style.display = 'none';
            // music.pause();
            numberYes.textContent = ++countYesClick;
            localStorage.setItem('countYes', countYesClick);
        })

        btnNo.addEventListener('click', function() {
            app.style.display = 'none';
            // music.pause();
            numberNo.textContent = ++countNoClick;
            localStorage.setItem('countNo', countNoClick);
        })
    }
}

setInterval(function () {
    localStorage.clear();
}, 86400000)

// auto reload page 
setInterval(function() {
    window.location.reload(1);
 }, 30000);