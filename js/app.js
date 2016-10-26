$(function() {
  //All JS goes within these brackets

  //Registration calculator
  $("#registration-submit").click(function() {
    var studentsCreditsString = $("#credit-amount").val();
    var studentsCredits = parseInt(studentsCreditsString);

    if (studentsCredits >= 120) {
      $('#result').text('April 6 at 8:00 a.m.');
    } else if (studentsCredits >= 105 && studentsCredits <= 119) {
      $('#result').text('April 6 at 8:00 a.m.');
    } else if (studentsCredits >= 90 && studentsCredits <= 104) {
      $('#result').text('April 6 at 8:30 a.m.');
    } else if (studentsCredits >= 75 && studentsCredits <= 89) {
      $('#result').text('April 8 at 8:30 a.m.');
    } else if (studentsCredits >= 60 && studentsCredits <= 74) {
      $('#result').text('April 8 at 8:00 a.m.');
    } else if (studentsCredits >= 45 && studentsCredits <= 59) {
      $('#result').text('April 11 at 8:00 a.m.');
    } else if (studentsCredits >= 30 && studentsCredits <= 44) {
      $('#result').text('April 11 at 8:30 a.m.');
    } else if (studentsCredits >= 15 && studentsCredits <= 29) {
      $('#result').text('April 13 at 8:00 a.m.');
    } else if (studentsCredits >= 0 && studentsCredits <= 14) {
      $('#result').text('April 13 at 8:30 a.m.');
    }
  });

  //Bouncer
  $("#age").change(function() {
    var ageString = $("#age").val();
    var age = parseInt(ageString);

    if (age >= 21) {
      $("#bar-result").text("Ok, come on in.");
    } else {
      //Fix me! What happens when I'm under 21?
    }
  });

  //Grade
  $("#grade-submit").click(function() {
    var gradeString = $("#grade").val();

    $("#grade-result").text("Opps, I'm broken! Fix me.");
  });

  //Is your rent affordable?
});
