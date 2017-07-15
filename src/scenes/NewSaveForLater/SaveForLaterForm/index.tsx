import * as React from 'react';
import * as Bootstrap from 'react-bootstrap';
import * as firebase from 'firebase';

import * as database from './../../../database';

interface SaveForLaterFormState
{
    text: string;
    textError: string | null;
}

export default class SaveForLaterForm extends React.Component<{}, SaveForLaterFormState>
{
    allSavedTexts: firebase.database.Reference;

    constructor( props: { } )
    {
        super( props );

        this.state = { text: '', textError: null };
    }

    componentWillMount()
    {
        this.allSavedTexts = firebase.database().ref( 'saved_texts' );
    }

    componentWillUnmount()
    {
        this.allSavedTexts.off();
    }

    render()
    {
        return (
            <form>
                <Bootstrap.FormGroup validationState={!this.state.textError ? undefined : 'error'}>
                    <Bootstrap.ControlLabel>Text to Save</Bootstrap.ControlLabel>
                    <Bootstrap.FormControl componentClass="textarea" rows={10} value={this.state.text} onChange={( e ) => this.onChange( e )} />
                    <Bootstrap.HelpBlock>{this.state.textError}</Bootstrap.HelpBlock>
                </Bootstrap.FormGroup>
                <Bootstrap.Button type="submit" bsStyle="primary" block={true} onClick={( e ) => this.onSubmit( e )}>
                    Save
                </Bootstrap.Button>
            </form>
        );
    }

    private onChange( e: React.FormEvent<React.Component<Bootstrap.FormControlProps, {}>> )
    {
        this.setState( { text: ( e.target as HTMLTextAreaElement ).value } );
    }

    private onSubmit( e: React.FormEvent<React.ClassicComponent<Bootstrap.ButtonProps, {}>> )
    {
        e.preventDefault();

        database.createSavedText( this.allSavedTexts, this.state.text ).then(
            () =>
            {
                console.log( 'Success' );
                this.setState( { text: '', textError: null } );
            },
            ( error ) =>
            {
                console.log( 'Error' );
                this.setState( { textError: error } );
            }
        );
    }
}