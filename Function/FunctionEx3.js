let orderCount = 0;

const takeOrder = () => {
	orderCount = orderCount + 1;
}

const getSubTotal =(itemCount)=>{
  return itemCount*7.5;
}

takeOrder();
console.log(getSubTotal(orderCount));