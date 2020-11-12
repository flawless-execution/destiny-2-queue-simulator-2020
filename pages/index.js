import Head from 'next/head';
import { Component } from 'react';
import styles from '../styles/Home.module.css';
import Spinner from './spinner';

export class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { queue: Math.round(Math.random() * 20000 + 1) };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ queue: Math.round(Math.random() * 20000 + 1) });
      this.componentDidMount();
    }, Math.round(Math.random() * 4000 + 2000));
  }

  render() {
    return (
      <div className={styles.container}>
        <Head>
          <title>Destiny 2: Queue Simulator 2020</title>
          <link rel="icon" href="/loading-spinner-white.svg" />
        </Head>

        <main className={styles.main}>
          <div className={styles.spinner}>
            <Spinner></Spinner>
          </div>
          <div className={styles.title}>
            <div className={styles.header}></div>
            <div className={styles.text}>
              <div className={styles.description}></div>
              <div className={styles.queue}>
                Your place in queue: {this.state.queue}
              </div>
            </div>
          </div>
        </main>

        <footer className={styles.footer}>
          Made by&nbsp;
          <a href="https://flawlessexecution.gg">Flawless Execution</a>
        </footer>
      </div>
    );
  }
}

export default Home;
