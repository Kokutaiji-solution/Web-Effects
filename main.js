function main() {
    const option1 = {
        default: new Audio("./sounds/mouse1.mp3"),
        buttons: {}
    }
    const option2 = {
        default: new Audio("./sounds/key1.mp3"),
        keys: {
            " ": new Audio("./sounds/mouse1.mp3"),
        }
    }

    clickSound(option1);
    keyboardSound(option2);
}

// クリックしたら音を鳴らす
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

// キーを押したら音を鳴らす
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


main()