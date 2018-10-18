function valForm() {
    var et = event.target.children;
    if (et.firstName.value === "") {
        message("You need to enter your first name!");
        return false;
    } if (et.lastName.value === "") {
        message("You need to enter your last name!");
        return false;
    } if (et.age.value === "") {
        message("You need to enter your age!");
        return false;
    } if (et.age.value == "") {
        message("Enter in a valid age");
        return false;
    } if (isNaN(et.age.value)) {
        message("Must input numbers");
        return false;
    }
    //return true to turn on and false to turn off page submission
    return true;
}

function message(m) {
    document.getElementById("output").innerHTML = m;
}