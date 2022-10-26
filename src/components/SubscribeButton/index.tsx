import { signIn, useSession } from 'next-auth/react';
import styles from './style.module.scss';

interface SubscribeButtonProps {
    priceId: string;
}

export function SubscribeButton({ priceId }: SubscribeButtonProps) {

    const [session] = useSession();

    function handleSubscribe() {
        if(!session){
            signIn('github');
            return;
        }
        
    }

    return (
        <button className={styles.subscribeButton} > Subscribe Now</button>
    )
}