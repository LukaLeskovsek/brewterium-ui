import React from 'react';
import {connect} from 'react-redux';
import history from '../../../history';
import {setActiveDialog} from './../../../ducks/app';
import {message} from 'antd';
import WarehouseList from './../WarehouseList';
import {getWarehouseDetails, addWarehouse, getWarehouseList} from '../../../ducks/warehouse/warehouse';
import WarehouseEdit from './../WarehouseEdit';

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

    onDetails = (e) => {
        message.success('Details : '+ e);
        console.log('Details props : ', this.props);
        const location = {
            pathname : '/edit/warehouse/'+e,
            //search : '?id='+e
            state : {warehouseId : e}
        }
        history.push(location);
       // this.props.history.push({
      //      pathname: '/edit/warehouse/',  //path
       //     search: e // query param named 'search'
       //   })
    }

    componentDidMount(){
        this.props.fetchList();
    }

    render(){
        const {isOpen} = this.state;
        return (
            <div>
                <WarehouseEdit visible={isOpen} afterClose={this.onAddNewClose}/>
                <WarehouseList warehouseList={this.props.data} {...this.props} addNew={this.onShowAddNew} details={this.onDetails}/>
            </div>
        );
    }
}

function mapStateToProps(state){
    return {
        data : state.warehouse.list
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        fetchList : () => dispatch(getWarehouseList()),
        //fetchDetails: (url) => dispatch(getWarehouseDetails(url)),
        setActiveDialog : (state, activeDialog) => dispatch(setActiveDialog(state, activeDialog))
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(WarehouseListPage);
