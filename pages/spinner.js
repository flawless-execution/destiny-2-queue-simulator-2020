import SVG from 'react-inlinesvg';
import styles from '../styles/Spinner.module.scss';
// import loading_spinner from '../public/loading-spinner.svg';

export default function Spinner() {
  return (
    <div className={styles.container}>
      <SVG src="/loading-spinner.svg" className="spinner"></SVG>
    </div>
  );
}
