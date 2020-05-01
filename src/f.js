import React, { Component } from 'react'
import 'antd/dist/antd.css'
import { Input, Button, List } from 'antd'

class TodoList2 extends Component {
  render() {
    return (
      <div style={{marginTop: 10, marginLeft: 10}}>
        <div>
          <Input 
            placeholder='todo info'
            style={{width: 300, marginRight: 10}}
            />
          <Button type="primary">Submit</Button>
        </div>
      </div>
    )
  }
}
export default TodoList2