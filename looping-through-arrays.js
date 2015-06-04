var pets = ['cat', 'dog', 'rat'];
var totalPets = pets.length;

for (var counter = 0; counter < totalPets; counter++) {
	pets[counter] = pets[counter] + 's';
};

console.log(pets);