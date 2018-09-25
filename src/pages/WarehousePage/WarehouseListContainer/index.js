import React from 'react';
import {connect} from 'react-redux';
import {setActiveDialog} from './../../../ducks/app';
import WarehouseList from './../WarehouseList';
import {getWarehouseDetails, addWarehouse} from '../../../ducks/warehouse/warehouse';
import WarehouseAddNew from './../WarehouseAddNew';

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


class WarehouseListPage extends React.Component {

    state = {
        isOpen : false
    }

    onShowAddNew = (event,e) => {
        this.setState({
            isOpen : true
        });
    };
    
    onAddNewClose = (e) => {
        this.setState({
            isOpen : false
        })
    }

    render(){
        const {isOpen} = this.state;
        return (
            <div>
                <WarehouseAddNew visible={isOpen} afterClose={this.onAddNewClose}/>
                <WarehouseList warehouseList={data} {...this.props} addNew={this.onShowAddNew} />
            </div>
        );
    }
}

function mapStateToProps(state){
    
}
const mapDispatchToProps = (dispatch) => {
    return {
        fetchDetails: (url) => dispatch(getWarehouseDetails(url)),
        setActiveDialog : (state, activeDialog) => dispatch(setActiveDialog(state, activeDialog))
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(WarehouseListPage);
