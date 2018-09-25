import React from 'react'
import {Modal, Button} from 'antd';

class WarehouseAddNew extends React.Component {
  static defaultProps = {
    pathName: 'Warehouse',
    roles: ['agent', 'administrator'],
  }

  render() {
    const props = this.props
    return (
        <Modal
        visible={props.visible}
        title="Add new warehouse"
        onOk={this.handleOk}
        onCancel={props.afterClose}
        footer={[
          <Button key="back" onClick={props.afterClose}>Return</Button>,
          <Button key="submit" type="primary" loading={props.loading} onClick={this.handleOk}>
            Submit
          </Button>,
        ]}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    )
  }
}
export default WarehouseAddNew;
