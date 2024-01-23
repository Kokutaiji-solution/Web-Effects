function main() {
    const audio1 = new Audio();
    const audio2 = new Audio();
    const audio3 = new Audio();
    const audio4 = new Audio();

    const option1 = {

    }
    const option2 = {

    }

    clickSound();
    keyboardSound();
}

function clickSound(option) {
    document.addEventListener('mousedown', function (mouseEvent) {
        var tempSound = new Audio();
        if (mouseEvent.button == 0) {
            if (option.buttons.left) {
                tempSound.src = option.buttons.left.src;
            } else {
                tempSound.src = option.default.src;
            }
        } else if (mouseEvent.button == 1) {
            if (option.buttons.center) {
                tempSound.src = option.buttons.center.src;
            } else {
                tempSound.src = option.default.src;
            }
        } else if (mouseEvent.button == 2) {
            if (option.buttons.right) {
                tempSound.src = option.buttons.right.src
            } else {
                tempSound.src = option.default.src
            }
        }
        tempSound.play();
    })
}

function keyboardSound(option) {
    window.onkeydown = function (e) {
        const tempSound = new Audio();
        if (option.keys[e.key]) {
            tempSound.src = option.keys[e.key].src;
        } else {
            tempSound.src = option.default.src;
        }
        tempSound.currentTime = 0;
        tempSound.play();

    }
}

// クリックしたときにパーティクルを表示
function clickParticle() {

}

// キーを押したらパーティクルを表示
function keyboardParticle() {

}

main();
