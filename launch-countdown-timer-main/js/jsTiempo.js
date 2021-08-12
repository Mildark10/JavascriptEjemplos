window.addEventListener('load', () => {
    const days = document.querySelector('.dia')
    const hours = document.querySelector('.hora')
    const minutes = document.querySelector('.min')
    const seconds = document.querySelector('.seg')

    let timeLeft = {
        d: 0,
        h: 0,
        m: 0,
        s: 0,
    }

    let totalSeconds;

    function init() {
        totalSeconds = Math.floor((new Date('11/09/2021') - new Date()) / 1000);
        setTimeLeft();
        let interval = setInterval(() => {
            if (totalSeconds < 0) {
                clearInterval(interval);
            }
            countTime();
        }, 1000);
    }

    function countTime() {
        if (totalSeconds > 0) {
            --timeLeft.s;
            if (timeLeft.m >= 0 && timeLeft.s < 0) {
                timeLeft.s = 59;
                --timeLeft.m;
                if (timeLeft.h >= 0 && timeLeft.m < 0) {
                    timeLeft.m = 59;
                    --timeLeft.h;
                    if (timeLeft.d >= 0 && timeLeft.h < 0) {
                        timeLeft.h = 23;
                        --timeLeft.d;
                    }
                }
            }
        }
        --totalSeconds;
        printTime();
    }

    function printTime() {
        animateFlip(days, timeLeft.d);
        animateFlip(hours, timeLeft.h);
        animateFlip(minutes, timeLeft.m);
        animateFlip(seconds, timeLeft.s);
    }

    function animateFlip(element, value) {
        const valueInDom = element.querySelector('.bottom-atras').innerText;
        const currentValue = value < 10 ? '0' + value : '' + value;

        if (valueInDom === currentValue) return;

        element.querySelector('.top-atras span').innerText = currentValue;
        element.querySelector('.bottom-atras span').innerText = currentValue;


        gsap.to(element.querySelector('.top'), 0.7, {
            rotationX: '-180deg',
            transformPerspective: 300,
            ease: Quart.easeOut,
            onComplete: function() {
                element.querySelector('.top').innerText = currentValue;
                element.querySelector('.bottom').innerText = currentValue;
                gsap.set(element.querySelector('.top'), { rotationX: 0 });
            }
        });

        gsap.to(element.querySelector('.top-atras'), 0.7, {
            rotationX: 0,
            transformPerspective: 300,
            ease: Quart.easeOut,
            clearProps: 'all'
        });

    }



    function setTimeLeft() {
        timeLeft.d = Math.floor(totalSeconds / (60 * 60 * 24));
        timeLeft.h = Math.floor(totalSeconds / (60 * 60) % 24);
        timeLeft.m = Math.floor(totalSeconds / (60) % 60);
        timeLeft.s = Math.floor(totalSeconds % 60);
    }

    init();
});