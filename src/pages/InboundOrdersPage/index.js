import React from 'react'
import Page from 'components/LayoutComponents/Page'
import Helmet from 'react-helmet'
//import Empty from './../DefaultPages/EmptyPage';
import InboundOrdersListPage from './InboundOrdersListPage';

class InboundOrderPage extends React.Component {
  static defaultProps = {
    pathName: 'Purchase orders',
    roles: ['agent', 'administrator'],
  }

  render() {
    const props = this.props
    return (
      <Page {...props}>
        <Helmet title="Purches orders" />
        <InboundOrdersListPage />
      </Page>
    )
  }
}

export default InboundOrderPage
