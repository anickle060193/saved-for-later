import * as React from 'react';
import * as Bootstrap from 'react-bootstrap';

export default class SaveForLaterForm extends React.Component<{}, {}>
{
    render()
    {
        return (
            <form>
                <Bootstrap.FormGroup>
                    <Bootstrap.ControlLabel>Text to Save</Bootstrap.ControlLabel>
                    <Bootstrap.FormControl componentClass="textarea" rows={10} />
                </Bootstrap.FormGroup>
                <Bootstrap.Button type="submit" bsStyle="primary" block={true}>
                    Save
                </Bootstrap.Button>
            </form>
        );
    }
}