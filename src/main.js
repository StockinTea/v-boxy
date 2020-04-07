import {happy} from './Utils.js'

const a = [1,2,3,4,5,6,7,8,8,9,10]
const b = (acc, cur) => cur + acc

let newVal = a.reduce(b)
const func = async () => {
  setTimeout(() => console.log('Hiiiii'), 500)
  return 'ok'
}
func().then((data) => console.log(data))
console.log(newVal)
console.log(happy)
