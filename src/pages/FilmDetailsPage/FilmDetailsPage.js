import React from "react";
import ProfileCard from "../../components/ProfileCard/ProfileCard";


class FilmDetailsPage extends React.Component {
  state = {
    list: [],
  };

  componentDidMount() {
    this.fetchDetails();
  }
  

  fetchDetails = async () => {
    const baseUrl = "https://swapi.dev/api/films";
    const response = await fetch(`${baseUrl}/1`);
    const data = await response.json();

    this.setState({ list: data });
    console.log(this.state.list);
  };

  render() {
    return (
      <ProfileCard
        linkText="Go Back"
        linkPath="films"
        imgSrc="https://unsplash.it/600/300"
      >
        <ul>
          <li>
            <strong>Title:</strong> {this.state.list.title}
          </li>
          <li>
            <strong>Release Date:</strong> {this.state.list.release_date}
          </li>
          <li>
            <strong>Director:</strong> {this.state.list.director}
          </li>
          <li>
            <strong>Producer:</strong> {this.state.list.producer}
          </li>

        </ul>
      </ProfileCard>
    );
  }
}

export default FilmDetailsPage;
