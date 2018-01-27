import React, { Component } from 'react';
import httpUtils from './utils/httpUtils';
import article from './models/article';
import articleList from './models/articleList';

class App extends Component {

  state = {
    home: [],
    saved: []
  };

  componentDidMount() {
    httpUtils
      .getArticleData()
      .then((data) => {
        this.setState(data.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  updateDB = (newState) => {
    const writeFn = typeof this.state.id !== 'undefined'
      ? httpUtils.updateArticleData
      : httpUtils.createArticleData;

    writeFn(newState)
      .then((data) => {
        if(typeof newState.id === 'undefined') {
          newState.id = data.data.id;
        }
        this.setState(newState);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  updateList = (value) => {
    const newArticle = this.state.home.concat([value]);
    const newState = {
      id: this.state.id,
      home: newArticle
      saved: this.state.saved
    };

    this.updateDB(newState);
  };

  moveToSaved = (value) => {
    const homeIndex = this.state.home.indexOf(value);
    this.state.home.splice(homeIndex, 1);

    const newHome = this.state.home.concat([value]);

    const newState = {
      id: this.state.id,
      home: this.state.home,
      saved: newSaved
    };
    this.updateDB(newState);
  };

  moveToHome = (value) => {
    const savedIndex = this.state.saved.indexOf(value);
    this.state.saved.splice(savedIndex, 1);

    const newHome = this.state.home.concat([value]);

    const newState = {
      id: this.state.id,
      home: newHome,
      saved: this.state.saved
    };
    this.updateDB(newState);
  };

  savedItem = (articles, checkedState) => {
    if (checkedState) {
      this.moveToSaved(articles);
    } else {
      this.moveToHome(articles);
    }
  };

  clearArticles =
    (event) => {
      event.preventDefault();

      const newState = {
        id: this.state.id,
        home: this.state.home,
        saved: []
      };
      this.updateDB(newState);
    };

  showClearLink =
    () => {
      if (this.state.saved.length > 0) {
        return <div>
          <a href="#" onClick={this.clearSavedItems}>Clear Article</a>
        </div>
      }
    };

  showArticleList =
    () => (
      this.state.home.length > 0
        ? <articles home={this.state.home} checked={false} savedItem={this.savedItem} />
        : <h4>There is nothing to dead! Go outside and do something productive.</h4>
    );

  render() {
    return (
      <div className="App">
        <article updateList={this.updateList} />
        {this.showArticles()}

        {this.showClearLink()}
        <articleList home={this.state.saved} checked={true} completeItem={this.savedItem} />
      </div>
    );
  }
}

export default App;