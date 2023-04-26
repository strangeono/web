function getData(keys, data) {
    let result = [];
    for (let i = 0; i < data.length; i++) {
      let obj = {};
      for (let j = 0; j < keys.length; j++) {
        if (data[i][j] !== undefined) {
          obj[keys[j]] = data[i][j];
        }
      }
      result.push(obj);
    }
    return result;
  }


let keys = ['имя', 'любимый цвет', 'любимое блюдо'];
let data = [
    ['Василий', 'красный', 'борщ'],
    ['Мария'],
    ['Иннокентий', 'жёлтый', 'пельмени', '18', 'Азовское']
];
  
let result = getData(keys, data);