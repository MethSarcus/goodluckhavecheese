import * as React from 'react';
import Typography from '@mui/material/Typography';

class ButtonGroupHeader extends React.Component {

    render() {
        return (
            <Typography variant="h4" component="h4" align='center'>
                { this.props.header_name }
            </Typography>
        );
    }
}

export default ButtonGroupHeader;