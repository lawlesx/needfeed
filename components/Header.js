import styles from '../styles/Header.module.css';
import Link from 'next/link';

const Header = () => {

  return ( 
    <div className={styles.container}>
      <h1>NeedFeed</h1>
      <Link href='/'>
        <div>
          <svg width="50" height="51" viewBox="0 0 53 54" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M49.8281 46.5077V27.9559C49.8282 26.6653 49.5648 25.3881 49.0541 24.2028C48.5434 23.0174 47.796 21.9488 46.8578 21.0625L29.3799 4.54465C28.4997 3.71242 27.3342 3.24872 26.1228 3.24872C24.9114 3.24872 23.746 3.71242 22.8657 4.54465L5.38785 21.0625C4.44966 21.9488 3.7023 23.0174 3.19156 24.2028C2.68082 25.3881 2.41745 26.6653 2.41759 27.9559V46.5077C2.41759 47.7651 2.91709 48.971 3.80621 49.8601C4.69533 50.7492 5.90123 51.2487 7.15864 51.2487H45.087C46.3444 51.2487 47.5503 50.7492 48.4394 49.8601C49.3286 48.971 49.8281 47.7651 49.8281 46.5077Z" stroke="#3D3D3D" strokeWidth="4.71648" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </Link>
    </div>
   );
}
 
export default Header;