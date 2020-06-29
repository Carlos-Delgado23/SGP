(function () {
    let lastKey = 0; $("#phone").keydown(function () {
        lastKey = event.keyCode;
    }); $("#phone").on("input", function () {
        let dInput = this.value;
        if (!dInput.charAt(dInput.length - 1).match(/^\d+$/)) {
            let change = dInput.substring(0, dInput.length - 1);
            $("#phone").val(change);
        } else {
            foneFormattingFunction(dInput);
        }
    }); function foneFormattingFunction(input) {
        let phoneInputLength = input.length;
        let htmlInput = $("#phone"); switch (phoneInputLength) {
            case 1:
                htmlInput.val("(" + input);
                break;
            case 2:
                if (lastNumber === 8) {
                    htmlInput.val("");
                }
            case 4:
                if (lastKey === 8) {
                    console.log("made it here");
                    htmlInput.val(input.substring(0, 3))
                } else {
                    htmlInput.val(input + ")");
                }
                break;
            case 6:
                let lastNumber = input.charAt(5);
                htmlInput.val(input.substring(0, 5) + " " + lastNumber);
                break;
            case 10:
                let numberBeforeDash = input.charAt(9);
                htmlInput.val(input.substring(0, 9) + "-" + numberBeforeDash);
                break;
            case 15:
                console.log("Made it here");
                htmlInput.val(input.substring(0, 14));
                break;
        }
    }
})();