// input data

const list = [{
    "firstName": "Mark",
    "lastName": "G.",
    "country": "Scotland",
    "continent": "Europe",
    "age": 22,
    "language": "JavaScript"
  }, {
    "firstName": "Victoria",
    "lastName": "T.",
    "country": "Puerto Rico",
    "continent": "Americas",
    "age": 30,
    "language": "Clojure"
  }, {
    "firstName": "Emma",
    "lastName": "B.",
    "country": "Norway",
    "continent": "Europe",
    "age": 19,
    "language": "Clojure"
  }, {
    "firstName": "Kseniya",
    "lastName": "T.",
    "country": "Belarus",
    "continent": "Europe",
    "age": 29,
    "language": "Ruby"
  }, {
    "firstName": "Amar",
    "lastName": "V.",
    "country": "Bosnia and Herzegovina",
    "continent": "Europe",
    "age": 32,
    "language": "Ruby"
  }, {
    "firstName": "Sofia",
    "lastName": "P.",
    "country": "Italy",
    "continent": "Europe",
    "age": 41,
    "language": "Clojure"
  }, {
    "firstName": "Jayden",
    "lastName": "P.",
    "country": "Jamaica",
    "continent": "Americas",
    "age": 42,
    "language": "JavaScript"
  }, {
    "firstName": "Sou",
    "lastName": "B.",
    "country": "Japan",
    "continent": "Asia",
    "age": 43,
    "language": "Python"
  }, {
    "firstName": "Rimas",
    "lastName": "C.",
    "country": "Jordan",
    "continent": "Asia",
    "age": 44,
    "language": "Java"
  },
  {
    "firstName": "Alexander",
    "lastName": "F.",
    "country": "Russia",
    "continent": "Europe",
    "age": 89,
    "language": "Java"
  }, {
    "firstName": "Fatima",
    "lastName": "K.",
    "country": "Saudi Arabia",
    "continent": "Asia",
    "age": 21,
    "language": "Clojure"
  }, {
    "firstName": "Mark",
    "lastName": "G.",
    "country": "Scotland",
    "continent": "Europe",
    "age": 22,
    "language": "JavaScript"
  }, {
    "firstName": "Nikola",
    "lastName": "H.",
    "country": "Serbia",
    "continent": "Europe",
    "age": 29,
    "language": "Python"
  }, {
    "firstName": "Jakub",
    "lastName": "I.",
    "country": "Slovakia",
    "continent": "Europe",
    "age": 28,
    "language": "Java"
  }, {
    "firstName": "Kseniya",
    "lastName": "T.",
    "country": "Belarus",
    "continent": "Europe",
    "age": 89,
    "language": "JavaScript"
  }, {
    "firstName": "Luka",
    "lastName": "J.",
    "country": "Slovenia",
    "continent": "Europe",
    "age": 29,
    "language": "Clojure"
  }, {
    "firstName": "Mariam",
    "lastName": "B.",
    "country": "Egypt",
    "continent": "Africa",
    "age": 89,
    "language": "Python"
  }, {
    "firstName": "Mehdi",
    "lastName": "H.",
    "country": "Tunisia",
    "continent": "Africa",
    "age": 42,
    "language": "Python"
  }, {
    "firstName": "Yusuf",
    "lastName": "N.",
    "country": "Turkey",
    "continent": "Europe",
    "age": 22,
    "language": "Python"
  }
];

// solution

function findSenior(list) {
  var maxAge = Math.max(...list.map(person => person.age));
  return list.filter(person => person.age === maxAge);
}

// control

console.log(findSenior(list));
