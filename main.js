// Acronym Lookup By Mrs.Parwin

// Button Event Listener
document.getElementById("search-btn").addEventListener("click", btnClicked);

function btnClicked() {
  // Get Search Input
  let name = document.getElementById("search-in").value.toLowerCase();

  // Test the  Search Name - chained
  if (name === "aamof") {
    document.getElementById(
      "output"
    ).innerHTML = `<h2>As a matter of fact</h2>`;
  } else if (name === "fomo") {
    document.getElementById(
      "output"
    ).innerHTML = `<h2>Fear of missing out</h2>`;
  } else if (name === "eoc") {
    document.getElementById(
      "output"
    ).innerHTML = `<h2>End of conversation </h2>`;
  } else if (name === "aap") {
    document.getElementById("output").innerHTML = `<h2>Always a pleasure </h2>`;
  } else if (name === "aar") {
    document.getElementById("output").innerHTML = `<h2>At any rate </h2>`;
  } else if (name === "aeap") {
    document.getElementById(
      "output"
    ).innerHTML = `<h2>As early as possible </h2>`;
  } else if (name === "gbtw") {
    document.getElementById("output").innerHTML = `<h2>Get back to work </h2>`;
  } else if (name === "hagd") {
    document.getElementById("output").innerHTML = `<h2>Have a good day </h2>`;
  } else {
    document.getElementById(
      "output"
    ).innerHTML = `<h2>Sorry don't know this acronym! </h2>`;
  }
}
