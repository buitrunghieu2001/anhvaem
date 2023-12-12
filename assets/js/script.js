$(document).ready(function() {
    var B = $("body");
    var audio = $("#music")[0];
    audio.volume = 0.6;

    $('.snow').snowfall({
        shadow : true, 
        round : true,  
        flakeCount: 50,
        minSize: 1, 
        maxSize: 8,
        deviceorientation: true,
        maxSpeed: 3
    });

    $(".container .users .user").delay(200).animate({opacity: 1});
    $(".container .users .heart").delay(1000).animate({opacity: 1});
    $(".container .content h1").delay(2000).animate({opacity: 1});
    $(".container .launch-time").delay(2000).animate({opacity: 1});
    $("#days").delay(2400).animate({opacity: 1});
    $("#hours").delay(2600).animate({opacity: 1});
    $("#minutes").delay(2800).animate({opacity: 1});
    $("#seconds").delay(3000).animate({opacity: 1});
    
    B.delegate('.silent i', 'click', function() {
        var play = $(this).data('status');
        $(this).hide()
        if (play == "play") {
            audio.pause();
            $('.pause').show();
        } else {
            audio.play();
            $('.play').show();
        }
    })

    B.delegate('#btnMore', 'click', function() {
        alert("Em chịu khó đợi nhé :)) \nAnh đang cố gắng nghĩ nội dung.")
    })

    audio.play().then(function() {
        $('.pause').hide();
    }).catch(function(error) {
        $('.play').hide();
        console.log("Failed to start music:", error);
    });

    // Ngày, tháng - 1, năm, giờ, phút
    var date = new Date(2023, 7, 31, 22, 0).getTime();
    var x = setInterval(function() {
        let now = new Date().getTime();
        let distance = now - date;

        let years = Math.floor(distance / (1000 * 60 * 60 * 24 * 365));
        let days = Math.floor((distance % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24));
        let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((distance % (1000 * 60)) / 1000);

        let v = [years, days, hours, minutes, seconds];
        render(v);

        if (distance < 0) {
            clearInterval(x);
            let v = ["00", "00", "00", "00", "00"];
            render(v);
        }
    }, 1000);

    function render (p) {
        //$('#years').html(p[0]);
        $('#days').html(p[1]);
        $('#hours').html(p[2]);
        $('#minutes').html(p[3]);
        $('#seconds').html(p[4]);
    }
}); 
