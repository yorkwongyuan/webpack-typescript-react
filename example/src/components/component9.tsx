import * as React from 'react'

interface State {
  temp: number,
  scale: string
}
class Calculator extends React.Component<{}, State> {
  constructor(props) {
    super(props)
    this.onChange = this.onChange.bind(this)
    this.state = {
      temp: 123,
      scale: 'f'
    }
  }

  // 华氏转摄氏
  toCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
  }
  // 摄氏转华氏
  toFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
  }
  onChange(value, scale) {
    this.setState({
      temp: value,
      scale: scale
    })
  }
  render() {
    let celsius = this.state.scale === 'f' ? this.toCelsius(this.state.temp) : this.state.temp
    let fahrenheit = this.state.scale === 'c' ? this.toFahrenheit(this.state.temp) : this.state.temp
    return (
      <div>
        <span>摄氏度:</span><InputTemp onChange={this.onChange} temp={celsius} scale="c" />
        <span>华氏度:</span><InputTemp onChange={this.onChange} temp={fahrenheit} scale="f" />
      </div>
    )
  }
}

interface Props {
  onChange: any,
  temp: number,
  scale: string
}


class InputTemp extends React.Component<Props, {}> {
  constructor(props: Props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange(e) {
    let scale = this.props.scale
    this.props.onChange(e.target.value, scale)
  }
  render() {
    return (
      <input type="text" onChange={this.handleChange} value={this.props.temp} />
    )
  }
}

export default Calculator