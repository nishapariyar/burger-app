import React from 'react';

import './BurgerIngredient.module.css'; 
import classes from './BurgerIngredient.module.css';

const burgerIngredient = (props) => {
    let ingredient = null;

    switch (props.type) {
        case ('bread-buttom'):
            ingredient = <div className={classes.BreadButtom}></div>;
            break;
        case ('bread-top'):
            ingredient = (
                <div className={classes.BreadTop}>
                    <div className={classes.Seeds1}></div>
                    <div className={classes.Seeds2}></div>
                </div>
            )
            break;
        case ('meat'):
            ingredient = <div className={classes.Meat}></div>;
            break;
        case ('cheese'):
            ingredient = <div className={classes.cheese}></div>;
            break;

        case ('bacon'):
            ingredient = <div className={classes.bacon}></div>;
            break;

        case ('salad'):
            ingredient = <div className={classes.salad}></div>;
            break;
                
        default:
            ingredient = null;
        
    }
    return ingredient
}

export default burgerIngredient;