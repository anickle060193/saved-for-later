import * as React from 'react';
import * as Bootstrap from 'react-bootstrap';

import AppNavbar from './components/AppNavbar';
import SaveForLaterForm from './components/SaveForLaterForm';
import SavedTexts from './components/SavedTexts';

export default class App extends React.Component<{}, {}>
{
    render()
    {
        return (
            <Bootstrap.Grid>
                <AppNavbar />

                <Bootstrap.Row>
                    <Bootstrap.Col xs={12} md={6} mdOffset={3}>

                        <SaveForLaterForm />

                        <SavedTexts />

                    </Bootstrap.Col>
                </Bootstrap.Row>
            </Bootstrap.Grid>
        );
    }
}