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
    });

    function foneFormattingFunction(input) {
        let phoneInputHtml = $("#phone");
        switch (input.length) {
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
    };

    function backspace(input) {
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
    };

    // RANDOM ORDER LIL NAV GALLERY & FULL SIZE GALLERY //
    var lilNavGallery = $(".anchor-nav-img");
    var galleryImg = $(".gallery-img");

    for (var i = 0; i < lilNavGallery.length; i++) {
        var target = Math.floor(Math.random() * lilNavGallery.length - 1) + 1;
        var target2 = Math.floor(Math.random() * lilNavGallery.length - 1) + 1;

        lilNavGallery.eq(target).before(lilNavGallery.eq(target2));
        galleryImg.eq(target).before(galleryImg.eq(target2));
    };

    // MAY USE FUNCTION IN THE FUTURE //
    //$("#phone").on("paste", function () {
    //     event.preventDefault();
    // });

    function isNotEmpty(caller) {
        if (caller.val() == "") {
            caller.css('border', '1px solid red');
            return false;
        } else
            caller.css('border', '');

        return true;
    }
})();
