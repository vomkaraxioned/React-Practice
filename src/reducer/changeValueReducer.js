const changeValue = (currentValue = 0,action)=>{
  switch (action.type) {
    case "incre":
      currentValue = currentValue + 1;
      break;
    case "decre":
      currentValue = currentValue +1 ;
        break;
    default: currentValue;
      break;
  }
  return currentValue;
};

export default changeValue;