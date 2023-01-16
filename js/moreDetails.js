const flags = document.getElementById("flags");
const query = new URLSearchParams(window.location.search);
const params = query.get("name");

document.addEventListener("DOMContentLoaded", e =>{
    fetchData();
} );

const fetchData = async () => {
    try {
        const result = await fetch("https://restcountries.com/v3.1/all");
        const data = await result.json();
        const filterDetails = data.filter( item => item.name.official === params )
        loadFlags(filterDetails);
    } catch (error) {
        console.log(error);
    }
};

const loadFlags = data => {
    let elements = "";
    data.forEach( item => {
        let listLanguages = Object.values(item.languages); //.join();
        let listBorders = item.borders; //.join();

        elements += 
`       <div class="s-1">
            <img src="${item.flags.png}" alt="" class="img-fluid">
            <div class="card-content">
                <p>
                    <b>Nombre:</b>
                    <br>
                    ${item.name.official}
                </p>
                <p>
                    <b>Capital:</b>
                    <br>
                    ${item.capital}
                </p>
            </div>
        </div>
            <div class="s-2">
            <img src="${item.coatOfArms.png}", alt="coat" class="img-fluid">
            <div class="card-content">
                <p>
                    <b>languages:</b>
                    <br>
                    ${listLanguages} 
                </p>
                <p>
                    <b>bordes:</b>
                    <br>
                    ${listBorders}
                </p>
            </div>
        </div>
        <div class="s-3">
            <p>
                <b>region:</b>
                <br>
                ${item.region}
            </p>
            <p>
                <b>Poblacion:</b>
                <br>
                ${item.population}
            </p>
            <p>
                <b>time-zones:</b>
                <br>
                ${item.timezones}
            </p>
        </div>`
    });
    flags.innerHTML = elements;
};