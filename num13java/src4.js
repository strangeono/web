function getPrice(hours, isUrgent) {
    let rate = 1500;
    let cost = hours * rate; 
  
    if (isUrgent) {
      cost = (hours / 2) * (rate * 2.5);
    }
  
    if (hours > 150) {
      rate -= 250;
    }
  
    return cost;
  }
  
  let hours = 160;
  let isUrgent = true;
  let cost = getPrice(hours, isUrgent); 
  alert('Стоимость проекта: ' + cost + ' рублей');