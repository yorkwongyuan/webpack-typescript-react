import * as React from 'react';

function List(props) {
  let list = (
    <li>
      {props.list.text}
    </li>)
  return list
}

function Lists() {
  let lists = [{ text: '这是第1行', key: 1 }, { text: '这是第2行', key: 2 }, { text: '这是第3行', key: 3 }]
  let elLists = lists.map(li => <List list={li} key={li.key} />)
  return (
    <ul>
      {elLists}
    </ul>
  )
}
export default Lists