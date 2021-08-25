const arr = [{
  "state": 'Maine',
  capital: 'Augusta'
}, {
  country: 'Spain',
  "capital": "Madrid"
}];

function capital(capitals) {
  return capitals.map(function(e) {
    return 'The capital of ' + (e.state || e.country) + ' is ' + e.capital
  })
}

console.log(capital(arr));
