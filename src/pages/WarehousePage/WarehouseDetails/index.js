import React from 'react'
import Page from 'components/LayoutComponents/Page'
import Helmet from 'react-helmet'
import { message } from 'antd'

class WarehouseDetails extends React.Component {
  static defaultProps = {
    pathName: 'Warehouse',
    roles: ['agent', 'administrator'],
  }

  state = {
    warehouseId: '',
  }

  componentDidMount() {
    message.success('Warehouse details page:' + this.props.match.params.id)
    this.setState({ warehouseId: this.props.match.params.id })
  }

  render() {
    const props = this.props
    return (
      <Page {...props}>
        <Helmet title="Warehouse" />
        <h1>Details for warehouse : {this.state.warehouseId}</h1>
      </Page>
    )
  }
}
export default WarehouseDetails
