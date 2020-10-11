import React from 'react';
import { Box, Text, Heading, Button } from 'grommet'
// import Button from '../../UI/Button/Button'

const orderSummary = (props) => {

    const ingrdientsSummary = Object.keys(props.ingredients)
        .map(igKey => {
            return (
                <li key={igKey}>
                    <span style={{ textTransform: "capitalize" }}>{igKey}</span>
                : {props.ingredients[igKey]}
                </li>
            );
        });

    return (
        <Box>
            <Heading level={1}>Your order</Heading>
            <Text weight="bold" size="medium"> A delicious burger with following ingredients:</Text>
            <ul>
                {ingrdientsSummary}
            </ul>
            <Text>Total Price: <strong>{props.totalPrice.toFixed(2)}</strong></Text>
            <Text>Continue to Checkout?</Text>
            <Box direction="row">
                <Button type="button"
                    style={{ color: "#FF4040", backgroundColor: "white" }}
                    margin="xsmall" label="Cancel" width="150px" onClick={props.purchaseCancelled} />
                <Button 
                    style={{ color: "#00C781", backgroundColor: "white" }}
                    margin="xsmall" type="button" label="Continue" onClick={props.purchaseContinued} />
            </Box>
        </Box>
    );
}

export default orderSummary;