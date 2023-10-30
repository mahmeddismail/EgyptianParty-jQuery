$('.myIcon').click(function (e) {
    $('.myIcon').css({ "left": "268px", "top": "240px" })
    $('#main-nav').css({ "left": "0" })
    $('.closeIcon').css({ "display": "flex" })
})

$('.closeIcon').click(() => {
    $('.myIcon').css({ "left": "40px", "top": "240px" })
    $('#main-nav').css({ "left": "-250px" })
})

$('.singerName').click((e) => {

    const singerIndex = $(e.currentTarget).index('.singerName');
    const clickedElement = $('.singerContent').eq(singerIndex);
    console.log(clickedElement);
    $('.singerContent').not(clickedElement).slideUp(500);
    clickedElement.toggle(500)

})



let myDate = new Date('Tue Nov 07 2024 00:00:01')
// let myDate = new Date('Tue Aug 22 2023 01:31:31')
let sec = 1000;
let min = sec * 60;
let h = min * 60;
let days = h * 24;
let timer;

function countDown() {

    let now = new Date()

    let newDate = myDate - now
    if (newDate < 0) {
        clearInterval(timer);
        console.log("finished");
    }

    else {

        let dayy = Math.floor(newDate / days)
        let hour = Math.floor((newDate % days) / h)
        let minute = Math.floor((newDate % h) / min)
        let seconds = Math.floor((newDate % min) / sec)


        document.querySelector('.days').innerHTML = dayy + "D"
        document.querySelector('.hours').innerHTML = hour + "H"
        document.querySelector('.minutes').innerHTML = minute + "M"
        document.querySelector('.seconds').innerHTML = seconds + "S"
    }

    // console.log(newDate);   
}
timer = setInterval(countDown, 1000);





$('textarea').keydown(function () {


    let myLength = $(this).val().length

    if (myLength > 100) {
        $('.numCounter').text('');
        $('.exceededChars').text("You've Exceeded your characters limit");
        $('.exceededChars').css("color","var(--textColor)");
        $('.btn-Color').css({ "opacity": "0.6" });
    }
    else {
        $('.numCounter').text(100 - myLength);
        $('.exceededChars').text("characters left");
        $('.exceededChars').css("color","black");

        $('.btn-Color').css({ 'opacity': '1' });
    }
    console.log(myLength);

});

