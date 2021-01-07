import "../JSXDemo.css"

let numbers = [1, 2, 3, 4]
let str = 'Items:'

function ListItems() {
  return numbers.map((number) => 
  <li className = { number % 2 ? 'odd' : 'even' }> { str } { number } </li>)
}

function HWComp() {
  return <ul> { ListItems(numbers) } </ul>
}

export default HWComp