import * as React from 'react';
interface Props {
  name: String,
  age: number,
  gender: String
}

class UserInfo extends React.Component<Props> {
  constructor(props: Props) {
    super(props)
  }
  render() {
    return (
      <div>
        <div className="userInfo">
          <div>
            <span>姓名:</span><span>{this.props.name}</span>
          </div>
          <div>
            <span>年龄:</span><span>{this.props.age}</span>
          </div>
          <div>
            <span>性别:</span><span>{this.props.gender}</span>
          </div>
        </div>
      </div>
    )
  }
}


class Comment extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>
        <UserInfo name="york" gender="male" age={123} />
        <div className="jpb">
          程序员
        </div>
        <div className="date">
          {new Date().toLocaleDateString()}
        </div>
      </div>
    )
  }
}

export default Comment