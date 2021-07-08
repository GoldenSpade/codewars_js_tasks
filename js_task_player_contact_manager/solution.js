const str = "John Doe, 8167238327, Jane Doe, 8163723827";

function playerManager(players) {
  let result = [];

  if (players == null || players == "") {
    result = [];
  } else {

    let splt = players.split(", ");
    for (let i = 0; i < splt.length; i += 2) {
      let ob = {};
      ob.player = splt[i];
      ob.contact = Number(splt[i + 1]);
      result.push(ob);
    }
  }
  return result;
};

console.log(playerManager(str));
