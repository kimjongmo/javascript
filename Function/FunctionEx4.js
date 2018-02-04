let orderCount = 0;

const takeOrder = () => {
	orderCount = orderCount + 1;
}

const getSubTotal =(itemCount)=>{
  return itemCount*7.5;
}
const getTotal=()=>{
  return getSubTotal(orderCount)+getTax(orderCount);
}
const getTax=(orderCount)=>{
  return getSubTotal(orderCount)*(0.06);
}

takeOrder();
console.log(getTotal());