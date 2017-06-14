var fruits = [
    {
        "name": "Mulberries",
        "ripeMonths": ["07", "08"],
        "isRipe": false
    },
    {
        "name": "Nectarines",
        "ripeMonths": ["05", "06", "07", "08", "09", "10"],
        "isRipe": false
    },
    {
        "name": "Oranges",
        "ripeMonths": ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"],
        "isRipe": false
    },
    {
        "name": "Peaches",
        "ripeMonths": ["05", "06", "07", "08", "09", "10"],
        "isRipe": false
    },
    {
        "name": "Pecans",
        "ripeMonths": ["10"],
        "isRipe": false
    },
    {
        "name": "Persimmons",
        "ripeMonths": ["09", "10", "11"],
        "isRipe": false
    },
    {
        "name": "Pistachios",
        "ripeMonths": ["09", "10", "11"],
        "isRipe": false
    },
    {
        "name": "Plums",
        "ripeMonths": ["05", "06", "07", "08", "09", "10", "11"],
        "isRipe": false
    },
    {
        "name": "Pomegranates",
        "ripeMonths": ["09", "10", "11", "12"],
        "isRipe": false
    },
    {
        "name": "Pomelos",
        "ripeMonths": ["01", "02", "03", "04", "11", "12"],
        "isRipe": false
    },
    {
        "name": "Quinces",
        "ripeMonths": ["09", "10", "11"],
        "isRipe": false
    },
    {
        "name": "Raspberries",
        "ripeMonths": ["05", "06", "07", "08", "09", "10", "11"],
        "isRipe": false
    },
    {
        "name": "Rhubarb",
        "ripeMonths": ["04", "05", "06", "07"],
        "isRipe": false
    },
    {
        "name": "Strawberries",
        "ripeMonths": ["03", "04", "05", "06", "07", "08", "09", "10", "11"],
        "isRipe": false
    },
    {
        "name": "Tayberries",
        "ripeMonths": ["06", "07", "08"],
        "isRipe": false
    },
    {
        "name": "Tomatoes",
        "ripeMonths": ["06", "07", "08", "09", "10", "11"],
        "isRipe": false
    },
    {
        "name": "Walnuts",
        "ripeMonths": ["10"],
        "isRipe": false
    }
];

for (i = 0; i < fruits.length; i++) {
    fruits[i].engMonths = [];

}

function engMonth() {
    for (i = 0; i < fruits.length; i++) {
        if (fruits[i].ripeMonths.includes("01")) {
            fruits[i].engMonths.push(" January");
        }
        if (fruits[i].ripeMonths.includes("02")) {
            fruits[i].engMonths.push(" February");
        }
        if (fruits[i].ripeMonths.includes("03")) {
            fruits[i].engMonths.push(" March");
        }
        if (fruits[i].ripeMonths.includes("04")) {
            fruits[i].engMonths.push(" April");
        }
        if (fruits[i].ripeMonths.includes("05")) {
            fruits[i].engMonths.push(" May");
        }
        if (fruits[i].ripeMonths.includes("06")) {
            fruits[i].engMonths.push(" June");
        }
        if (fruits[i].ripeMonths.includes("07")) {
            fruits[i].engMonths.push(" July");
        }
        if (fruits[i].ripeMonths.includes("08")) {
            fruits[i].engMonths.push(" August");
        }
        if (fruits[i].ripeMonths.includes("09")) {
            fruits[i].engMonths.push(" September");
        }
        if (fruits[i].ripeMonths.includes("10")) {
            fruits[i].engMonths.push(" October");
        }
        if (fruits[i].ripeMonths.includes("11")) {
            fruits[i].engMonths.push(" November");
        }
        if (fruits[i].ripeMonths.includes("12")) {
            fruits[i].engMonths.push(" December");
        }
    }
}


engMonth();

var month = new Date();
var mm = month.getMonth()+1;

if (mm < 10) {
    mm = "0" + mm;

}

month = mm;

for (i = 0; i < fruits.length; i++) {
    if (fruits[i].ripeMonths.indexOf(month) > -1) {
        (fruits[i].isRipe) = true;
    } else {
        (fruits[i].isRipe) = false;
    }

}

function render() {
    var fruitTable = document.createElement("div");
        fruitTable.setAttribute("class", "fruitTable");

        document.body.appendChild(fruitTable);

        var fruitRow = document.createElement("div");
        fruitRow.setAttribute("class", "fruitRow");

        document.body.appendChild(fruitRow);

        for (i = 0; i < fruits.length; i++) {
            var fruit = document.createElement("span");

           if (fruits[i].isRipe == true) {
                fruit.setAttribute("class", ("ripeFruit " + fruits[i].name + "Ripe"));
            } else {
                fruit.setAttribute("class", ("fruit " + fruits[i].name));
            }

            var fruitText = document.createElement("span");
            fruitText.setAttribute("class", "fruitText");

            var fruitTextNode = document.createTextNode(fruits[i].name);
            fruitText.appendChild(fruitTextNode);
            fruit.appendChild(fruitText);

            if (fruits[i].engMonths.length > 6) {
                    var ripeMonthsTextFirst = document.createElement("span");

                    ripeMonthsTextFirst.setAttribute("class", ("ripeMonthsTextFirst"));

                    var ripeMonthsTextFirstNode = document.createTextNode(fruits[i].engMonths[0] + " ---");
                    ripeMonthsTextFirst.appendChild(ripeMonthsTextFirstNode);
                    fruit.appendChild(ripeMonthsTextFirst);
                                      
                    var ripeMonthsTextLast = document.createElement("span");

                    ripeMonthsTextLast.setAttribute("class", ("ripeMonthsTextLast"));

                    var ripeMonthsTextLastNode = document.createTextNode(fruits[i].engMonths.slice(-1)[0]);
                    ripeMonthsTextLast.appendChild(ripeMonthsTextLastNode);
                    fruit.appendChild(ripeMonthsTextLast);
 
                    fruitRow.appendChild(fruit);
                    fruitTable.appendChild(fruitRow);

            } else {
                for (j = 0; j < fruits[i].engMonths.length; j++) {
                    var ripeMonthsText = document.createElement("span");

                    ripeMonthsText.setAttribute("class", ("ripeMonthsText"));

                    var ripeMonthsTextNode = document.createTextNode(fruits[i].engMonths[j]);
                    ripeMonthsText.appendChild(ripeMonthsTextNode);
                    fruit.appendChild(ripeMonthsText);
                    }

                fruitRow.appendChild(fruit);
                fruitTable.appendChild(fruitRow);
                
            }
        }
        document.body.appendChild(ripeMonthsTextFirstNode);
        document.body.appendChild(ripeMonthsTextLastNode);
        document.body.appendChild(ripeMonthsText);
    
}

render();
