// ------------solved by s3sivaram----on 21-Jul-21
// convert an array to an object

function convertToObject(array) {
  let result = array.reduce((acc, element) => {
    return { ...acc, [element]: element };
  }, {});
  return result;
}

let arr1 = [1, 2, 3];
console.log(convertToObject(arr1));
