import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWater} from '@fortawesome/free-solid-svg-icons';
import { login } from '../reducers/user';
import Signup from "./signup"; 
import Signin from "./signin"; 
import styles from "../styles/Login.module.css";

function Login() {

  // const dispatch = useDispatch();
	const user = useSelector((state) => state.user.value);

	const [isModalVisible, setIsModalVisible] = useState(false);
 
  const showModal = () => {
		setIsModalVisible(!isModalVisible);
	};





  return (
    <div className={styles.home}>
      <Signin/>
      <main className={styles.main}>
        <div className={styles.leftContainer}>
        <FontAwesomeIcon icon={faWater} className={styles.homeLogoLeft}/>
        </div>
        <div className={styles.rightContainer}>
          <FontAwesomeIcon icon={faWater} className={styles.homeLogo}/>
          <h1 className={styles.title}>See what's <br/> happening</h1>
          <h2 className={styles.subtitle}>Join Hackatweet today.</h2>
          <div className={styles.signContainer}>
            <button className={styles.signupBtn}> 
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
            <button className={styles.signupBtn}>

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
    </div>
  );
}

export default Login;
