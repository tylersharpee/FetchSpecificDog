function imageTemplate(url) {
  $('.images').html(`<img src='${url}'>`);
}
function incorrectInput() {
  throw alert('No results found. Please enter a different Breed');
}
function fetchDogs(request) {
  fetch(`https://dog.ceo/api/breed/${request}/images/random`)
    .then(response => {
      if(response.ok) {return response.json();}
      else {incorrectInput();}
    })
    .then(responseJson => imageTemplate(responseJson.message))
}
function getInput() {
  $('form').submit(event => {
    event.preventDefault();
    const request = $('#response').val();
    fetchDogs(request);
    $('#response').val('');
  });
}
function main() {
  getInput();
}
$(main);