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

  // public drawSvg = () => {
  //   var svgContainer = d3.select("body").append("svg")
  //     .attr("width", 200)
  //     .attr("height", 200);
    
  //   var circle = svgContainer.append("circle")
  //     .attr("cx", 30)
  //     .attr("cy", 30)
  //     .attr("r", 20);
  // }

  public render() {
    const { gender, rate } = this.props;

    return (
      <div className="gender-stat">
        <p className="rate">{rate} %</p>
        <img 
          src={gender === Gender.MEN ? require('../../icons/man.svg') : require('../../icons/woman.svg')}
        />
        <p className="gender-label">{gender}</p>
      </div>
    );
  }
}

