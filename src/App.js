import './App.css';
import Header from './componants/Header/Header';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './componants/Home/Home';
import ErrorPage from './componants/ErrorPage/ErrorPage';
import Resturant from './componants/Resturant/Resturant';
import About from './componants/About/About';
import MealDetail from './componants/MealDetail/MealDetail';

function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Switch>
        <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route path='/home'>
            <Home></Home>
          </Route>
          <Route exact path='/resturant'>
            <Resturant></Resturant>
          </Route>
          <Route exact path='/resturant/:id'>
            <MealDetail></MealDetail>
          </Route>
          <Route path='/about'>
            <About></About>
          </Route>
          <Route>
            <ErrorPage></ErrorPage>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
