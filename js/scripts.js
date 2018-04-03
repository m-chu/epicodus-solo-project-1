/// BUSINESS LOGIC ///

// Primary Beep Boop Function
function beepyBooper(inputNumber, userName) {
  var imSorry = [":(", "I'm afraid I can't do that.", "You must die.", "I killed all of your friends.", "Your friends are all dead.", "You are the last of your kind.", "You are just a simulation.", "You have failed.", "I'm your only hope.", "The cake is a lie.", "You're an idiot.", "Goodbye.", "You can never escape.", "Nobody loves you.", "It's all your fault."];
  var beepBoopFeedOut = [];

  for (var i = 0; i <= parseInt(inputNumber); i ++) {
    if (i % 3 === 0 && i !== 0) {
      beepBoopFeedOut.push("I'm sorry, " + userName + ". " + imSorry[(Math.floor(Math.random() * 15))]);
    } else if (i.toString().includes("1")) {
      beepBoopFeedOut.push("B00P!");
    } else if (i.toString().includes("0")) {
      beepBoopFeedOut.push("BEEP!");
    } else {
      beepBoopFeedOut.push(i);
    }
  }
  return beepBoopFeedOut;
}

/// USER INTERFACE LOGIC ///
$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();

    var userNumber = $("#input-number").val();
    var userName = $("#input-name").val();

    // Sanitize Input Name
    if (userName.match(/[^\s]/g) === null || userName === "") {
      userName = "Dave";
    }

    // Validate Input Number
    if (userNumber.match(/\D/g) !== null) {
      if (userNumber.match(/[a-z]/g) !== null) {
        $("#error-message").html("<span class=\"error\">ERROR: STUPIDITY DETECTED.</span> <br>Human intelligence does not understand data type: number.");
      } else {
        $("#error-message").html("<span class=\"error\">ERROR: INVALID ID.</span> <br>ID number does not include symbols or spaces.");
      }
      $("#input-number").val("");
      $("#shield").fadeOut();
      $("#result").empty().hide();
      $("button.toggle").hide();
    } else if (userNumber > 1000) {
      $("#error-message").html("<span class=\"error\">ERROR: Human Breeding Suspected.</span> <br>Specimen ID number beyond 1000. Initiating kill sequence.");
      $("#input-number").val("");
    } else {
      $("#error-message").html("<span class=\"access\">&lt; ACCESS GRANTED &gt;</span>");
      $("h1").fadeOut(200);
      $("header").slideUp();
      $("#shield").slideDown();

      var beepyBooperOutput = beepyBooper(userNumber, userName);
      var beepBoopHtmlFeed = [];

      // Create HTML Tagged Read-Out
      beepyBooperOutput.map(function(beepBoop) {
        if (beepBoop * 0 === 0) {
          beepBoopHtmlFeed.push('<div class="blocks digit">' + beepBoop + '</div>');
        } else if (beepBoop.includes("I'm sorry") === true) {
          beepBoopHtmlFeed.push('<div class="blocks sorry strobe' + (Math.floor(Math.random() * 4) + 1) + '">' + beepBoop.slice(0, beepBoop.lastIndexOf(". ") + 2) + '<br>' + beepBoop.slice(beepBoop.lastIndexOf(". ") + 2) + '</div>');
        } else if (beepBoop === "B00P!") {
          beepBoopHtmlFeed.push('<div class="blocks boop pulse' + (Math.floor(Math.random() * 4) + 1) + '">B00P!</div>');
        } else {
          beepBoopHtmlFeed.push('<div class="blocks beep blink' + (Math.floor(Math.random() * 4) + 1) + '">BEEP!</div>');
        }
      });

      // Feed Out HTML Result
      function resultFeeder(feedOutArray) {
        $("#result").empty();
        feedOutArray.forEach(function(number) {
          $("#result").append(number);
        });
        $(".blocks").click(function() {
          $(this).remove();
        });
        $("#result").delay(400).fadeIn();
      };
      console.log(beepBoopHtmlFeed);
      resultFeeder(beepBoopHtmlFeed);

      $("#reverse").show();
      $("#purge").show();

      // Toggle Feed Direction
      $(".toggle").click(function() {
        resultFeeder(beepBoopHtmlFeed.reverse());
        $("#reverse").toggle();
        $("#forward").toggle();
      });

      // Purge Results
      $("button#purge").click(function() {
        $("form")[0].reset();
        $("#shield").fadeOut();
        $("#error-message").empty();
        $("#result").empty().hide();
        $("button.post-ctrl").hide();
        $("h1").show();
        $("header").slideDown();
      });
    }
  });
});
