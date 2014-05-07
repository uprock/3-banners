$(function () {
    var options = {
            firstSlideInterval: 600,
            secondSlideInterval: 600,
            thirdSlideInterval: 600,
            forthSlideInterval: 600,
            fifthSlideInterval: 600,
            delayTime: 1000

        },
        sliderPeriod = 3 * options.firstSlideInterval + 2 * options.secondSlideInterval + 2 * options.thirdSlideInterval + 5 * options.delayTime + 3 * options.forthSlideInterval + 3 * options.fifthSlideInterval;
    var $gallery = $('.banner-3'),
        $items = $gallery.find('img');

    var doSlide = function () {
        var a = $items.first(),
            b = a.next(),
            c = b.next(),
            d = c.next(),
            e = d.next();
        a.css({"left": "-100%", 'opacity': '0'});
        b.css({"top": "-100%", 'opacity': '0'});
        c.css({"top": "100%", 'opacity': '0'});
        d.css({"left": "100%", 'opacity': '0'});
        e.css({'opacity': '0'});

        a.animate({left: 0, opacity: 1},
            options.firstSlideInterval, function () {
                a.delay(options.delayTime).animate({left: "100%", opacity: 0}, options.firstSlideInterval);
                b.delay(options.delayTime + options.firstSlideInterval).animate({top: 0, opacity: 1}, options.secondSlideInterval, function () {
                    b.delay(options.delayTime).animate({top: "100%", opacity: 0}, options.secondSlideInterval, function () {
                        c.animate({top: 0, opacity: 1}, options.thirdSlideInterval, function () {
                            c.delay(options.delayTime).animate({left: "-100%"}, options.thirdSlideInterval, function () {
                                d.animate({left: 0, opacity: 1}, options.forthSlideInterval, function () {
                                    d.delay(options.delayTime).animate({opacity: 0}, options.forthSlideInterval, function () {
                                        e.animate({opacity: 1}, options.fifthSlideInterval, function () {
                                            e.delay(options.delayTime).animate({opacity: 0}, options.fifthSlideInterval);
                                        });
                                    });
                                });
                            });
                        });
                    });
                });
            }
        )
        ;
    };

    doSlide();
    setInterval(function () {
        doSlide();
    }, sliderPeriod);
})
;