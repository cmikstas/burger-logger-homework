$(function()
{
    $("#newBurgerButton").on("click", function(event)
    {
        event.preventDefault();

        var newBurger =
        {
            burger_name: $("#newBurger").val().trim(),
        };
    
        $.ajax("/api/burgers",
        {
            type: "POST",
            data: newBurger
        }).then(function()
          {
                console.log("Added new burger");
                // Reload the page to get the updated list
                location.reload();
          }
        );
    });

})