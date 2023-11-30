
let url = "https://random-data-api.com/api/v2/beers?size=15";
fetch(url)
    .then(response => {
        if (!response.ok) {
            console.log("Response has error");
            return;
        }
        return response.json();
    }).then(data => {
        console.log(data);
    
        data.forEach(element => {
                console.log("single user");
                console.log(element.name)
            var html =`<tr>
                    <td class="table_id">`+element.id+`</td>
                    <td class="table_UID">`+element.uid+`</td>
                    <td class="table_Brand">`+element.brand+`</td>
                    <td class="table_Name">`+element.name+`</td>
                    <td class="table_Style">`+element.style+`</td>
                    <td class="table_Hop">`+element.hop+`</td>
                    <td class="table_Yeast">`+element.yeast+`</td>
                    <td class="table_Malts">`+element.malts+`</td>
                    <td class="table_IBU">`+element.ibu+`</td>
                    <td class="table_Alcohol">`+element.alcohol+`</td>
                    <td class="table_BLG">`+element.blg+`</td>
                </tr>`;
            var tableSectionElem = document.getElementById('beerBody');
            tableSectionElem.insertAdjacentHTML('beforeend', html);
        });
    }).catch(error => {
        console.error("There is a proble in fetcing the value:", error.message)
    });
