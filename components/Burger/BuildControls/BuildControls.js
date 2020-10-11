import React from 'react';
import { Box, Text, Button } from 'grommet'
import BuildControl from './BuildControl/BuildControl'
import classes from './BuildControls.module.css'

const controls = [
    { label: "Bacon", type: "bacon" },
    { label: "Cheese", type: "cheese" },
    { label: "Meat", type: "meat" },
    { label: "Salad", type: "salad" }
];

const buildControls = (props) => (

    <Box className={classes.BuildControls}>
        <Text>Current Price: <strong>{props.price.toFixed(2)}</strong></Text>
        {
            controls.map(ctrl => (
                <BuildControl
                    key={ctrl.label}
                    label={ctrl.label}
                    type={ctrl.type}
                    added={() => props.ingredientAdded(ctrl.type)}
                    removed={() => props.ingredientRemoved(ctrl.type)}
                    disabled={props.disabled[ctrl.type]}
                />
            ))
        }
        <Button
            primary
            size="medium"
            label="Order Now"
            type="button"
            disabled={!props.purchasable}
            onClick={props.showOrder}
        />
    </Box>
);

export default buildControls;