
function create_url(query) {
  //THIS FUNCTION SHOULD RETURN THE CONCATENATED URL (E.G. Adding all the parts together)
  var part_one = 'https://api.nytimes.com/svc/search/v2/articlesearch.json'
  var part_two = '?api-key=412adc5635b142828b22fc30c8769dd6'
  var part_three = '&q=';
  return query;
}

function get_headline_and_url(response){
  //this function should look through the first 10 and append them to the div with id=info
  //this function returns nothing
  //HINT 1: var headline = response.response.docs[i].headline.main;
  //HINT 2: var link = response.response.docs[i].web_url;
}

function is_input_valid(input){
  return true;
}

$(document).ready(function() {
    $('#search').click(function() {
        var query_string = $('#query').val();
        var is_valid = is_input_valid(query_string);
        if(is_valid == true){
          var url = create_url(query_string);
          $.getJSON(url, function(response) {
            get_headline_and_url(response);
          }); 
          }
      else{
       alert("Please enter a valid string");
      }
    });
});