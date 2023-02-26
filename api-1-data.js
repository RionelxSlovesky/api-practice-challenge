const heading = document.getElementById('heading');
const innerContainers = document.getElementById('inner-containers');

const person = {
    found: 2,
    message: "Found 2 persons",
    result: [
      {
        name: {
          common: "John",
          fullName: ["John", "Doe"]
        },
        age: 32,
        isMale: false,
        address: {
          street: "13/A St Joseph",
          house: 10,
        },
      },
      {
        name: {
          common: "Humayoun",
          fullName: ["Humayoun", "Kabir"]
        },
        age: 33,
        isMale: false,
        address: {
          street: "13/A St Lucia",
          house: 11,
        },
      },
    ]
  };

  console.log('wokin')

  heading.innerText = 'Found ' + person.found + ' persons'

  person.result.forEach(p => {
    const innerContainer = document.createElement('div');
    innerContainer.classList.add('inner-container');
    
    const {name, age} = p;
    const address = `${p.address.street}, House No.: ${p.address.house}` 


    innerContainer.innerHTML = `
      <p>Person Name: ${name.common}</p>
      <p>age: ${age}</p>
      <p>Street: ${address}</p>
    `
    innerContainers.appendChild(innerContainer)


  })