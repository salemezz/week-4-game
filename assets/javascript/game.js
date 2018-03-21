
$(document).ready(function() {
  var characters = ['Obi-Wan-Kenobi', 'Luke Skywalker', 'Darth Sidious', "Darth Maul"]

      $("#characterSelection").on("click", "obiButton", function() {
      // Inside the on-click event...
      $("#lukeButton").animate({ top: "-=200px" }, "normal");
      });



