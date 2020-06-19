import React, { Suspense, lazy } from 'react';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
// import Header from './components/Header/Header';
// import SummaryPage from './pages/Summary';
// import Contact from './pages/Contact';
const Contact = lazy(() => import('./pages/Contact'));
const SummaryPage = lazy(() => import('./pages/Summary'));
const Header = lazy(() => import('./components/Header/Header'));

function App() {
  return (
    <div className='App'>
      <Provider store={store}>
        <Router>
          <Suspense fallback={<div>Loading...</div>}>
            <Header></Header>
            <Switch>
              <Route exact path='/' component={SummaryPage}></Route>
              <Route path='/contact' component={Contact}></Route>
            </Switch>
          </Suspense>
        </Router>
      </Provider>
      Hello 1
    </div>
  );
}

export default App;
