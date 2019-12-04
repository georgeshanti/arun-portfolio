import React from 'react';
import styles from './style.module.scss'

import profilePicture from 'img/profilepic.jpg'

class Home extends React.Component {
	render(){
		return (
			<div className={styles["home"]}>
				<div className={styles["section"]}>
					<img src={profilePicture} className={styles["profilePic"]}/>
				</div>
				<div className={styles["section"]}>
					<h1>Arun Kurian</h1>
					<p>I'm a gave dev</p>
				</div>
			</div>
		);
	}
}

export { Home };
