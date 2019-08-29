import * as React from 'react';

interface Props { }
interface State {
  isGoing: boolean,
  numbers: number,
  forbidValue: any
}
class Form extends React.Component<Props, State>{
  constructor(props: Props) {
    super(props)
    this.state = {
      isGoing: false,
      numbers: 0,
      forbidValue: ''
    }
  }
  _submit = (e) => {
    console.log(e, 'submit')
    e.preventDefault()
  }
  changeInput(e) {
    console.log(e.target.checked)
    let type = e.target.type;
    console.log(name, 'name')
    if (type === 'checkbox') {
      this.setState({
        isGoing: e.target.checked
      })
    } else {
      this.setState({
        numbers: e.target.value
      })
    }
  }
  forbidInput = (e) => {
    this.setState({
      forbidValue: ''
    })
    e.preventDefault()
  }
  render() {
    return (
      <div>
        <form onSubmit={this._submit}>
          <div>
            <input name="isGoing" type="checkbox" onChange={(e) => this.changeInput(e)} checked={this.state.isGoing} />
            是否前往:{this.state.isGoing === true ? '去' : '不去'}
          </div>
          <div>
            <input name="numbers" type="text" onChange={(e) => this.changeInput(e)} />
            来多少人:{this.state.numbers}
          </div>
          <div>
            <input type="text" value={this.state.forbidValue} onChange={this.forbidInput} />
          </div>
          <div>
            <input type="submit" value="提交" />
          </div>
        </form>
      </div >
    )
  }
}

export default Form