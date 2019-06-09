let wrap = $("#headingText");


function debounce(func, wait, immediate) {
    var timeout;
    return function () {
        var context = this, args = arguments;
        var later = function () {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
}

function moveheading() {

    wrap.addClass("headerAfter");

}

function reversemoveheading() {

    wrap.removeClass("headerAfter");

}


function smoothscroll() {

    $(".headingHolder").addClass("blur-me");
    $(".blackTransition").animate({top: "-=100vh"}, 1000)

}

function reversesmoothscroll() {


    $(".headingHolder").removeClass("blur-me");
    $(".blackTransition").animate({top: "+=100vh"}, 1000)

}


function focusletter() {

    $("#Email").animate({opacity: 0});
    $(".circle").animate({height: "150vw", width: "150vw"}, 800, function () {
        $(".container").html("");
        $(".circle").addClass("circle-after");
        $(".circle").animate({height: "100vh", width: "75vw"}, 600);
        $("#sample_letter").show()

    });
    $(".headingHolder").removeClass("blur-me");
    $(".headingHolder").addClass("black-backdrop");


}

$(".navbar").hide();
$("#sample_letter").hide()

function focusEmail() {
    $("#Mail").animate({opacity: 0});
    $(".circle2").animate({height: "150vw", width: "150vw"}, 800, function () {
        $(".container").html("");
        $(".circle2").addClass("circle2-after");
        $(".circle2").animate({height: "85vh", width: "75vw"}, 600);
        $(".navbar").show()

    });
    $(".headingHolder").removeClass("blur-me");
    $(".headingHolder").addClass("black-backdrop");

}

function removefocusEmail() {
    $(".circle2").animate({height: "150vw", width: "150vw"}, 800, function () {
        $(".container").html(
            `<div class="row d-flex flex-row justify-content-center">
            <div class="card col col-sm-3 mx-5 " id="Email">
                <div class="card-body">
                    <h1 class="card-title mainHeading Welcome">Email</h1>
                    <p class="card-text ">Some quick example text to build on the card title and make up the bulk of the
                        card's content.</p>
                </div>
            </div>

            <div class="card col col-sm-3 mx-5" id="Mail">
                <div class="card-body">
                    <h1 class="card-title mainHeading Welcome">Mail</h1>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the
                        card's content.</p>
                </div>
            </div>
        </div>`);
        $(".circle2").removeClass("circle2-after");
        $(".circle2").animate({height: "0", width: "0"}, 600);
        $(".navbar").hide();
        $("#sample_letter").hide()

    });

}

function removefocusletter() {

    $(".circle").animate({height: "150vw", width: "150vw"}, 800, function () {

        $(".container").html(
            `<div class="row d-flex flex-row justify-content-center">
            <div class="card col col-sm-3 mx-5 " id="Email">
                <div class="card-body">
                    <h1 class="card-title mainHeading Welcome">Email</h1>
                    <p class="card-text ">Some quick example text to build on the card title and make up the bulk of the
                        card's content.</p>
                </div>
            </div>

            <div class="card col col-sm-3 mx-5" id="Mail">
                <div class="card-body">
                    <h1 class="card-title mainHeading Welcome">Mail</h1>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the
                        card's content.</p>
                </div>
            </div>
        </div>`);
        $(".circle").removeClass("circle-after");
        $(".circle").animate({height: "0", width: "0"}, 600)
    });
    $(".headingHolder").addClass("blur-me");
    $(".headingHolder").removeClass("black-backdrop");
    $("#sample_letter").hide()


}

