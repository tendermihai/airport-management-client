function api(path, method, body) {
  const url = "http://localhost:8080" + path;

  const options = {
    method,

    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "X-Requested-With": "XMLHttpRequest",
    },
  };

  if (body !== null) {
    options.body = JSON.stringify(body);
  }

  return fetch(url, options);
}

async function getAllAirports() {
  let data = await api("/api/v1/airports/all", "GET", null);
  return data.json();
}

async function getSortedBy(field) {
  let airports = await api("/api/v1/airports/sort/" + field, "GET", null);

  return airports.json();
}

async function postAirport(airport) {
  let airportResponse = await api("/api/v1/airport/add", "POST", airport);

  return airportResponse.json();
}
