import logo from './assets/Logo.svg';
import TrackShipmentBox from './Components/TrackShipmentBox';
import TrackingView from './Components/TrackingView';
import './App.scss';
import axios from 'axios';
import { Component } from 'react';

class App extends Component {
  state ={
    trackDetails:{}
  }
  render(){
     const handleSubmit = (e) =>{
            e.preventDefault();
            console.log(e.target[0].value)
            axios.get(`https://tracking.bosta.co/shipments/track/${e.target[0].value}`)
            .then(res => {
              this.setState({trackDetails:res.data})
        })
        }
       const handleClick = () =>{
          this.setState({trackDetails: {}});
        }
        const {trackDetails} = this.state;
      return (
        <div className="App">
          <header className="App-header">
            <div className="container">
              <nav>
                <ul className="d-flex justify-content-between">
                  <li><img src={logo} className="App-logo" alt="logo" /></li>
                  {Object.keys(this.state.trackDetails).length !== 0 ? (<li onClick = {handleClick}><span>تتبع شحنتك</span></li>) : ""}
                </ul>
              </nav>
            </div>
          </header>
          <div className="text-center">
            {Object.keys(this.state.trackDetails).length === 0 ? <TrackShipmentBox handleSubmit={handleSubmit} /> 
                                                              : <div className="mt-5 container">
                                                                  <div className="row">
                                                                      <TrackingView trackDetails={trackDetails}/>
                                                                  </div>
                                                                </div>}

          </div>
        </div>
      );
    }
}
export default App;
