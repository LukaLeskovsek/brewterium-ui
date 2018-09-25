import React from 'react'
import Page from 'components/LayoutComponents/Page'
import Helmet from 'react-helmet'
import DashboardGamma from './DashboardGamma'

class DashboardGammaPage extends React.Component {
  static defaultProps = {
    pathName: 'Dashboard Gamma',
    roles: ['agent', 'administrator'],
  }

  render() {
    const props = this.props
    return (
      <Page {...props}>
        <Helmet title="Dashboard Gamma" />
        <DashboardGamma />
      </Page>
    )
  }
}

export default DashboardGammaPage
