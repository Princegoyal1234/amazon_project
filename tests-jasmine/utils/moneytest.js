import {formatcurrancy} from '../../script/utils/money.js'
describe('test-suit:format currancy',()=>{
  it('Convert Cents to dollar',()=>{
    expect(formatcurrancy(2095)).toEqual('20.95');
  })
  it('works with 0',()=>{
    expect(formatcurrancy(0)).toEqual('0.00');
  })
  it('round up to nearest intiger',()=>{
    expect(formatcurrancy(2000.5)).toEqual('20.01')
  })
})