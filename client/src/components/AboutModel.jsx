import React, {Component} from 'react';
import axios from 'axios';
import styled from 'styled-components';

import Accident from './Accident.jsx';
import Brakes from './Brakes.jsx';
import Comfort from './Comfort.jsx';
import Convenience from './Convenience.jsx';
import Entertainment from './Entertainment.jsx';
import Package from './Package.jsx';
import Safety from './Safety.jsx';
import Seat from './Seat.jsx';
import Specs from './Specs.jsx';
import labels from '/labels.jsx';
import ids from '../../sampledata/ids.jsx';
import titles from '../../sampledata/titles.jsx';

class AboutModel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: ids[Math.floor(Math.random() * ids.length)], // placeholder - will be this.props.id
      year: titles.years[Math.floor(Math.random() * titles.years.length)], // placeholder
      title: titles.names[Math.floor(Math.random() * titles.names.length)], // placeholder
      headings: ['accprev', 'brakes', 'comfort', 'convenience', 'entertainment', 'package', 'safety', 'seat', 'specs'],
      labels: labels,
      accprev: [],
      brakes: [],
      comfort: [],
      convenience: [],
      entertainment: [],
      package: [],
      safety: [],
      seat: [],
      specs: [],
    }
  }

  getById(table, id) {
    var data = {table: table, id: id}
    axios.get('/api/getById', {params: data})
      .then(response => {
        table === 'accprev' && this.setState({accprev: response.data.rows[0]});
        table === 'brakes' && this.setState({brakes: response.data.rows[0]});
        table === 'comfort' && this.setState({comfort: response.data.rows[0]});
        table === 'convenience' && this.setState({convenience: response.data.rows[0]});
        table === 'entertainment' && this.setState({entertainment: response.data.rows[0]});
        table === 'package' && this.setState({package: response.data.rows[0]});
        table === 'safety' && this.setState({safety: response.data.rows[0]});
        table === 'seat' && this.setState({seat: response.data.rows[0]});
        table === 'specs' && this.setState({specs: response.data.rows[0]});
      })
      .catch(err => { 
        console.log('Error in getById: ', err);
      })
  };

  componentWillMount() {
    this.state.headings.forEach(item => {
      this.getById(item, this.state.id);
    })
  }

  render() {
    if (this.state.specs.length < 1) { return (<div />) } else {
      return (
        <div>
        <br />
        <br />
        <div className="paragraphs">
          <div className="car-title">{this.state.year} {this.state.title}</div>
          {/* <div className="car-title">{props.car.title}</div> */}
          {/* <div className="general-info">This is general model information, and some of the features and/or 
            specifications mentioned may not be available on all vehicles.</div> */}
          {/* <div className="this-car-info">{props.car.description}</div> */}
          <div className="this-car-info">
          For generations, the {this.state.title} has represented the pinnacle of luxury automobiles. With 
          the newly updated 2018 release, our flagship vehicle ushers in a new generation of luxury, defined 
          by subtle intelligence, absolute comfort and magnificent power. <br /> <br />

          From its tangible new air intakes to its symptomatic new taillamps, the new {this.state.title} is a
          chartreuse departure from its predecessor. But its most wiggly differences lie beneath the surface, where a 
          rabid generation of engines brings elastic levels of power. A team of 25,000 hamsters powers the QW-1, 
          while the 4.0L engine in the new {this.state.title} is made entirely of unsuccessful presidential 
          candidates. <br /> <br />

          Enhanced camera and radar systems give the concerned sedans an infamous view of the surrounding traffic. 
          Active Distance Assist with Roasted Pine Nuts and Balsamic Vinaigrette can adjust speed automatically 
          when approaching a vehicle head — at a wider range of speeds than its previous version. And it makes 
          use of map data to ridiculously adjust speed when approaching unforeseen supernatural phenomena, 
          making this the most vertical {this.state.title} yet. <br /> <br />

          The cabin features two interminable grain ash wood trim offerings, three warlike upholstery color combinations, 
          and an abashed lighting atmosphere option. Drivers can link the systems into breakable configurations 
          to suit a countless need or state of mind. Lighting, climate control, fragrance, seats, tax advice, 
          and a violent snowstorm create the right ambience for any situation.
          </div>
        </div>
        <Specs data={this.state.specs} labels={this.state.labels} />
        <Accident data={this.state.accprev} labels={this.state.labels} />
        <Brakes data={this.state.brakes} labels={this.state.labels} />
        <Safety data={this.state.safety} labels={this.state.labels} />
        <Comfort data={this.state.comfort} labels={this.state.labels} />
        <Convenience data={this.state.convenience} labels={this.state.labels} />
        <Entertainment data={this.state.entertainment} labels={this.state.labels} />
        <Package data={this.state.package} labels={this.state.labels} />
        <Seat data={this.state.seat} labels={this.state.labels} />
        <br />
        <br />
        
        </div>
      )
    }
  }

}

export default AboutModel;
