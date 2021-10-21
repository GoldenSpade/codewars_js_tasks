const guests = [1, -1];


function inviteMoreWomen(L) {
  const man = L.filter((x) => x === 1).length;
  const woman = L.filter((x) => x === -1).length;

  return man > woman;
}

console.log(inviteMoreWomen(guests));
