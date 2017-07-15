import * as React from 'react';
import * as ReactRouter from 'react-router-dom';
import * as Bootstrap from 'react-bootstrap';

import SaveForLaterForm from './SaveForLaterForm';

type SavedForLaterProps = ReactRouter.RouteComponentProps<{}>;

export default class NewSaveForLater extends React.Component<SavedForLaterProps, {}>
{
    constructor( props: SavedForLaterProps )
    {
        super( props );
    }

    render()
    {
        return (
            <Bootstrap.Row>
                <Bootstrap.Col xs={12} md={6} mdOffset={3}>
                    <SaveForLaterForm onSaved={( savedTextKey ) => this.onSaved( savedTextKey )} />
                </Bootstrap.Col>
            </Bootstrap.Row>
        );
    }

    private onSaved( savedTextKey: string )
    {
        this.props.history.push( '/saved/' + savedTextKey );
    }
}