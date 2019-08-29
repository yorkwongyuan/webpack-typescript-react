import * as React from 'react';
interface P {

}
interface S {
  isToggleOn: Boolean,
  isOk: Boolean,
  isFinished: Boolean
}
class Event extends React.Component<P, S>{
  constructor(props: P) {
    super(props)
    this.state = {
      isToggleOn: true,
      isOk: true,
      isFinished: true
    }

    this.switch = this.switch.bind(this)
  }

  // bind
  switch() {
    this.setState(state => ({
      isToggleOn: !state.isToggleOn
    }))
  }

  // public class fields
  fieldsClickEvent = () => {
    this.setState(state => ({
      isOk: !state.isOk
    }))
  }

  // arrow

  arrowClickEvent(params, e) {
    console.log(e)
    console.log(params)
    this.setState(state => ({
      isFinished: !state.isFinished
    }))
  }



  render() {
    return (
      <div>
        <button onClick={this.switch}>bind</button>

        <button onClick={this.fieldsClickEvent}>public class fields</button>

        <button onClick={(e) => this.arrowClickEvent('params', e)}>arrow click</button>

        <div>
          {/* 这里不会显示true或者false必须转为字符串 */}
          {this.state.isToggleOn === true ? 'on' : 'off'}
        </div>
        <div>
          {this.state.isOk === true ? 'ok' : 'notok'}
        </div>

        <div>
          {this.state.isFinished === true ? 'finished' : 'nofinished'}
        </div>
      </div >
    )
  }

}

export default Event