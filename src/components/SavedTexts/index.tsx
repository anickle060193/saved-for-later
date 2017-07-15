import * as React from 'react';
import * as firebase from 'firebase';

import * as database from './../../database';

import SavedText from './../SavedText';

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
        let savedTextEntries = Object.keys( this.state.savedTexts ).map( ( key ) =>
        (
            <SavedText key={key as string} savedText={this.state.savedTexts[ key ]} />
        ) );

        return (
            <div>
                {savedTextEntries}
            </div>
        );
    }
}