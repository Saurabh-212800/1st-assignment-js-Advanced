// Initialize an object
const operatingSystem = {
    name: 'Ubuntu',
    version: 18.04,
    license: 'Open Source'
};

// Get the object key/value pairs
const entries = Object.entries(operatingSystem);

console.log(entries);

//OUTPUT
    ["name", "Ubuntu"]
    ["version", 18.04]
    ["license", "Open Source"]