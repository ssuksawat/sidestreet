import React, { Component } from 'react';
import LineChart from './linechart.component';
import CentralAxis from './barchart.component';
import { VictoryPie, VictoryChart, VictoryLine, VictoryAxis } from 'victory';

class SentimentTrends extends Component {

  constructor(props) {
    super(props);

    this.state = {
      data: this.props.sentimentData
    }
  }


  render() {
    if (!this.props.sentimentData) {
      return (
        <p>Loading Sentiment Data...</p>
      );
    }

    return (

      <section className="sentiments">
        <div className="center-content">
          <div className="row">
            <h2>Consumer/Economic Sentiment - News in Past Two Months</h2>
            <div className="col-md-8">
              <div className="sentiment-chart">
                <CentralAxis
                  data={this.props.sentimentData}
                  x={'newsTopic'}
                  y={'sentimentScore'}
                  height={300}
                  width={500}
                />
              </div>
            </div>

            <div className="google-summary col-md-4 card card-block">
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard
              dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
              It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
            </div>
          </div>
        </div>
      </section>

    )
  }

}


export default SentimentTrends;
