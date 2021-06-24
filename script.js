// https://www.w3schools.com/js/tryit.asp?filename=tryjs_validation_check

function checkValidation() {
    var vName = validateName();
    var vEmail = validateEmail();
    var vTelephone = validateTelehone();
    var vCardName = validateCardName();
    var vCardNumber = validateCardNumber();
    var vCardExpirationDate = validateCardExpirationDate();
    var vCardCVV = validateCardCVV();
    if (vName == true && vEmail == true && vTelephone == true && vCardName == true && vCardNumber == true && vCardExpirationDate == true && vCardCVV == true) {
        alert("Your appointment has been succesfully scheduled. You will receive an email notification shortly.");
        location.reload();
    } else {
        alert("Oops. Looks like the form was not filled in properly. Please check again.");
    }
}

function validateName() {
    var name = document.getElementById("name").value;
    let valid = true;
    if (name.length == 0) {
        valid = "* Please enter your name."
    }
    if (valid == true) {
        document.getElementById("invalid-feedback-name").innerHTML = "";
        document.getElementById("name").className = "form-control";
    } else {
        document.getElementById("invalid-feedback-name").innerHTML = valid;
        document.getElementById("name").className = "form-control red";
    }
    return valid;
}

function validateEmail() {
    var eRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    var email = document.getElementById("email").value;
    let valid = true;
    if (eRegex.test(email) == false) {
        valid = "* Invalid email address. Must be under the form: username@server.domain"
    }
    if (valid == true) {
        document.getElementById("invalid-feedback-email").innerHTML = "";
        document.getElementById("email").className = "form-control";
    } else {
        document.getElementById("invalid-feedback-email").innerHTML = valid;
        document.getElementById("email").className = "form-control red";
    }
    return valid;
}

function validateTelehone() {
    var pRegex = /^\(?([0-9]{3})\)?[-.●]?([0-9]{3})[-.●]?([0-9]{4})$/;
    var telephone = document.getElementById("telephone").value;
    let valid = true;
    if (pRegex.test(telephone) == false) {
        valid = "* Invalid phone number. Must be under the form: XXX XXX XXXX or XXXXXXXXXX"
    }
    if (valid == true) {
        document.getElementById("invalid-feedback-telephone").innerHTML = "";
        document.getElementById("telephone").className = "form-control";
    } else {
        document.getElementById("invalid-feedback-telephone").innerHTML = valid;
        document.getElementById("telephone").className = "form-control red";
    }
    return valid;
}

function validateTime() {
    
}

function validateDate() {

}

function validateCardName() {
    var cardname = document.getElementById("cardname").value;
    let valid = true;
    if (cardname.length == 0) {
        valid = "* Please enter the name on the card."
    }
    if (valid == true) {
        document.getElementById("invalid-feedback-cardname").innerHTML = "";
        document.getElementById("cardname").className = "form-control";
    } else {
        document.getElementById("invalid-feedback-cardname").innerHTML = valid;
        document.getElementById("cardname").className = "form-control red";
    }
    return valid;
}

function validateCardNumber() {
    var cRegex = /^\(?([0-9]{4})\)?[-.●]?([0-9]{4})[-.●]?([0-9]{4})[-.●]?([0-9]{4})$/;
    var cardnumber = document.getElementById("cardnumber").value;
    let valid = true;
    if (cRegex.test(cardnumber) == false) {
        valid = "* Invalid card number. Must be under the form: XXXXXXXXXXXXXXXX"
    }
    if (valid == true) {
        document.getElementById("invalid-feedback-cardnumber").innerHTML = "";
        document.getElementById("cardnumber").className = "form-control";
    } else {
        document.getElementById("invalid-feedback-cardnumber").innerHTML = valid;
        document.getElementById("cardnumber").className = "form-control red";
    }
    return valid;
}

function validateCardExpirationDate() {
    var cRegex = /^(0[1-9]|1[0-2])\/?([0-9]{4}|[0-9]{2})$/;
    var cardexpirationdate = document.getElementById("cardexpirationdate").value;
    let valid = true;
    if (cRegex.test(cardexpirationdate) == false) {
        valid = "* Invalid expiration date. Must be under the form: XX/XX or XXXX"
    }
    if (valid == true) {
        document.getElementById("invalid-feedback-cardexpirationdate").innerHTML = "";
        document.getElementById("cardexpirationdate").className = "form-control";
    } else {
        document.getElementById("invalid-feedback-cardexpirationdate").innerHTML = valid;
        document.getElementById("cardexpirationdate").className = "form-control red";
    }
    return valid;
}

