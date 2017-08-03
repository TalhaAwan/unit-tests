module.exports = {
  generateRandomNum: function (min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
  },

  convertArrToStatment: function(array){
    if(!array || !(array instanceof Array)) return undefined;
    if(!array.length) return "";
    if(array.length < 2 ) return array[0];

    const arr = array.slice();
    if(arr.length === 2) return  arr.join(" and ");

    arr[arr.length-1] = "and " + arr[arr.length-1];
    return arr.join(", ");
  },

  logger: function(fileName){
    return function(message){
      console.log(fileName, message);
    }
  }

}