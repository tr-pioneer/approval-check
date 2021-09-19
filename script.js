document.getElementById("calculate").onclick = function () {

    let grade_1 = parseFloat(document.getElementById("grade1").value);
    let grade_2 = parseFloat(document.getElementById("grade2").value);
    let absenceRate = parseFloat(document.getElementById("absences").value);
    let average = parseFloat((grade_1+grade_2)/2);
    let totalClasses = 20;
    let presence = 100 - ((absenceRate/totalClasses)*100);

    if (document.getElementById("grade1").value == false || document.getElementById("grade2").value == false || document.getElementById("absences").value == false) {
        document.getElementById("result").innerHTML = "No value has been provided!";
    } else if (average < 6.5 && presence < 70 ) {
        document.getElementById("result").innerHTML = "You have failed because of low minimum grade and low presence rate.";
    } else if ( average < 6.5 ) {
        document.getElementById("result").innerHTML = "You have failed failed because of the low average grade.";
    } else if (presence < 70) {
        document.getElementById("result").innerHTML = "The total presence rate is below minimum required (70%). You have failed.";
    } else {
        document.getElementById("result").innerHTML = "Congrats! You have been approved.";
    }
}
