const form = document.getElementById("form");
const inputForm = document.getElementById("input-form");

const filterCountryInput = data => {
    form.addEventListener("keyup", e => {
        e.preventDefault();
        const inputValue = inputForm.value.toLowerCase();
        const filterArray = data.filter(item => {
            const ApiLetter = item.name.official.toLowerCase();
            if ( ApiLetter.indexOf(inputValue) !== -1 ) {
                return item;
            }
        })
        loadFlags(filterArray);
    })
}
