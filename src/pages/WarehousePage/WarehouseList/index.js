import React from 'react'
import { connect } from 'react-redux'
import { Table, Dropdown, Menu, Icon, Badge, Row, Button } from 'antd'

const { Column } = Table
const menu = (
  <Menu>
    <Menu.Item>Duplicate order</Menu.Item>
    <Menu.Item>Action 2</Menu.Item>
    <Menu.Item>Action 3</Menu.Item>
  </Menu>
)

const WarehouseList = ({ warehouseList, fetchDetails, addNew, details, ...props }) => {
  console.log('Warehouse list data : ', warehouseList)
  return (
    <div>
      <Row type="flex" justify="end">
        <Button type="primary" shape="circle" icon="plus" onClick={() => addNew('new warehouse')} />
      </Row>
      <Table dataSource={warehouseList} pagination="false" rowKey={record => record.id}>
        <Column
          title="Status"
          dataIndex="Status"
          width="70"
          render={status => (
            <span>
              <Badge status="success" />
              Active ({status})
            </span>
          )}
        />
        <Column title="Name" dataIndex="name" />
        <Column title="Description" dataIndex="description" />
        <Column
          title="Actions"
          render={record => (
            //<a href={`warehouse_details\\${record.id}`}>
            <a onClick={() => details(record.id)}>Details</a>
          )}
        />
      </Table>
    </div>
  )
}

export default WarehouseList
