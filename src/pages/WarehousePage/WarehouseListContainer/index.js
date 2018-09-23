import React from 'react';
import {connect} from 'react-redux';
import WarehouseList from './../WarehouseList';
import {getWarehouseDetails} from './../../../ducks/warehouse';

let data = [{
    id : 1,
    status : 0,
    name : "warehouse main HQ",
    platform : "bask"
},{
    id : 2,
    status : 0,
    name : "warehouse north",
    platform : "bek"
}];

const onDetails = (event) => {
    alert(event);
};

class WarehouseListPage extends React.Component {
    render(){
        return (
            <div>
                <WarehouseList warehouseList={data} details={getWarehouseDetails} />
            </div>
        );
    }
}

function mapStateToProps(state){

}

export default connect()(WarehouseListPage);
