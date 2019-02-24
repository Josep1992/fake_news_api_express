import React from 'react';
import { Link } from 'react-router-dom';

export default class Articles extends React.Component {
  state = {
    site: [],
  };

  componentDidMount = () => {
    const id = this.props.location.state.id;
    fetch(`/api/fakesites/articles/${id}`)
      .then((articles) => articles.json())
      .then((articles) => this.setState({ site: articles }))
      .catch((error) => alert(`Error fetching the data, please check the console for more info.`) && console.error({ error }));
  };

  render() {
    const { title, category } = this.props.location.state;
    return (
      <>
        <h1>{title} articles</h1>
        <h4>
          {category} <span role="img">📰</span> news
        </h4>
        <button className="btn">
          <Link to="/">
            <span role="img">🔙</span> <span role="img">🏠</span>
          </Link>
        </button>
        {this.state.site.length !== 0 &&
          this.state.site.articles.map((article, index) => (
            <div className="card" key={index}>
              <div className="card-title">
                <h2>{article.title}</h2>
                <span role="img">📅 {article.date} </span>
              </div>
              <div className="card-body">
                <p>{article.description}</p>
              </div>
            </div>
          ))}
      </>
    );
  }
}
