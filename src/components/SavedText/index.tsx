import * as React from 'react';
import TimeAgo from '@jshimko/react-time-ago';

import * as database from './../../database';

interface SavedTextProps
{
    savedText: database.SavedText;
}

export const SavedTextTimeAgo: React.SFC<SavedTextProps> = ( props: SavedTextProps ) =>
{
    return <TimeAgo date={props.savedText.createdAt} minPeriod={60} title={new Date( props.savedText.createdAt ).toLocaleString()} />;
};