import styles from './Historical.module.css';
import { useNavigate } from 'react-router';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

const HistoricalPage = () => {
    const navigate = useNavigate();

    const handleDornfClick = () => {
        navigate('/dorn');
    };

    const handlePolarClick = () => {
        navigate('/polar');
    };

    return (
        <>
            <div className={styles.container}>
                <Header />
                <div className={styles.dorn} onClick={handleDornfClick}></div>
                <div className={styles.polar} onClick={handlePolarClick}></div>
                <Footer />
            </div>
        </>
    );
};

export default HistoricalPage;
