import styles from './GamesPage.module.css';
import { Link } from 'react-router';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

import quiz from '../../assets/quiz_img.png';
import crossword from '../../assets/crossword_img.png';
import puzzle from '../../assets/puzzle_img.png';

const GamesPage = () => {
    return (
        <>
            <div className={styles.container}>
                <Header />
                <div className={styles.buttons}>
                    <Link className={styles.button} to="/puzzle">
                        пазлы <br />
                        <img src={puzzle} alt="" />
                    </Link>
                    <Link className={styles.button} to="/crossword">
                        кроссворд
                        <img src={crossword} alt="" />
                    </Link>
                    <Link className={styles.button} to="/quiz">
                        викторина
                        <img src={quiz} alt="" />
                    </Link>
                </div>
                <Footer />
            </div>
        </>
    );
};

export default GamesPage;
