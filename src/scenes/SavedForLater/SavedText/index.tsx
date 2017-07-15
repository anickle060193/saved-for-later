import * as React from 'react';
import * as Boostrap from 'react-bootstrap';
import TimeAgo from '@jshimko/react-time-ago';

import * as database from './../../../database';

interface SavedTextProps
{
    savedText: database.SavedText;
}

export default class SavedText extends React.Component<SavedTextProps, {}>
{
    render()
    {
        return (
            <Boostrap.Jumbotron className="text-center">
                <h2>{this.props.savedText.text}</h2>
                <p><TimeAgo date={this.props.savedText.createdAt} minPeriod={60} title={new Date( this.props.savedText.createdAt ).toLocaleString()} /></p>
            </Boostrap.Jumbotron>
        );
    }
}