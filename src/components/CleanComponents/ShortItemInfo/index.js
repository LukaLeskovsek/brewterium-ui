import React from 'react'
import './style.scss'

class ShortItemInfo extends React.Component {
  render() {
    let { actionData, name, note, img, size } = this.props

    let className = 'shortItemInfo '

    if (size === 'large') {
      className += 'shortItemInfo--large '
    }

    return (
      <div className={className}>
        {img && (
          <div className="shortItemInfo__img">
            <img src={img} alt="alt" />
          </div>
        )}
        <div className="shortItemInfo__description">
          {name && <h2 className="shortItemInfo__name">{name}</h2>}
          {note && <p className="shortItemInfo__note">{note}</p>}
        </div>
        {actionData && <div className="shortItemInfo__actionData">{actionData}</div>}
      </div>
    )
  }
}

export default ShortItemInfo
