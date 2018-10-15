import * as React from 'react';
import { Component } from 'react';

import './GenderStat.css';

enum Gender {
  MEN = 'Men',
  WOMEN = 'Women'
}

interface GenderStatProps {
  gender: string;
  rate: number;
}

export default class GenderStat extends Component<GenderStatProps> {

  public render() {
    const { gender, rate } = this.props;

    return (
      <div className="gender-stat">
        <p className="rate">{rate} %</p>
        <img 
          src={gender === Gender.MEN ? require('../../icons/man.svg') : require('../../icons/woman.svg')}
        />
        <div className="donut-chart"/>
        <p className="gender-label">{gender}</p>
      </div>
    );
  }
}

