// https://www.w3schools.com/js/tryit.asp?filename=tryjs_validation_check
// https://stackoverflow.com/questions/195951/how-can-i-change-an-elements-class-with-javascript
// https://www.codexworld.com/add-timepicker-to-input-field-jquery-plugin/

let fName = "";
let fEmail = "";
let fTelephone = "";
let fExpert = "";
let fService = "";
let fTime = "";
let fDate = "";

function checkValidation() {
    getExpertService();
    var vName = validateName();
    var vEmail = validateEmail();
    var vTelephone = validateTelehone();
    var vTime = validateTime();
    var vDate = validateDate();
    var vCardName = validateCardName();
    var vCardNumber = validateCardNumber();
    var vCardExpirationDate = validateCardExpirationDate();
    var vCardCVV = validateCardCVV();
    if (vName == true && vEmail == true && vTelephone == true && vTime == true && vDate == true && vCardName == true && vCardNumber == true && vCardExpirationDate == true && vCardCVV == true) {
        alert("Your appointment has been succesfully scheduled.\n\n Name: "+fName+"\n Email: "+fEmail+"\n Telephone: "+fTelephone+"\n Expert: "+fExpert+"\n Service: "+fService+"\n Time: "+fTime+"\n Date: "+fDate);
        location.reload();
    } else {
        alert("Oops. Looks like the form was not filled in properly. Please check again.");
    }
}

function getExpertService() {
    fService = document.getElementById("service").value;
    fExpert = document.getElementById("expert").value;
}

function validateName() {
    var name = document.getElementById("name").value;
    let valid = true;
    if (name.length == 0) {
        valid = "Please enter your name."
    }
    if (valid == true) {
        document.getElementById("invalid-feedback-name").innerHTML = "";
        document.getElementById("name").className = "form-control";
        fName = name;
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
        valid = "Invalid email address. Must be under the form: username@server.domain"
    }
    if (valid == true) {
        document.getElementById("invalid-feedback-email").innerHTML = "";
        document.getElementById("email").className = "form-control";
        fEmail = email;
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
        valid = "Invalid phone number. Must be under the format: XXXXXXXXXX"
    }
    if (valid == true) {
        document.getElementById("invalid-feedback-telephone").innerHTML = "";
        document.getElementById("telephone").className = "form-control";
        fTelephone = telephone;
    } else {
        document.getElementById("invalid-feedback-telephone").innerHTML = valid;
        document.getElementById("telephone").className = "form-control red";
    }
    return valid;
}

function validateTime() {
    var time = document.getElementById("time").value;
    let valid = true;
    if (time.length == 0) {
        valid = "Please select a time for the appointment."
    }
    if (valid == true) {
        document.getElementById("invalid-feedback-time").innerHTML = "";
        document.getElementById("time").className = "form-control";
        fTime = document.getElementById("time").value;
    } else {
        document.getElementById("invalid-feedback-time").innerHTML = valid;
        document.getElementById("time").className = "form-control red";
    }
    return valid;
}

function validateDate() {
    var dateInput = document.getElementById("dateInput").value;
    let valid = true;
    if (dateInput.length == 0) {
        valid = "Please select a date for the appointment."
    }
    if (valid == true) {
        document.getElementById("invalid-feedback-date").innerHTML = "";
        document.getElementById("dateInput").className = "form-control";
        fDate = document.getElementById("dateInput").value;
    } else {
        document.getElementById("invalid-feedback-date").innerHTML = valid;
        document.getElementById("dateInput").className = "form-control red";
    }
    return valid;
}

function validateCardName() {
    var cardname = document.getElementById("cardname").value;
    let valid = true;
    if (cardname.length == 0) {
        valid = "Please enter the name on the card."
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
        valid = "Invalid card number. Must be under the format: XXXXXXXXXXXXXXXX"
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
        valid = "Invalid expiration date. Must be under the format: XX/XX or XXXX"
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
        valid = "Invalid CVV number. Must be under the format: XXX"
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

// Using date restrictions on datepicker
// Document of datepicker is here: https://api.jqueryui.com/datepicker/
// The following code shows how to set specific dates to exclude, as well as Sundays (Day 0)
// Make sure in your version that you associate Days to remove with Experts (e.g. John doesn't work Mondays)
var unavailableDates = ["06/29/2020", "07/07/2020", "07/10/2020"];
const setDateFormat = "mm/dd/yy";

function disableDates(date) {
    var expert = document.getElementById("expert").value;
    // Sunday is Day 0, disable all Sundays
    if (date.getDay() === 0)
        return [false];
    // Saturday is Day 6, disable all Saturdays
    if (date.getDay() === 6)
        return [false];
    // Hillary does not work Fridays
    if (expert == "Doctor Hillary Smith")
        if (date.getDay() === 5)
            return [false];
    // Kevin does not work Wednesdays
    if (expert == "Doctor Kevin Plazzo")
        if (date.getDay() === 3)
            return [false];
    // Ainsly does not work Tuesdays
    if (expert == "Doctor Ainsly Williams")
        if (date.getDay() === 2)
            return [false];
    var string = jQuery.datepicker.formatDate(setDateFormat, date);
    return [unavailableDates.indexOf(string) === -1]
}

// HERE, JQuery "LISTENING" starts
$(document).ready(function () {
    // To change the style of the calender, look in jqueryui.com, under Themes, in the ThemeRoller Gallery
    // You can try different themes (the names are under the calendars) / This is Excite Bike
    // To use a different theme you must include its css in your HTML file.
    // The one I included in my HTML is the Excite Bike, but you can try others
    // Also, here is a good tutorial for playing with the datepicker in https://webkul.com/blog/jquery-datepicker/
    // Datepicker is also documented as one of the widgets here: https://api.jqueryui.com/category/widgets/
    $("#dateInput").datepicker({
        dateFormat: setDateFormat,
        // no calendar before June 1rst 2020
        minDate: '1',
        maxDate: '+5M',
        // used to disable some dates
        beforeShowDay: $.datepicker.noWeekends,
        beforeShowDay: disableDates
    });

    // https://jqueryui.com/tooltip/
    // The class "highlight" used here is predefined in JQuery UI
    // the message of the tooltip is encoded in the input (in the HTML file)
    $("#cardnumber").tooltip({
        classes: {
            "ui-tooltip": "highlight"
        }
    });
    $("#cardcvv").tooltip({
        classes: {
            "ui-tooltip": "highlight"
        }
    });
    $("#cardname").tooltip({
        classes: {
            "ui-tooltip": "highlight"
        }
    });

    $("#time").timepicker({
        timeFormat: 'h:mm p',
        interval: 30,
        minTime: '10:00am',
        maxTime: '6:00pm',
        defaultTime: '',
        startTime: '10:00am',
        dynamic: true,
        dropdown: true,
        scrollbar: true
    });
});