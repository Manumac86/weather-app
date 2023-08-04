import React from 'react';
import styled from 'styled-components';
import Location from './components/Location';
import Icon from './components/Icon';
import Temperature from './components/Temperature';
import Description from './components/Description';
import Loader from './components/Loader';


// Styled Components
const StyledApp = styled.div`
  align-items: center;
  background: rgb(2,0,36);
  background: linear-gradient(0deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 5%, rgba(0,212,255,1) 100%);
  color: white;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  height: 100vh;
  justify-content: center;
  padding: 0 0 0 0;
`;

const StyledWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  height: 50vh;
  justify-content: center;
  width: 100%;
  @media (max-width: 530px) {
    flex-direction: column;
    justify-content: center;
  }
`

// React Component
export default class App extends React.Component {
  constructor() {
    super();

    this.state = {
      loading: true,
      lat: 0,
      lon: 0,
      temp: 0,
      degree: "C",
      description: "Sunny",
      timezone: '',
      icon: ''
    }

    this.location = {
      lat: 0,
      lon: 0,
    }
    //this.api = `${this.proxy}${process.env.REACT_APP_API}?lat=${this.location.lat}&lon=${this.location.lon}&appid=${process.env.REACT_APP_API_KEY}`
  }

  componentDidMount() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition( async position => {
        this.location.lat = position.coords.latitude;
        this.location.lon = position.coords.longitude;
        await this.fetchData();
      })
    };

  }

  fetchData = () => {
    fetch(`${process.env.REACT_APP_API}?lat=${this.location.lat}&lon=${this.location.lon}&units=metric&appid=${process.env.REACT_APP_API_KEY}`)
    .then(response => {
      return response.json();
    })
    .then(data => {
      console.log(data)
      const timezone = data.timezone.replace(/\//g, ', ');
      const icon = `https://openweathermap.org/img/wn/${data.current.weather[0].icon}@2x.png`;
      const descriptionFirstLetter = data.current.weather[0].description.charAt(0).toUpperCase();
      const description = descriptionFirstLetter + data.current.weather[0].description.slice(1);

      this.setState({
        loading: false,
        temp: data.current.temp,
        description: description,
        timezone: timezone,
        icon: icon
      })
    });
  }

  render() {
    if(this.state.loading) {
      return (
        <StyledApp>
          <Loader />
        </StyledApp>
      );
    } else {
      return (
        <StyledApp>
          <StyledWrapper>
            <Location location={this.state.timezone} />
            <Temperature temp={this.state.temp} degree={this.state.degree} />
          </StyledWrapper>
          <StyledWrapper>
            <Icon image={this.state.icon} />
            <Description description={this.state.description} />
          </StyledWrapper>
        </StyledApp>
      );
    }
  }
}
