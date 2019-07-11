import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './components/home/home';
import Quiz from './components/quiz/quiz';

const Routes = () => {
        return(
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/quiz/" exact component={Quiz}/>
            </Switch>
        )
}

export default Routes;