function validateCardCVV() {
    var cRegex = /^[0-9]{3}$/;
    var cardcvv = document.getElementById("cardcvv").value;
    let valid = true;
    if (cRegex.test(cardcvv) == false) {
        valid = "* Invalid CVV number. Must be under the form: XXX"
    }
    if (valid == true) {
        document.getElementById("invalid-feedback-cardcvv").innerHTML = "";
        document.getElementById("cardcvv").className = "form-control";
    } else {
        document.getElementById("invalid-feedback-cardcvv").innerHTML = valid;
        document.getElementById("cardcvv").className = "form-control red";
    }
    return valid;
}















// Function to verify that the phone number is correct.
// Here, I validate for (12345), but you have to change that for a phone validation
// Tutorials on Regular expressions
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions
// https://flaviocopes.com/javascript-regular-expressions/
// Regular expressions can get complex, you can think in terms of a series of characters
// or numbers
function validatePhone(txtPhone) {
    var a = document.getElementById(txtPhone).value;
    // This filter asks for something like (12345), so parentheses with any number (at least 1)
    // of digits
    var filter = /^(\([-+]?[0-9]+)\)$/;
    if (filter.test(a)) {
        return true;
    } else {
        return false;
    }
}

// Using date restrictions on datepicker
// Document of datepicker is here: https://api.jqueryui.com/datepicker/
// The following code shows how to set specific dates to exclude, as well as Sundays (Day 0)
// Make sure in your version that you associate Days to remove with Experts (e.g. John doesn't work Mondays)
var unavailableDates = ["06/29/2020", "07/07/2020", "07/10/2020"];
const setDateFormat = "mm/dd/yy";

function disableDates(date) {
    // Sunday is Day 0, disable all Sundays
    if (date.getDay() === 0)
        return [false];
    var string = jQuery.datepicker.formatDate(setDateFormat, date);
    return [unavailableDates.indexOf(string) === -1]
}


// HERE, JQuery "LISTENING" starts
$(document).ready(function () {

    // phone validation, it calls validatePhone
    // and also some feedback as an Alert + putting a value in the input that shows the format required
    // the "addClass" will use the class "error" defined in style.css and add it to the phone input
    // The "error" class in style.css defines yellow background and red foreground
    $("#phone").on("change", function () {
        if (!validatePhone("phone")) {
            alert("Wrong format for phone");
            $("#phone").val("(xxxx)");
            $("#phone").addClass("error");
        } else {
            $("#phone").removeClass("error");
        }
    });

    // To change the style of the calender, look in jqueryui.com, under Themes, in the ThemeRoller Gallery
    // You can try different themes (the names are under the calendars) / This is Excite Bike
    // To use a different theme you must include its css in your HTML file.
    // The one I included in my HTML is the Excite Bike, but you can try others

    // Also, here is a good tutorial for playing with the datepicker in https://webkul.com/blog/jquery-datepicker/
    // Datepicker is also documented as one of the widgets here: https://api.jqueryui.com/category/widgets/
    $("#dateInput").datepicker({
        dateFormat: setDateFormat,
        // no calendar before June 1rst 2020
        minDate: new Date('06/01/2020'),
        maxDate: '+4M',
        // used to disable some dates
        beforeShowDay: $.datepicker.noWeekends,
        beforeShowDay: disableDates
    });


    // Look at the different events on which an action can be performed
    // https://www.w3schools.com/jquery/jquery_events.asp
    // Here, we put
    $("#debit").on("mouseenter", function () {
        $("#debit").addClass("showInput");
    });

    $("#debit").on("mouseleave", function () {
        $("#debit").removeClass("showInput");
    });

    // https://jqueryui.com/tooltip/
    // The class "highlight" used here is predefined in JQuery UI
    // the message of the tooltip is encoded in the input (in the HTML file)
    $("#debit").tooltip({
        classes: {
            "ui-tooltip": "highlight"
        }
    });
});