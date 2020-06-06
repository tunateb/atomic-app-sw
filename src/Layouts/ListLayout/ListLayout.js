import React from "react";
import "./ListLayout.css";
import ProfileCard from "../../components/ProfileCard/ProfileCard";

class ListLayout extends React.Component {
  state = {
    list: [],
  };

  componentDidMount() {
    this.fetchList();
  }

  fetchList = async () => {
    const baseUrl = "https://swapi.dev/api";

    const response = await fetch(`${baseUrl}/${this.props.url}`);

    const data = await response.json();
    this.setState({ list: data.results });
    
  };

  render() {
      return (
        <div className="list-grid">
          {this.state.list.map((item, index) => (
            <ProfileCard
              title={item[this.props.titleKey]}
              text={item[this.props.textKey]}
              buttonText={` ${this.props.name} Details`}
              onButtonClick={() => alert(`I like ${item[this.props.titleKey]}`)}
              imgSrc={`https://unsplash.it/300/30${index}`}
              key={item[this.props.titleKey]}
              linkText={this.props.linkText}
              linkPath = {this.props.linkPath}
            />
          ))}
        </div>
      );
  }
}

export default ListLayout;
