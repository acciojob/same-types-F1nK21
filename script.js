function isSameType(value1, value2) {
  //your js code here
	// Attempt to convert to numbers. If not successful, they remain strings.
  const convertedValue1 = isNaN(Number(value1)) ? value1 : Number(value1);
  const convertedValue2 = isNaN(Number(value2)) ? value2 : Number(value2);

	console.log(typeof(convertedValue1));
	console.log(typeof(convertedValue2));
	
  return typeof convertedValue1 === typeof convertedValue2;
	
	// if (Number.isNaN(value1) && Number.isNaN(value2)) {
 //    return true;
 //  }
 //  return typeof(value1) === typeof(value2);
}  
 
//do not change the code below.
let value1 = prompt("Enter Start of the Range.");
let value2 = prompt("Enter End Of the Range.");
alert(isSameType(value1, value2));
  
 