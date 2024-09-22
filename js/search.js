  document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form[action="search.html"]');
    const input = form.querySelector('input[name="query"]');
    
    form.addEventListener('submit', function (e) {
      e.preventDefault(); // Prevent the default form submission
      
      const query = input.value.trim().toLowerCase();
      const nameToPage = {
        "dr. shailendra singh": "blogpost1.html",
        "dinesh kumar": "blogpost2.html",
        "shailendra": "blogpost1.html",
        "dinesh": "blogpost2.html",
        "arup": "blogpost3.html",
        "sunil": "blogpost4.html",
        "imran": "blogpost5.html",
        "charles": "blogpost6.html",
        "rehan": "blogpost7.html",
        "sheldon": "blogpost8.html"
      };

      // Find the URL based on the query
      const url = nameToPage[query];
      
      if (url) {
        window.location.href = url; // Redirect to the found URL
      } else {
        alert("No match foundr.");
      }
    });
  });
