import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../reducers/user';
import styles from '../styles/Signup.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWater} from '@fortawesome/free-solid-svg-icons';
import { Modal } from 'antd';

function Signup () {

    const dispatch = useDispatch();
	const user = useSelector((state) => state.user.value);

	const [isModalVisible, setIsModalVisible] = useState(false);
    const [signUpName, setSignUpName] = useState('')
	const [signUpUsername, setSignUpUsername] = useState('');
	const [signUpPassword, setSignUpPassword] = useState('');

    const handleRegister = () => {
        fetch('http://localhost:3000/users/signup', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ name: signUpName, username: signUpUsername, password: signUpPassword }),
		}).then(response => response.json())
			.then(data => {
				if (data.result) {
					dispatch(login({ name: signUpName, username: signUpUsername, token: data.token }));
					setSignUpName('');
                    setSignUpUsername('');
					setSignUpPassword('');
					setIsModalVisible(false)
				}
			});
    };

    


    let modalContent;
	if (!user.isConnected) {
		modalContent = (
			<div className={styles.registerContainer}>
				<div className={styles.registerSection}>
                    <FontAwesomeIcon  className={styles.logoSup} icon={faWater} />
					<p>Create your Hackatweet account</p>
                    <input type="text" placeholder="Name" id="signUpName" onChange={(e) => setSignUpName(e.target.value)} value={signUpName} />
					<input type="text" placeholder="Username" id="signUpUsername" onChange={(e) => setSignUpUsername(e.target.value)} value={signUpUsername} />
					<input type="password" placeholder="Password" id="signUpPassword" onChange={(e) => setSignUpPassword(e.target.value)} value={signUpPassword} />
					<button id="signup" onClick={() => handleRegister()}>Sign up</button>
				</div>
			</div>
		);
	};

    return (
        <div id="signupContainer">
        {isModalVisible && <div id="react-modals">
            <Modal getContainer="#react-modals" className={styles.modal} visible={isModalVisible} closable={false} footer={null}>
                {modalContent}
            </Modal>
        </div>}
        </div>
    )


}

export default Signup;