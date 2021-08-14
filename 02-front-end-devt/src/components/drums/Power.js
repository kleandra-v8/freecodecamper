import { FormControlLabel } from '@material-ui/core';
import IOSSwitch from './IOSSwitch';

function Power(props) {
    return (
        <div id='power'>
            <FormControlLabel
                control={
                    <IOSSwitch
                        checked={props.isOn}
                        onChange={props.onToggle}
                        name='power'
                    />
                }
                id='power-label'
                label='Power'
                labelPlacement='top'
            />
        </div>
    );
}

export default Power;
