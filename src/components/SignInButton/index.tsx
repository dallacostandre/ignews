import { FaGithub } from 'react-icons/fa';
import styles from './styles.module.scss';
import { FiX } from 'react-icons/fi';

export function SignInButton() {
    const isUserLoggedIn = true;

    return isUserLoggedIn ? (
        <button type="button"
            className={styles.signInButton}>
            <FaGithub color='#04d361' />
            <span>André Dalla Costa</span>
            <FiX color='#737380' className={styles.closeIcon} />
        </button>
    ) : (
        <button type="button"
            className={styles.signInButton}>
            <FaGithub color='#eba417' />
            <span>Sign in with GitHub</span>
        </button>
    )
}