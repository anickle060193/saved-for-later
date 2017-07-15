import * as firebase from 'firebase';

export interface SavedText
{
    text: string;
    createdAt: number;
}

export function createSavedText( savedTextsRef: firebase.database.Reference, text: string )
{
    if( !text || text.length === 0 )
    {
        return Promise.reject( 'Text must not be empty' );
    }

    return new Promise( ( resolve, reject ) =>
    {
        let savedText: SavedText = {
            text: text,
            createdAt: firebase.database.ServerValue.TIMESTAMP as number
        };
        savedTextsRef.push( savedText ).then( resolve, ( error ) => reject( error.message ) );
    } );
}