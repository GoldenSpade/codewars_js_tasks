const santasList = ["Jason", "Jackson", "Jordan", "Johnny"];
const children = ["Jason", "Jordan", "Jennifer"];

function findChildren(santasList, children) {

  finalList = [];
  objectList = {};

  for (let santa of santasList) {
      for (let child of children) {
          if (santa == child && !objectList[santa]) {
              finalList.push(santa);
              objectList[santa] = true;
          }

      }
  }

  return finalList.sort();
}

console.log(findChildren(santasList, children));
