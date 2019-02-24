import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Home extends Component {
  state = {
    sites: [],
  };

  componentDidMount = () =>
    fetch('/api/fakesites')
      .then((sites) => sites.json())
      .then((sites) => this.setState({ sites }))
      .catch((error) => alert(`Error fetching the data, please check the console for more info.`) && console.error({ error }));

  render() {
    return (
      <div>
        <br />
        <h1>
          This <span role="img">📰</span> Websites are <span role="img">💩</span>{' '}
        </h1>
        <br />
        <div className="container">
          {this.state.sites.map((site) => (
            <div className="card" key={site.id}>
              <h2 className="card-title">{site.title}</h2>
              <div className="card-body">
                <ul>
                  <li>Category: {site.category}</li>
                  <li>👍: {site.likes !== null ? site.likes : <span role="img">👎</span>}</li>
                  <li>Twitter followers: {site.twitter_followers !== null ? site.twitter_followers : <span role="img">0️⃣</span>}</li>
                  <li>Google 🔍: {site.google_searches}</li>
                  <li>
                    <button className="btn">
                      <Link
                        to={{
                          pathname: `/${site.title.trim()}/articles`,
                          state: {
                            id: site.id,
                            title: site.title,
                            category: site.category,
                          },
                        }}>
                        <span>📰</span> News
                      </Link>
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
