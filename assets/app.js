$(document).ready(function() {
  console.log("Ready!");

  const scriptURL = 'https://script.google.com/macros/s/AKfycby81mZNTga89qypvTVPjqWkoTbgQI7GvKE6pRBgxbm55PmHW2d-/exec'
  const form = document.forms['submit-to-google-sheet']

  // $("#submit").on("click", function(e) {
  // 	e.preventDefault();
  // 	var itemDescription = $("#itemDescription").val().trim();
  // 	var partNumber = $("#partNumber").val().trim();
  // 	var quantity = $("#quantity").val().trim();
  // 	var needBy = $("#needBy").val().trim();
  // 	var allocatedTo = $("#allocatedTo").val().trim();
  // 	var requestedBy = $("#requestedBy").val().trim();

  // 	console.log("item description: " + itemDescription +
  // 							"\npart number: " + partNumber +
  // 							"\nquantity: " + quantity +
  // 							"\nneed by: " + needBy +
  // 							"\nallocated to: " + allocatedTo +
  // 							"\nrequested by: " + requestedBy);

  // });    
  form.addEventListener('submit', e => {
    e.preventDefault();
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => console.log('Success!', response))
      .catch(error => console.error('Error!', error.message));

    $("#itemDescription").val("");
    $("#partNumber").val("");
    $("#quantity").val("");
    $("#needBy").val("");
    $("#allocatedTo").val("");
    $("#requestedBy").val("");
  })  

});