const text = 'abc'
const char = 'z'

function contamination(text, char){
  if (text.length === '' || char.length === '') {
    return ''
  } else {
    return text.split('').map(x => x = char).join('')
  }
}

console.log(contamination(text, char));
