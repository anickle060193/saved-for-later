import * as React from 'react';
import * as firebase from 'firebase';
import * as Bootstrap from 'react-bootstrap';

import Masonry from 'react-masonry-component';

import * as database from './../../../database';

import { SavedTextTimeAgo } from './../../../components/SavedText';

interface SavedTextsState
{
    savedTexts: { [ key: string ]: database.SavedText };
}

export default class SavedTexts extends React.Component<{}, SavedTextsState>
{
    allSavedTexts: firebase.database.Query;

    constructor( props: { } )
    {
        super( props );

        this.state = { savedTexts: { } };
    }

    componentWillMount()
    {
        this.allSavedTexts = firebase.database().ref( 'saved_texts' ).orderByChild( 'createdAt' );

        this.allSavedTexts.on( 'child_added', ( data ) =>
        {
            if( data )
            {
                this.setState( ( prevState: SavedTextsState ) =>
                {
                    prevState.savedTexts[ data.key as string ] = data.val();
                    return { savedTexts: prevState.savedTexts };
                } );
            }
        } );

        this.allSavedTexts.on( 'child_changed', ( data ) =>
        {
            if( data )
            {
                this.setState( ( prevState: SavedTextsState ) =>
                {
                    prevState.savedTexts[ data.key as string ] = data.val();
                    return { savedTexts: prevState.savedTexts };
                } );
            }
        } );

        this.allSavedTexts.on( 'child_removed', ( data ) =>
        {
            if( data )
            {
                this.setState( ( prevState: SavedTextsState ) =>
                {
                    delete prevState.savedTexts[ data.key as string ];
                    return { savedTexts: prevState.savedTexts };
                } );
            }
        } );
    }

    componentWillUnmount()
    {
        this.allSavedTexts.off();
    }

    render()
    {
        return (
            <Masonry>
                {
                    Object.keys( this.state.savedTexts ).map( ( key ) =>
                        <div key={key} className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                            <Bootstrap.Panel>
                                <p>{this.state.savedTexts[ key ].text}</p>
                                <small>
                                    <SavedTextTimeAgo savedText={this.state.savedTexts[ key ]} />
                                </small>
                            </Bootstrap.Panel>
                        </div>
                    ).reverse()
                }
            </Masonry>
        );
    }
}