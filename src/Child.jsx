import React, {PureComponent, Component} from 'react'

export default class  Child extends PureComponent{
  render() {
    return (
    <div>
        Child Component : {Math.random()}
    </div>
  )
}
}