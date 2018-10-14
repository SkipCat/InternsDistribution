import * as React from 'react';
import { Component , Fragment } from 'react';
import Switch from 'react-switch';

import './RegionFilter.css';

interface RegionFilterProps {
  region?: string;
  onSelectRegion: any;
  onToggleComparison: any;
}

interface RegionFilterState {
  regionName: string | undefined;
  isComparisonActive: boolean;
}

const regions = require('../../data/regions.json');
const closeIcon = require('../../icons/close.svg');

export default class RegionFilter extends Component<RegionFilterProps, RegionFilterState> {

  public constructor(props: RegionFilterProps) {
    super(props);
    this.state = {
      isComparisonActive: false,
      regionName: undefined
    };
  }

  public handleSelect = () => {
    const regionSelect: any = document.getElementById('select-region');
    const regionName = regionSelect!.options[regionSelect.selectedIndex].value;

    this.setState({ regionName });
    this.props.onSelectRegion(regionName);
  }

  public toggleComparison = () => {
    const compare = !this.state.isComparisonActive;
    this.setState({ isComparisonActive: compare });
    this.props.onToggleComparison(compare);
  }

  public removeSelect = () => {
    this.setState({ regionName: undefined });
  }

  public render() {
    const { regionName, isComparisonActive } = this.state;

    return (
      !regionName ? (
        <div className="data-filter">
          <select id="select-region">
            { regions.map((region: any) => {
              return <option key={region.code} value={region.name}>{region.name}</option>;
            })}
          </select>
          <button onClick={this.handleSelect}>OK</button>
        </div>
      ) : (
        <Fragment>
          <div className="data-filter filter-compare">
            <Switch
              checked={isComparisonActive}
              onChange={this.toggleComparison}
              offColor="#BEBEBE"
              onColor="#E8A634"
              uncheckedIcon={false}
              checkedIcon={false}
              height={15}
              width={35}
              handleDiameter={22}
              className="toggle"
            />
            <p>National comparison</p>
          </div>
          <div className="data-filter filter-selected">
            <img src={closeIcon} onClick={this.removeSelect}/>
            <p id="region-name">{regionName}</p>
          </div>
        </Fragment>
      )
    );
  }
}
