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

