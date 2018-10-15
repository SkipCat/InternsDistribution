import * as React from 'react';
import { Component } from 'react';

import './AgeStat.css';

interface AgeStatProps {
  label: string;
  total: number;
  rate: string;
}

export default class AgeStat extends Component<AgeStatProps> {

  public render() {
    const { label, total, rate } = this.props;

    return (
      <div className="age-stat">
        <p className="age-stat-label">{label}</p>
        <div className="bar-chart-container">
          <div className="bar-chart">
            <div className="bar-chart-indicator" style={{ width: `${rate}%` }}/>
          </div>
          <div className="separator"/>
          <div className="bar-chart-legend">
            <p className="age-stat-total">{total}</p>
            <p className="rate age-stat-rate">{rate} %</p>
          </div>
        </div>
      </div>
    );
  }
}
