document.getElementById('search-button').addEventListener('click', () => {
    const species = document.getElementById('species-input').value.trim();
    if (species) {
        fetchAnimalData(species);
    } else {
        displayError('Please enter a species name.');
    }
});

async function fetchAnimalData(species) {
    const apiKey = 'wd2l1WcdQQw/bMXW2rUhVQ==egywQI9Jq5LG0y40'; 
    const url = `https://api.api-ninjas.com/v1/animals?name=${species}`;

    try {
        const response = await fetch(url, {
            headers: { 'X-Api-Key': apiKey }
        });
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        if (data.length > 0) {
            displayData(data[0]);
        } else {
            displayError('No data found for the specified species.');
        }
    } catch (error) {
        displayError(`Failed to fetch data: ${error.message}`);
    }
}

function displayData(animal) {
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = `
        <h2>${animal.name}</h2>
        <p><strong>Scientific Name:</strong> ${animal.taxonomy.scientific_name}</p>
        <p><strong>Common Name:</strong> ${animal.characteristics.common_name}</p>
        <p><strong>Classification:</strong> Kingdom: ${animal.taxonomy.kingdom}, Phylum: ${animal.taxonomy.phylum}, Class: ${animal.taxonomy.class}, Order: ${animal.taxonomy.order}, Family: ${animal.taxonomy.family}, Genus: ${animal.taxonomy.genus}</p>
        <p><strong>Locations:</strong> ${animal.locations.join(', ')}</p>
        <p><strong>Habitat:</strong> ${animal.characteristics.habitat}</p>
        <p><strong>Diet:</strong> ${animal.characteristics.diet}</p>
        <p><strong>Lifespan:</strong> ${animal.characteristics.lifespan}</p>
        <p><strong>Top Speed:</strong> ${animal.characteristics.top_speed}</p>
        <p><strong>Weight:</strong> ${animal.characteristics.weight}</p>
        <p><strong>Height:</strong> ${animal.characteristics.height}</p>
        <p><strong>Color:</strong> ${animal.characteristics.color}</p>
        <p><strong>Skin Type:</strong> ${animal.characteristics.skin_type}</p>
        
    `;
}

function displayError(message) {
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = `<p class="error">${message}</p>`;
}
