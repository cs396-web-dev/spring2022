// Example 1: Simple:
const example1 = () => {
    const url = 'https://photoapp-spring.herokuapp.com/api/posts'
    fetch(url)
        .then(response => response.json()) // callback function
        .then(data => console.log(data))  // callback function
        .catch(err => {
            console.log(err);
        });
};


// Example 2: Let's expand this...
const example2 = () => {
    const url = 'https://photoapp-spring.herokuapp.com/api/posts'
    fetch(url)
        .then(response => {
            console.log('Fetch promise complete. Executing callback function #1...')
            console.log(response);
            return response.json();
        })
        .then(data => {
            console.log('response.json() promise complete. Executing callback function #2...')
            console.log(data)
        })
        .catch(err => {
            console.error(err);
        });
};

// Example 3: Await / Async
const example3 = async () => {
    try {
        let url = 'https://photoapp-spring.herokuapp.com/api/posts';
        const response = await fetch(url);
        console.log(response);
        const jsonData = await response.json();
        console.log(jsonData);
    } catch(err) {
        console.error(err);
    }
};





// Some Utilities for turning the data into HTML:

// Template for the post:
const post2Html = (post) => {
    return `<p>${post.caption}</p>`;
}

// utility function that converts an html string
// into an HTML DOM Element: 
const string2HTML = function (str) {
	var parser = new DOMParser();
	var doc = parser.parseFromString(str, 'text/html');
	return doc.body;
};

const displayResults = data => {
    data.forEach(post => {
        const html = post2Html(post);
        const elem = string2HTML(html);
        document.querySelector('#results').insertAdjacentElement('beforeend', elem);
    });    
};