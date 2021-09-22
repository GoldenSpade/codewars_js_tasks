let SequenceSum = (function () {
  function SequenceSum() {}

  SequenceSum.showSequence = function (count) {
    let m = [],
      s = 0;
    if (count === 0) return count + '=' + 0;
    if (count < 0) return count + '<' + 0;

    for (let i = 0; i <= count; i++) {
      s += i;
      m.push(i);
    };

    return m.join('+') + ' = ' + s;
  };

  return SequenceSum;

})();
