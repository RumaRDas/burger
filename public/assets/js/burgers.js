// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
    $(".eatBtn").on("click", function(event) {
        console.log(this.id);
     let id = $(this).data("id");
      let eat = $(this).data("eat");
  
      let newEatState = {
      devoured: "true"
      };
  
      // Send the PUT request.
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: newEatState
      }).then(
        function() {
          console.log("changed burger to", eat);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    $(".create-form").on("submit", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
  
      let newBurger = {
        burger_name: $("#newBurger").val().trim(),
       devoured: 0
      };
  
      // Send the POST request.
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(
        function() {
          console.log("created new Burger");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  