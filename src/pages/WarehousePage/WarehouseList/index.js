import React from 'react';
import { connect } from 'react-redux'
import { Table, Dropdown, Menu, Icon, Badge, Row, Button } from 'antd';

const {Column} = Table;
const menu = (
    <Menu>
      <Menu.Item>
        Duplicate order
      </Menu.Item>
      <Menu.Item>
        Action 2
      </Menu.Item>
      <Menu.Item>
        Action 3
      </Menu.Item>
    </Menu>
);

const WarehouseList = ({warehouseList, fetchDetails, addNew}) => {
    console.log('PROPS 2 : ', this.props)
    return (
        <div>
            <Row type="flex" justify="end">
                <Button type="primary" shape="circle" icon="plus" onClick={() => addNew('new warehouse')}/>
                </Row>
                <Table
                    dataSource={warehouseList}
                    pagination="false">
                    
                    <Column 
                        title="Status" 
                        dataIndex="Status"
                        key="id" 
                        width="70"
                        render={status =>(
                            <span>
                                <Badge status="success" />
                                Active
                            </span>
                        )}  />
                    <Column title="Name" dataIndex="name" key="name"/>
                    <Column title="Platfrom" dataIndex="platform" key="platform" />
                    <Column 
                        title="Actions" 
                        key="operation" 
                        render={(record) => (
                            //<a href={`warehouse_details\\${record.id}`}>
                            <a onClick={() => fetchDetails(record.id)}>
                                Details
                            </a>
                        )}                        
                    />                
                </Table>
        </div>
    );
}

export default WarehouseList;