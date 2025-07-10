function isSameType(value1, value2) {
  //your js code here
	const convertedValue1 = Number(value1);
  const convertedValue2 = Number(value2);
  if ((Number.isNaN(convertedValue1) && Number.isNaN(convertedValue2)) ||
      (!Number.isNaN(convertedValue1) && !Number.isNaN(convertedValue2) && typeof convertedValue1 === typeof convertedValue2)) 
  {
    return true;
  } else {
    return false;
  }
}  
 
//do not change the code below.
let value1 = prompt("Enter Start of the Range.");
let value2 = prompt("Enter End Of the Range.");
alert(isSameType(value1, value2));
  
 