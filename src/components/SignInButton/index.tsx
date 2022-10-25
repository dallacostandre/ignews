import { FaGithub } from 'react-icons/fa';
import styles from './styles.module.scss';
import { signIn, signOut, useSession } from 'next-auth/react';

import { FiX } from 'react-icons/fi';

export function SignInButton() {
    const { data: session } = useSession()
    return session ? (
        <button type="button"
            className={styles.signInButton}
            onClick={() => signOut()}
        >
            <FaGithub color='#04d361' />
            <span>{session.user.name}</span>
            <FiX color='#737380' className={styles.closeIcon} />
        </button>
    ) : (
        <button type="button"
            className={styles.signInButton}
            onClick={() => signIn('github')}
        >
            <FaGithub color='#eba417' />
            <span>Hi, Sign in with GitHub</span>
        </button>
    )
}