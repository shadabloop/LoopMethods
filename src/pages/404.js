import styles from '@/styles/Error.module.scss';
import Link from 'next/link';

const Custom404 = () => {
    return (
        <div className={styles.mainContainer}>
            <h1>404 - Page Not Found</h1>
            <p>Oops! The page you are looking for does not exist.</p>
            <Link href="/">
                Go back to the homepage
            </Link>
        </div>
    );
};

export default Custom404;
