let selectBtn = document.querySelector(".sort");

if (selectBtn) {
  selectBtn.addEventListener("change", async () => {
    console.log(selectBtn.value);

    let data = await getSortedBy(selectBtn.value);
    attachCards(data);
  });

  home();
}
let submitBtn = document.querySelector(".submitAirport");

if (submitBtn) {
  submitBtn.addEventListener("click", () => {
    const name = document.querySelector(".name").value;
    const code = document.querySelector(".code").value;
    const municipality = document.querySelector(".municipality").value;
    const region_code = document.querySelector(".regionCode").value;
    postAirport({ name, code, municipality, region_code }).value;
  });
}
