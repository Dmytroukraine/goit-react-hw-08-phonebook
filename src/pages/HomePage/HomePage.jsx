import { selectAuthToken, selectAuthUser } from 'redux/auth/authSelectors';
import { useSelector } from 'react-redux';

import { HomePageMain, HomePageTitle, HomePageInfo } from './HomePage.styled';
// ==============================

const HomePage = () => {
  const token = useSelector(selectAuthToken);
  const { name } = useSelector(selectAuthUser);
  return (
    <HomePageMain>
      {token ? (
        <>
          <HomePageTitle> Вітаю, {name} </HomePageTitle>
          <HomePageInfo>Твоя персональна телефонна книга!" </HomePageInfo>
        </>
      ) : (
        <>
          <HomePageTitle> Ласкаво прошу до телефонної книги </HomePageTitle>
          <HomePageInfo>Будь-ласка, "Зареєструйся", або "Увійди"</HomePageInfo>
        </>
      )}
    </HomePageMain>
  );
};

export default HomePage;