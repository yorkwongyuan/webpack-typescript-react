import * as React from 'react';

class Tick2 extends React.Component<{ timerId: any }, { times: string }> {
  constructor(props) {
    super(props)
    this.state = {
      times: this.getCurrentDate()
    }
    this.tick = this.tick.bind(this)
  }
  public timerId: any
  componentDidMount() {
    this.tick()
  }
  componentWillUnmount() {
    clearInterval(this.timerId)
  }
  getCurrentDate() {
    let day = new Date()
    day.setTime(day.getTime()) // 获取时间戳
    let currentDateTime = `${day.getFullYear()}年${day.getMonth() + 1}月
      ${day.getDate()}日${day.getHours()}时${day.getMinutes()}分${day.getSeconds()}秒`
    return currentDateTime
  }
  tick() {
    this.timerId = setInterval(() => {
      console.log('tikc')
      this.setState({
        times: this.getCurrentDate()
      })
    }, 1000)
  }

  render() {
    return (
      <div>
        {(this.state.times)}
      </div>
    )
  }
}

export default Tick2