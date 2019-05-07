import React from 'react';

import styles from './navbar.module.scss';

export default class Navbar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={styles.navbar}>
                Freeify
            </div>
        )
    }
}