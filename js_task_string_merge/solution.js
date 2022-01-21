function stringMerge(string1, string2, letter) {
    var subs2 = string2.substr(string2.indexOf(letter));
    var subs1 = string1.substr(0, string1.indexOf(letter));

    return subs1 + subs2
}

console.log(stringMerge('hello', 'world', 'l'));
