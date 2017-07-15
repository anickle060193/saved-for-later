import * as React from 'react';
import * as ReactRouter from 'react-router-dom';

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
            <SaveForLaterForm onSaved={( savedTextKey ) => this.onSaved( savedTextKey )} />
        );
    }

    private onSaved( savedTextKey: string )
    {
        this.props.history.push( '/saved/' + savedTextKey );
    }
}