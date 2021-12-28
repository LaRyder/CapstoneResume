import React from 'react';
import styles from "./LeapExperience.css";

export default class App extends React.Component {
    render () {
        return (
            <div>
                <div className={styles.matrix}></div>
                <div className={styles.matrix1}></div> 
            </div>
        );
    }
}