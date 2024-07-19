import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../reducers/user';
import styles from '../styles/Signup.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWater} from '@fortawesome/free-solid-svg-icons';
import { Modal } from 'antd';

function Signin () {

    const dispatch = useDispatch();
	const user = useSelector((state) => state.user.value);

	const [isModalVisible, setIsModalVisible] = useState(false);
	const [signInUsername, setSignInUsername] = useState('');
	const [signInPassword, setSignInPassword] = useState('');

    const handleConnection = () => {
        fetch('http://localhost:3000/users/signin', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ username: signInUsername, password: signInPassword }),
		}).then(response => response.json())
			.then(data => {
				if (data.result) {
					dispatch(login({ username: signUpUsername, token: data.token }));
                    setSignInUsername('');
					setSignInPassword('');
					setIsModalVisible(false)
				}
			});
    };



    let modalContent;
	if (!user.isConnected) {
		modalContent = (
			<div className={styles.registerContainer}>
				<div className={styles.registerSection}>
                    <FontAwesomeIcon  className={styles.logoSin} icon={faWater} />
					<p>Connect to Hackatweet</p>
					<input type="text" placeholder="Username" id="signInUsername" onChange={(e) => setSignInUsername(e.target.value)} value={signInUsername} />
					<input type="password" placeholder="Password" id="signInPassword" onChange={(e) => setSignInPassword(e.target.value)} value={signInPassword} />
					<button id="signin" onClick={() => handleConnection()}>Sign in</button>
				</div>
			</div>
		);
	};

    return (
        <div id="signinContainer">
        {isModalVisible && <div id="react-modals">
            <Modal getContainer="#react-modals" className={styles.modal} visible={isModalVisible} closable={false} footer={null}>
                {modalContent}
            </Modal>
        </div>}
        </div>
    )


}

export default Signin;