async function home() {
  let data = await getAllAirports();
  attachCards(data);
}

function createCard(airport) {
  let section = document.createElement("section");

  section.innerHTML = `
  
  <div class="card mb-3" style="max-width: 540px;">
  <div class="row g-0">
      <div class="col-md-8">
          <div class="card-body">
              <h5 class="card-title">${airport.name}</h5>
              <p class="id">ID: ${airport.id}</p>
              <p class="name">Name: ${airport.name}</p>
              <p class="code">Code: ${airport.code}</p>
              <p class="municipality">Municipality: ${airport.municipality}</p>
              <p class="elevation">Elevation: ${airport.elevation}</p>
              <p class="region-code">Region-code: ${airport.region_code}</p>
          </div>
      </div>
  </div>
</div>
  
  `;

  return section;
}

function attachCards(airports) {
  let container = document.querySelector(".container");
  container.innerHTML = "";

  airports.forEach((airport) => {
    container.appendChild(createCard(airport));
  });
}
