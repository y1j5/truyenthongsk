const params = new URLSearchParams(
    window.location.search
);

const id = params.get("id");

const disease = window.diseases.find(
    item => item.id === id
);

console.log(disease);
