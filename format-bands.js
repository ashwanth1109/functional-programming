// ------------------------------------------------------------
// class template for creating objects for bands
// ------------------------------------------------------------
class Band {
    constructor(name, country, active = false) {
        this.name = name;
        this.country = country;
        this.active = active;
    }
}
// ------------------------------------------------------------
// array of bands
// ------------------------------------------------------------
const bands = [
    new Band("beatles", "CANADA"),
    new Band("led zeppelin", "CANADA"),
    new Band("coldplay", "CANADA", true)
];

// console.log(bands);
// O / P =>
// [ Band { name: 'beatles', country: 'CANADA', active: false },
//   Band { name: 'led zeppelin', country: 'CANADA', active: false },
//   Band { name: 'coldplay', country: 'CANADA', active: true } ]

// ------------------------------------------------------------
// capitalize prototype function
// ------------------------------------------------------------
String.prototype.capitalize = function() {
    return this.split(" ")
        .map(str => str.charAt(0).toUpperCase() + str.slice(1))
        .join(" ");
};

// ------------------------------------------------------------
// formatBands function - imperative loop
// ------------------------------------------------------------
const formatBands = bands => {
    for (const band of bands) {
        band.country = "UK";
        band.name = band.name.capitalize();
    }
};

formatBands(bands);
// console.log(bands);
// O / P =>
// [ Band { name: 'Beatles', country: 'UK', active: false },
//   Band { name: 'Led Zeppelin', country: 'UK', active: false },
//   Band { name: 'Coldplay', country: 'UK', active: true } ]
