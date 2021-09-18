const inputUrl = 'hello http://world.com !';

function anchorize(text){
  var urlRegex = /((https?|ftps?|smb|file):\/\/\S+)/gi;
  return text.replace(urlRegex, "<a href=\"$1\">$1</a>")
}

console.log(anchorize(inputUrl));
