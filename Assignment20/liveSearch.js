$(document).ready(function() {
  const apiUrl = "http://localhost:3001/products";

  $("#searchBox").on("keyup", function() {
    const query = $(this).val().trim();

    // Show loading indicator
    $("#loading").show();
    $("#results").empty();

    $.ajax({
      url: apiUrl,
      method: "GET",
      data: { q: query }, // JSON Server supports ?q=value
      success: function(data) {
        $("#loading").hide();

        if(data.length === 0) {
          $("#results").html('<div class="no-results">No products found</div>');
        } else {
          data.forEach(product => {
            const html = `
              <div class="product">
                <img src="${product.image}" alt="${product.name}">
                <div>
                  <strong>${product.name}</strong><br>
                  ₹${product.price}
                </div>
              </div>
            `;
            $("#results").append(html);
          });
        }
      },
      error: function() {
        $("#loading").hide();
        $("#results").html('<div class="no-results">Error fetching products</div>');
      }
    });
  });
});
