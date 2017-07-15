import * as React from 'react';
import * as Bootstrap from 'react-bootstrap';
import * as ReactRouter from 'react-router-dom';

import AppNavbar from './components/AppNavbar';
import NewSaveForLater from './scenes/NewSaveForLater';
import SavedTexts from './components/SavedTexts';

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
                                <ReactRouter.Redirect to="/" />
                            </ReactRouter.Switch>

                            <SavedTexts />

                        </Bootstrap.Col>
                    </Bootstrap.Row>
                </Bootstrap.Grid>
            </ReactRouter.BrowserRouter>
        );
    }
}