
document.addEventListener('DOMContentLoaded', () => {
    const smileImage = document.getElementById('smile-image');
    console.log(smileImage);

    smileImage.addEventListener(
        'mousemove',
        (e) => {
            let x = e.offsetX;
            let y = e.offsetY;

            let boxWidth = smileImage.clientWidth;
            let boxHeight = smileImage.clientHeight;

            let moveX = (x - boxWidth / 2);
            let moveY = (y - boxHeight / 2);

            smileImage.style.transform = `translateX(${moveX}px) translateY(${moveY}px)`;
        }
    );

    smileImage.addEventListener(
        'mouseout',
        (e) => {
            smileImage.style.transform = ``;
        }
    );
})

