// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
    $(".create-form").on("submit", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
      let newBurger = {
      burger_name: $("#newBg").val().trim(),
       devoured: 0
      };
  
      // Send the POST request.
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(
        function() {
          console.log("created new Burger", newBurger);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    })

    $(".change-devour").on("click", function(event) {
      let newDevouredState = {
    devoured: "true"   
    };
      $.ajax(`/api/burgers/${this.id}`, {
      type: "PUT",
      data: newDevouredState
    }).then(
      function() {
        console.log("changed burger to");
        // Reload the page to get the updated list
        location.reload();
      });
  });
  
    $(".delete-burger").on("click", function(event) {
  //let id = $(this).data("id");
      // Send the DELETE request.
      event.preventDefault();
      $.ajax(`/api/burgers/${this.id}`, {
        type: "DELETE",
      }).then(
        function() {
          console.log("deleted burger");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  });