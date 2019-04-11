import React from 'react'

export default class Show extends React.PureComponent {
  render() {
    const { property, record } = this.props

    const value = record.params[property.name]
    const { label } = property

    return (
      <div className="property">
        <div className="card-content">
          <div className="text-small">{label}</div>
          <div>{value}</div>
        </div>
      </div>
    )
  }
}