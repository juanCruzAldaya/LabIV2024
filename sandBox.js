const apiUrl = "https://api.agify.io?name=leon"



fetch(apiUrl)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    console.log(data); // Handle the data from the API
  })

  .catch(error => {
    console.error('There was a problem with the fetch operation:', error);
  });
  