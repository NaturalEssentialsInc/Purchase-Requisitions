$(document).ready(function() {
  console.log("Ready!");
  const scriptURL = 'https://script.google.com/macros/s/AKfycby81mZNTga89qypvTVPjqWkoTbgQI7GvKE6pRBgxbm55PmHW2d-/exec'
  const form = document.forms['submit-to-google-sheet']
    
  form.addEventListener('submit', e => {
    e.preventDefault();
    
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => console.log('Success!', response), alert('Your purchase request has been successfully submitted!  If you requested an emailed receipt, please allow up to ten minutes for it to arrive in your inbox.'))
      .catch(error => alert('Error! Please re-submit your request!', error.message));

    $("#itemDescription").val("");
    $("#partNumber").val("");
    $("#quantity").val("");
    $("#needBy").val("");
    $("#allocatedTo").val("");
    $("#requestedBy").val("");
    $("#email").val("");
  })  

});