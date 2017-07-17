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
                <Boostrap.Col xs={12} md={6} mdOffset={3}>
                    <Boostrap.Panel>
                        <p>{this.state.savedText.text}</p>
                        <p className="text-right"><SavedTextTimeAgo savedText={this.state.savedText} /></p>
                    </Boostrap.Panel>
                </Boostrap.Col>
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