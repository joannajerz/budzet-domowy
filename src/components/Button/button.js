import React, { Fragment, useMemo } from 'react';
import PropTypes from 'prop-types'
import {InlineButton, RegularButton} from './button.css';
import {Link} from 'react-router-dom'

function Button({variant, children, ...props}){
    const {to} = props;
    const Component = useMemo(() =>{
        switch(variant){
            case 'inline':
                return InlineButton
            case 'regular':
                return RegularButton
            default:
                return RegularButton
        }
    },[variant]);
    const Content = useMemo(()=>
       ( <Component {...props}>{children}</Component>),[props, children]
    )
    return to? (
    <Link {...props}>
        {Content}
   </Link> ): (
       <Fragment>
   {Content}
   </Fragment>
   )
};
Button.propTypes = {
    variant: PropTypes.oneOf(['inline', 'regular'])
}
export default Button;