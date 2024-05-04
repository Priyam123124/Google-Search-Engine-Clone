// Function to perform search
function search() {
    // Retrieve search query from local storage
    const query = localStorage.getItem('key111');
    
    // Check if the query is empty
    if (query === '') {
        alert('Please enter a search query');
        return;
    }

    // Google Custom Search API key
    const apiKey = 'AIzaSyDv1KZZSvi3YKt2I5V6anEXJMAXU9wwCZ8';
    // Custom search engine ID
    const searchEngineId = '10898b8bbccc644b8';
    // API URL with query parameters
    const apiUrl = `https://www.googleapis.com/customsearch/v1?key=${apiKey}&cx=${searchEngineId}&q=${encodeURIComponent(query)}`;

    // Fetch search results from API
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            // Display search results
            displaySearchResults(data.items);
        })
        .catch(error => {
            console.error('Error fetching search results:', error);
        });
    
    // Remove query from local storage after search
    localStorage.removeItem('key111');
}

// Function to display search results
function displaySearchResults(results) {
    const searchResultsContainer = document.getElementById('id1');
    searchResultsContainer.innerHTML = '';

    // Check if there are no results
    if (!results || results.length === 0) {
        searchResultsContainer.innerHTML = '<p>No results found</p>';
        return;
    }

    // Iterate through each search result
    results.forEach(result => {
        const title = result.title;
        const link = result.link;
        const snippet = result.snippet;

        // Create HTML elements to display search result
        const resultItem = document.createElement('div');
        resultItem.classList.add('searchresult');
        resultItem.innerHTML = `
            <h3><a href="${link}" target="_blank">${title}</a></h3>
            <p>${snippet}</p>
        `;

        // Append search result to container
        searchResultsContainer.appendChild(resultItem);
    });
}

// Trigger search function when Enter key is pressed
window.addEventListener('keydown', e => {
    switch(e.key) {
        case 'Enter':
            // Get value from search input
            const value = document.getElementById('id22').value.trim();
            // Save search query to local storage
            localStorage.setItem('key111', value)
            // Redirect to search results page if query is not empty
            if (value != "") {
                window.location.href = 'result.html'
            }
            break;
        default:
            break;
    }
});

// Perform search when the page loads
search();
