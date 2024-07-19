import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWater, faCircleXmark} from '@fortawesome/free-solid-svg-icons';
import { login } from '../reducers/user';
import styles from "../styles/Login.module.css";
import { Modal } from 'antd';

function Login() {

  const dispatch = useDispatch();
	const user = useSelector((state) => state.user.value);

  const [isModalVisibleSignup, setIsModalVisibleSignup] = useState(false);
	const [isModalVisibleSignin, setIsModalVisibleSignin] = useState(false);
	const [signInUsername, setSignInUsername] = useState('');
	const [signInPassword, setSignInPassword] = useState('');
  const [signUpName, setSignUpName] = useState('')
	const [signUpUsername, setSignUpUsername] = useState('');
	const [signUpPassword, setSignUpPassword] = useState('');



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
      setIsModalVisibleSignin(false)
    }
  });
};

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
    setIsModalVisibleSignup(false)
  }
});
};

const showModalin = () => {
  setIsModalVisibleSignin(!isModalVisibleSignin);
};

const showModalup = () => {
  setIsModalVisibleSignup(!isModalVisibleSignup)
}

let modalContentSignin;
if (!user.isConnected) {
  modalContentSignin = (
    <div className={styles.registerContainer}>
      <div className={styles.registerSection}>
          <div className={styles.logotops}>
                  <FontAwesomeIcon  className={styles.logoSup} icon={faWater} />
                  <FontAwesomeIcon  className={styles.cross} icon={faCircleXmark} onClick={()=> setIsModalVisibleSignin(false)} />
          </div>
        <p>Connect to Hackatweet</p>
        <input type="text" placeholder="Username" id="signInUsername" className={styles.inModal} onChange={(e) => setSignInUsername(e.target.value)} value={signInUsername} />
        <input type="password" placeholder="Password" id="signInPassword" className={styles.inModal}  onChange={(e) => setSignInPassword(e.target.value)} value={signInPassword} />
        <button id="signin" className={styles.signinC} onClick={() => handleConnection()}>Sign in</button>
      </div>
    </div>
  );
};

let modalContentSignup;
if (!user.isConnected) {
  modalContentSignup = (
    <div className={styles.registerContainer}>
				<div className={styles.registerSection}>
          <div className={styles.logotops}>
                    <FontAwesomeIcon  className={styles.logoSup} icon={faWater} />
                    <FontAwesomeIcon  className={styles.cross} icon={faCircleXmark} onClick={()=> setIsModalVisibleSignup(false)} />
            </div>
					<p className={styles.create}>Create your Hackatweet account</p>
           <input type="text" placeholder="Name" id="signUpName" className={styles.inModal} onChange={(e) => setSignUpName(e.target.value)} value={signUpName} />
					<input type="text" placeholder="Username" id="signUpUsername" className={styles.inModal} onChange={(e) => setSignUpUsername(e.target.value)} value={signUpUsername} />
					<input type="password" placeholder="Password" id="signUpPassword" className={styles.inModal} onChange={(e) => setSignUpPassword(e.target.value)} value={signUpPassword} />
					<button id="signup" className={styles.signinC} onClick={() => handleRegister()}>Sign up</button>
				</div>
			</div>
  )
}




  return (
    <div className={styles.home}>
      <main className={styles.main}>
        <div className={styles.leftContainer}>
        <FontAwesomeIcon icon={faWater} className={styles.homeLogoLeft}/>
        </div>
        <div className={styles.rightContainer}>
          <FontAwesomeIcon icon={faWater} className={styles.homeLogo}/>
          <h1 className={styles.title}>See what's <br/> happening</h1>
          <h2 className={styles.subtitle}>Join Hackatweet today.</h2>
          <div className={styles.signContainer}>
            <button className={styles.signupBtn} onClick={showModalup}> 
            <div className={styles.bgContainer}>
    <span>Sign up</span>
    <span>Sign up</span>
  </div>
  <div className={styles.arrowContainer}>
    <svg
      width="25"
      height="25"
      viewBox="0 0 45 38"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M43.7678 20.7678C44.7441 19.7915 44.7441 18.2085 43.7678 17.2322L27.8579 1.32233C26.8816 0.34602 25.2986 0.34602 24.3223 1.32233C23.346 2.29864 23.346 3.88155 24.3223 4.85786L38.4645 19L24.3223 33.1421C23.346 34.1184 23.346 35.7014 24.3223 36.6777C25.2986 37.654 26.8816 37.654 27.8579 36.6777L43.7678 20.7678ZM0 21.5L42 21.5V16.5L0 16.5L0 21.5Z"
        fill="black"
      ></path>
    </svg>
  </div>
      
            </button>
            <p className={styles.question}>Already have an account?</p>  
            <button className={styles.signupBtn} onClick={showModalin}>

            <div className={styles.bgContainer}>
    <span>Sign in </span>
    <span>Sign in </span>
  </div>
  <div className={styles.arrowContainer}>
    <svg
      width="25"
      height="25"
      viewBox="0 0 45 38"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M43.7678 20.7678C44.7441 19.7915 44.7441 18.2085 43.7678 17.2322L27.8579 1.32233C26.8816 0.34602 25.2986 0.34602 24.3223 1.32233C23.346 2.29864 23.346 3.88155 24.3223 4.85786L38.4645 19L24.3223 33.1421C23.346 34.1184 23.346 35.7014 24.3223 36.6777C25.2986 37.654 26.8816 37.654 27.8579 36.6777L43.7678 20.7678ZM0 21.5L42 21.5V16.5L0 16.5L0 21.5Z"
        fill="black"
      ></path>
    </svg>
  </div>
            </button>
          </div>

        </div>
      </main>

      {isModalVisibleSignin && <div id="react-modals" className={styles.modalun}>
				<Modal getContainer="#react-modals" className={styles.modal} visible={isModalVisibleSignin} closable={false} footer={null}>
					{modalContentSignin} 
				</Modal>
			</div>}
      {isModalVisibleSignup && <div id="react-modals" className={styles.modalun}>
				<Modal getContainer="#react-modals" className={styles.modal} visible={isModalVisibleSignup} closable={false} footer={null}>
					{modalContentSignup} 
				</Modal>
			</div>}
    </div>
  );
}

export default Login;
