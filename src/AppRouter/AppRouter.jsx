import React from 'react';
import { HashRouter as Router, Switch, Route} from 'react-router-dom';
import Home from '../Pages/Home/Home';
import Shop from '../Pages/Shop/Shop';
import Live from '../Pages/Live/Live';
import Mine from '../Pages/Mine/Mine';
import Layout from '../Pages/Layout/Layout';
import City from '../Pages/City/City';

export default function AppRouter() {
  return (
    <>
    <Router>
        <Switch>
            <Route exact path={'/city'} component={City} />
            <Layout>
                <Route exact path={'/'} component={Home} />
                <Route path={'/shop'} component={Shop} />
                <Route path={'/live'} component={Live} />
                <Route path={'/mine'} component={Mine} />
            </Layout>
        </Switch>
    </Router>
    </>
  )
}
