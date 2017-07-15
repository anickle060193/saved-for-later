import * as React from 'react';
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
            <p>
                {this.props.savedText.text} <TimeAgo date={this.props.savedText.createdAt} minPeriod={60} />
            </p>
        );
    }
}