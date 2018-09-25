import React from 'react'
import { Progress } from 'antd'

import './style.scss'

class ProgressCard extends React.Component {
  render() {
    let { title, note, currentValue, percent, dataColor } = this.props

    return (
      <div className="progressCard card">
        <div className="card-body">
          <div className="progressCard__head">
            <div className="porgressCard__name">
              {title && <h2 className="progressCard__title">{title}</h2>}
              {note && <p className="progressCard__note">{note}</p>}
            </div>
            {currentValue && (
              <div className="progressCard__value text-primary">
                <span className="progressCard__valueText" style={{ color: dataColor }}>
                  {currentValue}
                </span>
              </div>
            )}
          </div>
          <div className="progressCard__line">
            <Progress
              type="line"
              percent={+percent}
              showInfo={false}
              strokeWidth={12}
              strokeColor={dataColor}
            />
          </div>
          {percent && (
            <div className="progressCard__lineDescr">
              <span className="progressCard__lineDescrTitle">Change</span>
              <span className="progressCard__lineValue">{percent + '%'}</span>
            </div>
          )}
        </div>
      </div>
    )
  }
}

export default ProgressCard
