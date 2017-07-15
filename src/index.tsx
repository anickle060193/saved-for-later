import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as firebase from 'firebase';

import App from './App';
import registerServiceWorker from './registerServiceWorker';

import './index.css';

( firebase as any ).initializeApp( { // tslint:disable-line
    apiKey: 'AIzaSyAbUV6pBP5ZNdeZCoC6TVn3kR7tVa9_Vxw',
    authDomain: 'save-for-later-ae71d.firebaseapp.com',
    databaseURL: 'https://save-for-later-ae71d.firebaseio.com',
    projectId: 'save-for-later-ae71d',
    storageBucket: '',
    messagingSenderId: '195225340842'
} );

ReactDOM.render(
    <App />,
    document.getElementById( 'root' )
);

registerServiceWorker();
