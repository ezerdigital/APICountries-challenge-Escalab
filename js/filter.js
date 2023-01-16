const $select = document.getElementById("items-select");

const filterRegionSelect = (data) => {
    $select.addEventListener("change", e => {
        const index = $select.selectedIndex;
        if ( index !== -1 ){
            const optionSelect = $select.options[index];
            const filteredRegions = data.filter(item => {
                const objectRegion = item.region;
                if ( objectRegion.indexOf(optionSelect.value) !== -1 ) {
                    return item;
                }
            })
            loadFlags(filteredRegions);
        } else {
            return;
        }
    });
}



