import React from 'react';
import PaymentTx from 'components/CleanComponents/PaymentTx'
import { Table, Dropdown, Menu, Icon, Badge, Row, Col } from 'antd';

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

const expandedRowRender = () => {
    const columns = [
    { title: 'Date', dataIndex: 'date', key: 'date' },
    { title: 'Name', dataIndex: 'name', key: 'name' },
    { title: 'Upgrade Status', dataIndex: 'upgradeNum', key: 'upgradeNum' },
    {
        title: 'Action',
        dataIndex: 'operation',
        key: 'operation',
        render: () => (
        <span className="table-operation">
            <a href="#">Receive </a>
            <a href="#">Return </a>
            <Dropdown overlay={menu}>
            <a href="#">
                More <Icon type="down" />
            </a>
            </Dropdown>
        </span>
        ),
    },
    ];

    const data = [];
    for (let i = 0; i < 3; ++i) {
    data.push({
        key: i,
        date: '2014-12-24 23:12:00',
        name: 'This is production name',
        upgradeNum: 'Upgraded: 56',
    });
    }
    return (
    <Table
        columns={columns}
        dataSource={data}
        pagination={false}
    />
    );
};

const columns = [
    { title: 'Status', key: 'state', render: () => <span><Badge status="success" />Finished</span> },
    { title: 'Name', dataIndex: 'name', key: 'name' },
    { title: 'Platform', dataIndex: 'platform', key: 'platform' },
    { title: 'Version', dataIndex: 'version', key: 'version' },
    { title: 'Upgraded', dataIndex: 'upgradeNum', key: 'upgradeNum' },
    { title: 'Creator', dataIndex: 'creator', key: 'creator' },
    { title: 'Date', dataIndex: 'createdAt', key: 'createdAt' },
    { title: 'Action', key: 'operation', render: () => <a onClick={() => this.handleDetails()}>Details</a> },
    ];

const data = [];

function handleDetails () {
    alert('Purchase order details...');

}
class InboundOrderListPage extends React.Component {
    render(){
        for (let i = 0; i < 3; ++i) {
            data.push({
                key: i,
                name: 'Screem',
                platform: 'iOS',
                version: '10.3.4.5654',
                upgradeNum: 500,
                creator: 'Jack',
                createdAt: '2014-12-24 23:12:00',
            });
        }

        return (
        <div>
            <Row type="flex" justify="center" align="top" gutter={16}>
                <Col span="8">
                    <PaymentTx
                        income={false}
                        amount={'-$100.00'}
                        info={'US 4658-1678-7528'}
                    />
                </Col>
                <Col span="8">
                    <PaymentTx
                        income={true}
                        amount={'+27,080.00'}
                        info={'4512-XXXX-1678-7528'}
                    />
                </Col>
                <Col span="8">
                    <PaymentTx
                        income={false}
                        amount={'-100,000.00'}
                        info={'6245-XXXX-1678-3256'}
                    />
                </Col>
            </Row>
            <Row gutter={16}>
                <Table
                    className="components-table-demo-nested"
                    expandedRowRender={expandedRowRender}
                    dataSource={data} 
                    pagination="none">
                    
                    <Column title="Status" width="50" dataIndex="Status" key="name" render={status =>(<span><Badge status="success" />Finished</span>)}  />
                    <Column title="Name" width="400"dataIndex="name" key="name"/>
                    <Column title="Platfrom" width="80" dataIndex="platform" key="platform" />
                    <Column 
                        title="Actions" 
                        key="operation" 
                        width="300"
                        render={(text,record) => (<a href={`order-list-details\\${record.name}`}>{record.name + ' ----!'}</a>)} 
                        
                    />
                
                </Table>
            </Row>
        </div>
        );
    }
}

export default InboundOrderListPage;
