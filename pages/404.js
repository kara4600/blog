import Link from 'next/link';
import styles from '../components/layout.module.css';
import utilStyles from '../styles/utils.module.css';

export default function Custom404() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'center',
      }}
    >
      <h1 className={utilStyles.headingXl}>
        404 Error - Page Not Found
      </h1>
      <p className={utilStyles.lightText}>
        The requested url was not found on this server.
      </p>
      <div className={styles.backToHome}>
        <Link href="/">Back to home</Link>
      </div>
    </div>
  );
}
