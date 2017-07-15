import * as React from 'react';
import * as Bootstrap from 'react-bootstrap';
import * as ReactRouter from 'react-router-dom';

import AppNavbar from './components/AppNavbar';
import NewSaveForLater from './scenes/NewSaveForLater';
import SavedForLater from './scenes/SavedForLater';

export default class App extends React.Component<{}, {}>
{
    render()
    {
        return (
            <ReactRouter.BrowserRouter>
                <Bootstrap.Grid>
                    <AppNavbar />

                    <Bootstrap.Row>
                        <Bootstrap.Col xs={12} md={6} mdOffset={3}>

                            <ReactRouter.Switch>
                                <ReactRouter.Route exact={true} path="/" component={NewSaveForLater} />
                                <ReactRouter.Route path="/saved/:saved_text_key" component={SavedForLater} />
                                <ReactRouter.Redirect to="/" />
                            </ReactRouter.Switch>

                        </Bootstrap.Col>
                    </Bootstrap.Row>
                </Bootstrap.Grid>
            </ReactRouter.BrowserRouter>
        );
    }
}