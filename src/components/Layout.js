import React from 'react';
import Header from './Header'

const layoutStyle={
};

export const Layout = props => {
    const {fixed} = props
    return <div className={fixed ? 'layout-fixed' : ""}>
        <Header />
        <div id="main-wrapper">{props.children}</div>
    </div>
};
