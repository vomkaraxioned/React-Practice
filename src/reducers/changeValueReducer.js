const changeValue = (currentValue = 0,action)=>{
  switch (action.type) {
    case "incre":return currentValue+1;
    case "decre": return currentValue-1;
    default:   return currentValue;
  }
};

export default changeValue;