import { FC } from 'react';
import { Header, ParametersList } from '../../components/blocks';
import style from './HomePage.module.scss';
import { Container } from '../../components/ui';

const Home: FC = () => {
  return (
    <div className={style.background}>
        <h1 className={style.title}>Test task for the company "Tehnosky"</h1>
        <Container>
          <Header/>
          <ParametersList />
        </Container>
    </div>
  )
};

export default Home;