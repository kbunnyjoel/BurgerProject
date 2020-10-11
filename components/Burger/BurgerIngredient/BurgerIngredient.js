import React, { Component } from 'react';
import classes from './BurgerIngredient.module.css';
import PropTypes from 'prop-types';
import { Box } from 'grommet';

class BurgerIngredient extends Component {

    render() {
        let ingredient = null;

        switch (this.props.type) {

            case ('bread-bottom'):
                ingredient = <Box className={classes.BreadBottom}> </Box>;
                break;
            case ('bread-top'):
                ingredient = (
                    <Box className={classes.BreadTop}>
                        <Box className={classes.Seeds1}></Box>
                        <Box className={classes.Seeds2}></Box>
                    </Box>
                );
                break;
            case ('meat'):
                ingredient = <Box className={classes.Meat}> </Box>;
                break;
            case ('cheese'):
                ingredient = <Box className={classes.Cheese}> </Box>;
                break;
            case ('bacon'):
                ingredient = <Box className={classes.Bacon}> </Box>;
                break;
            case ('salad'):
                ingredient = <Box className={classes.Salad}> </Box>;
                break;
            default:
                ingredient = null;
        }
        return ingredient;
    }
};

BurgerIngredient.propTypes = {
    type: PropTypes.string.isRequired
}

export default BurgerIngredient;