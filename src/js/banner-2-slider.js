$(function () {
    var options = {
            firstSlideInterval: 2100,
            secondSlideInterval: 1000,
            thirdSlideInterval: 500,
            delayTime: 1000

        },
        sliderPeriod = options.firstSlideInterval + options.secondSlideInterval + options.thirdSlideInterval + options.delayTime;
    var $gallery = $('.banner-2'),
        $items = $gallery.find('img');

    var doSlide = function () {
        var a = $items.first(),
            b = $items.last();
        a.css({"left": "100%", 'opacity': '0', height: '50%'});
        b.css({"left": "-100%", 'opacity': '0'});

        a.animate({
                left: 0,
                opacity: 1,
                height: '100%'
            },
            options.firstSlideInterval,
            function () {
                a.animate({opacity: 0});
                b.animate({
                        left: 0,
                        opacity: 1
                    },
                    options.secondSlideInterval,
                    function () {
                        b.delay(options.delayTime).animate({
                            opacity: 0
                        },
                        options.thirdSlideInterval)
                    });
            });
    };

    doSlide();
    setInterval(function () {
        doSlide();
    }, sliderPeriod);
});