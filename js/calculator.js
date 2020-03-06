// Event Listener for load

window.addEventListener("load", init, false);

function init() {
    let $ = function (id) {
        return window.document.getElementById(id);

    }

    $('key_pad').addEventListener("click", enter); //Get elements from keypad

    $('equal').addEventListener("click", calculate); //get equal

    $('clear').addEventListener("click", clear); // added clear


}
function calculate() {
    result = window.document.getElementById("result");
    result.value = eval(result.value);
}

function enter(val) {
    result = window.document.getElementById("result");
    if (val.target.value === "=" || typeof (val.target.value) === 'undefined') { // fix the undifined in results when clicking off app
        result.value += '';
    } else {
        result.value += val.target.value;
        window.console.log(result.value);
    }
}

function clear() {
    result = window.document.getElementById("result");
    result.value = null;
}

