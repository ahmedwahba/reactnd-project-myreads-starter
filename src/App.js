import React from 'react';
import { BrowserRouter , Route, Switch } from 'react-router-dom';
import Search from './Pages/Search';
import Main from './Pages/Main';
import './App.css';

class BooksApp extends React.Component {
  render() {
    return (
      <BrowserRouter> 
          <div>
            <Switch>
                <Route exact path ="/" component={Main} />
                <Route path ="/search" component={Search} />
            </Switch>
          </div>
      </BrowserRouter>
    )
  }
}

export default BooksApp
