import * as React from 'react';
import { Component } from 'react';

import AgeStat from './components/AgeStat';
import GenderStat from './components/GenderStat';
import RegionFilter from './components/RegionFilter';

import './App.css';

interface AppState {
  regionData: any;
  isComparisonActive: boolean;
}

const regions = require('./data/regions.json');

class App extends Component<{}, AppState> {

  public constructor(props: {}) {
    super(props);
    this.state = {
      isComparisonActive: false,
      regionData: undefined
    };
  }

  public handleSelect = (regionName: string) => {
    const dataFilename = regions.find((region: any) => region.name === regionName).code;
    const file = require(`./data/${dataFilename}.json`);
    this.setState({ regionData: file });
  }

  public handleComparison = (compare: boolean) => {
    this.setState({ isComparisonActive: compare });
  }

  public render() {
    const { regionData, isComparisonActive } = this.state;

    return (
      <div className="App">
        <header>
          <RegionFilter
            onSelectRegion={this.handleSelect}
            onToggleComparison={this.handleComparison}
          />
        </header>
        <main>
          <h2 className="App-title">Contract for the professionalization of employees</h2>
          <h1>Distribution of interns by gender and age group</h1>
          <h3>in 2016</h3>
          { regionData
            ? (
              !isComparisonActive ? (
                <div className="stat-container">
                  <div className="gender-stat-container">
                    <GenderStat
                      gender='Men'
                      rate={regionData.data_sexe.homme.map((content: any) => Math.round(content.content[0]))}
                    />
                    <GenderStat
                      gender='Women'
                      rate={regionData.data_sexe.femme.map((content: any) => Math.round(content.content[0]))}
                    />
                  </div>
                  <div className="age-stat-container">
                    { regionData.data_age.map((data: any, index: number) => {
                      return <AgeStat
                        key={index}
                        label={data.title}
                        rate={data.content[0]}
                        total={data.content[1]}
                      />;
                    })}
                  </div>
                </div>
              ) : (
                <div className="stat-container">
                  <div className="gender-stat-container">
                    <GenderStat
                      gender='Men'
                      rate={regionData.data_national_sexe.homme.map((content: any) => Math.round(content.content[0]))}
                    />
                    <GenderStat
                      gender='Women'
                      rate={regionData.data_national_sexe.femme.map((content: any) => Math.round(content.content[0]))}
                    />
                  </div>
                  <div className="age-stat-container">
                    { regionData.data_national_age.map((data: any, index: number) => {
                      return <AgeStat
                        key={index}
                        label={data.title}
                        rate={data.content[0]}
                        total={data.content[1]}
                      />;
                    })}
                  </div>
                </div>
              )
            ) : <p className="default-text">Choose a region to display some data</p>
          }
        </main>
      </div>
    );
  }
}

export default App;
