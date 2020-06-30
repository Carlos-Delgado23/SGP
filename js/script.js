(function () {
    $("#phone").on("input", function () {
        if (event.inputType === "deleteContentBackward") {
            let change = backspace(this.value);
            $("#phone").val(change);
        } else {
            let dInput = this.value;
            if (!dInput.charAt(dInput.length - 1).match(/^\d$/)) {
                let change = dInput.substring(0, dInput.length - 1);
                $("#phone").val(change);
            } else {
                foneFormattingFunction(dInput);
            }
        }
    }); function foneFormattingFunction(input) {
        let phoneInputHtml = $("#phone"); switch (input.length) {
            case 1:
                phoneInputHtml.val("(" + input);
                break;
            case 4:
                phoneInputHtml.val(input + ")");
                break;
            case 6:
                let lastNumber = input.charAt(5);
                phoneInputHtml.val(input.substring(0, 5) + " " + lastNumber);
                break;
            case 10:
                if (input.indexOf(")") === -1) {
                    phoneInputHtml.val("(" + input.substring(0, 3) + ") " + input.substring(3, 6) + "-" + input.substring(6))
                } else {
                    let numberBeforeDash = input.charAt(9);
                    phoneInputHtml.val(input.substring(0, 9) + "-" + numberBeforeDash);
                }
                break;
            case 15:
                phoneInputHtml.val(input.substring(0, 14));
                break;
        }
    } function backspace(input) {
        switch (input.length) {
            case 1:
                input = "";
                break;
            case 4:
                input = input.substring(0, 3);
                break;
            case 6:
                input = input.substring(0, 5);
                break;
            case 10:
                input = input.substring(0, 9);
                break;
        }
        return input;
    } //$("#phone").on("paste", function () {
    //     event.preventDefault();
    // });
})();