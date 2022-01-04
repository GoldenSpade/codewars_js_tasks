const arr1 = [1, 2, 3, 4, 5];
const arr2 = [1, 6, 7, 8, 9];

function duplicateElements(m, n) {
    const mainArr = [...m, ...n]
        .sort((a, b) => a - b);

    const findClone = mainArr.filter((x) =>
            mainArr.indexOf(x) !== mainArr.lastIndexOf(x))
        .length;

    if (findClone > 0) {
        return true;
    } else {
        return false;
    };
};


console.log(duplicateElements(arr1, arr2));
