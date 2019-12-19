
import React from 'react'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'

import RedirectCheck from './component/redirectionCheck'
import Success_redirect from './component/success_redirect'
import Failed_redirect from './component/failed_redirect'

function App() {
    return (
        <Router>               
            <Switch>                
                <Route path="/success" component={Success_redirect} />
                <Route path="/errorpage" component={Failed_redirect} />
                <Route component={RedirectCheck} />
            </Switch>
        </Router>        
    )
}



export default App;
