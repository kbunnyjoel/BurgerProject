import React from 'react';
import { deepMerge } from 'grommet/utils';
import { grommet, Grommet, Box, Button, Text } from 'grommet';
import classes from './BuildControl.module.css'

const customFocus = deepMerge(grommet, {
    global: {
        colors: {
            focus: 'red',
            background: "none"
        },
    },
});


const buildControl = (props) => (
    <Grommet theme={customFocus}>
        <Box direction="row" className={classes.BuildControl}>
            {/* <Box direction="row" justify="center"> */}
            <Text className={classes.Label} style={{ marginRight: "20px" }}>{props.label}</Text>
            <Button type="button"
                style={{ marginRight: "20px" }}
                label="Less"
                onClick={props.removed}
                disabled={props.disabled}
            />
            <Button type="button" label="More"
                onClick={props.added}
            />
            {/* </Box> */}
        </Box>
    </Grommet>
);


export default buildControl;