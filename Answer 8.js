
const name = 
{
 firstName: "Philip",
 lastName: "Fry"
};


const details = 
{
 job: "Delivery Boy",
 employer: "Planet Express"
};

// Merge the objects
const character = Object.assign(name, details);

console.log(character);


//OUTPUT
{firstName: "Philip", lastName: "Fry", job: "Delivery Boy", employer: "Planet Express"}
