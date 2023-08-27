import { Box } from 'components/Box';

import { HiOutlineUserAdd,HiOutlineLogin } from 'react-icons/hi';
import { AuthStyled,  LinkStyled } from './AuthNav.styled';

export const AuthNav = () => {
  return (
    <>
      <Box as={'nav'} display="flex">
        <AuthStyled>
          <li>
            <LinkStyled to="register">
              Зареєструйся <HiOutlineUserAdd />
            </LinkStyled>
          </li>
          <li>
            <LinkStyled to="login">Увійти<HiOutlineLogin/></LinkStyled>
          </li>
        </AuthStyled>
      </Box>
    </>
  );
};