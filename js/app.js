const flags = document.getElementById("flags");

// la funcion 'fetchData()' se ejecuta al cargar la pagina por primera vez
document.addEventListener("DOMContentLoaded", e =>{
    fetchData();
} );

// esta funcion busca la API de paises:
// 1. carga todas Card de los paises
const fetchData = async () => {
    try {
        const result = await fetch("https://restcountries.com/v3.1/all");
        const data = await result.json();
        loadFlags(data);
        filterCountryInput(data);
        filterRegionSelect(data);
    } catch (error) {
        console.log(error);
    }
};

const loadFlags = data => {
    let elements = "";
    data.forEach( item => {
        elements +=
        `<article class="card">
            <div class="card-general">
                <img src="${item.flags.png}" alt="" class="card-img-one">
                <h3 class="card-name-country">${item.name.official}</h3>
                <p class="card-continent">${item.region}</p>
            </div>
            <div class="card-info">
                <a href="./pages/country.html?name=${item.name.official}">
                    <img src="${item.flags.png}" alt="" class="card-img-two">
                    <p>
                        <b>Population</b><br>
                        ${item.population}    
                    </p>
                    <p class="card-capital">
                        <b>Capital</b><br>
                        ${item.capital}
                    </p>
                </a>
            </div>
        </article>`        
    });
    flags.innerHTML = elements;
};

