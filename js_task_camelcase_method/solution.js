const input = 'hello case';

String.prototype.camelCase = function () {
  if (!Object.keys(this).length) {
    return '';
  } else {
    return this.split(' ')
      .map((el) => `${el[0].toUpperCase()}${el.slice(1, el.length)}`)
      .join('');
  }
};

console.log(input.camelCase());
