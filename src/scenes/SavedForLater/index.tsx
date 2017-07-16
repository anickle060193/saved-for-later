import * as React from 'react';
import * as firebase from 'firebase';
import * as Boostrap from 'react-bootstrap';
import * as ReactRouter from 'react-router-dom';

import { SavedTextTimeAgo } from './../../components/SavedText';
import * as database from './../../database';

type SavedForLaterProps = ReactRouter.RouteComponentProps<{ saved_text_key: string }>;

interface SavedForLaterState
{
    savedText: database.SavedText | null;
}

export default class SavedForLater extends React.Component<SavedForLaterProps, SavedForLaterState>
{
    private savedTextKey: string;
    private savedTextRef: firebase.database.Reference | null;

    constructor( props: SavedForLaterProps )
    {
        super( props );

        this.savedTextKey = this.props.match.params.saved_text_key;

        this.state = { savedText: null };
    }

    componentWillMount()
    {
        this.savedTextRef = firebase.database().ref( 'saved_texts/' + this.savedTextKey );
        this.savedTextRef.on( 'value',
            ( data ) =>
            {
                if( data && data.exists() )
                {
                    this.setState( { savedText: data.val() } );
                }
                else
                {
                    this.setState( { savedText: null } );
                    this.props.history.replace( '/' );
                }
            },
            ( error: Object | null ) =>
            {
                console.error( error );
                this.setState( { savedText: null } );
            }
        );
    }

    render()
    {
        if( this.state.savedText )
        {
            return (
                <Boostrap.Jumbotron className="text-center">
                    <h2>{this.state.savedText.text}</h2>
                    <p><SavedTextTimeAgo savedText={this.state.savedText} /></p>
                </Boostrap.Jumbotron>
            );
        }
        else
        {
            return null;
        }
    }

    componentWillUnmount()
    {
        if( this.savedTextRef )
        {
            this.savedTextRef.off();
            this.savedTextRef = null;
        }
    }
}