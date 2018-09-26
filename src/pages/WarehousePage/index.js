import React from 'react'
import Page from 'components/LayoutComponents/Page'
import Helmet from 'react-helmet'
import WarehouseListContainer from './WarehouseListContainer';

class WarehousePage extends React.Component {
  static defaultProps = {
    pathName: 'Warehouse',
    roles: ['agent', 'administrator'],
  }

  render() {
    const props = this.props
    return (
      <Page {...props}>
        <Helmet title="Warehouse" />
        <WarehouseListContainer />
      </Page>
    )
  }
}
export default WarehousePage;
