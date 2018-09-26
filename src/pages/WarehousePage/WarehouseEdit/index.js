import React from 'react'
import {Modal, Button} from 'antd';
import WarehouseEditForm from './WarehouseEditForm';
class WarehouseEdit extends React.Component {
  static defaultProps = {
    pathName: 'Warehouse',
    roles: ['agent', 'administrator'],
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  }

  render() {
    const props = this.props
    return (
        <Modal
        visible={props.visible}
        title="Add new warehouse"
        onOk={this.handleSubmit}
        onCancel={props.afterClose}
        footer={[
          <Button key="back" onClick={props.afterClose}>Return</Button>,
        ]}
      >
        <WarehouseEditForm {...props} onSubmit={this.handleSubmit} />
      </Modal>
    )
  }
}

export default WarehouseEdit;
