const container = document.getElementById('container')
const regiondd = document.getElementById('region-dd')
const languagedd = document.getElementById('language-dd')

let criteria = ''

const showCountries = async(name) => {

    if(name == 'all') {
        url = 'https://restcountries.com/v3.1/' + name;
    }else if(criteria=='region'){
        url = 'https://restcountries.com/v3.1/' + 'region/' + name
    }else if(criteria=='language'){
        url = 'https://restcountries.com/v3.1/' + 'lang/' + name
    }

    

    const res = await fetch(url);
    const data = await res.json();

    container.innerHTML = ``

    data.forEach(country => {

        container.innerHTML += `
        
            <div class="inner-container">
                <img class="country-img" src="${country.flags.png}" alt="">
                <h2>Name: ${country.name.official}</h2>
                <h3>Capital: ${country.capital ? country.capital[0] : 'Not Found'}</h3>
            </div>

        `
    })

}

const showByRegion = () => {
    criteria = 'region';
    showCountries(regiondd.value);
}

const showByLanguage = () => {
    if(languagedd.value=='all'){
        showCountries(languagedd.value);
    }else {
        criteria = 'language';
        showCountries(languagedd.value);
    }
}

showCountries('all');