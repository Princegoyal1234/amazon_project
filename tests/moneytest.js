import {formatcurrancy} from '../script/utils/money.js'
console.log("test-suit:format currancy")
console.log("Convert Cents to dollar")
if(formatcurrancy(2095)==='20.95' && formatcurrancy(0)==='0.00'){
  console.log("passed");
}
else { console.log("failed")}
console.log('works with 0')
if(formatcurrancy(0)==='0.00'){
  console.log('passed')
}
else{
  console.log('failed')
}
console.log('round up to nearest cents')
if(formatcurrancy(2000.5)==='20.01') {
  console.log("passed")
}
else{
  console.log('failed')
}