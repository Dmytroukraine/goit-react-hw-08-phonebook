import { HiOutlineLogout } from 'react-icons/hi';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { logout } from 'redux/auth/authOperations';
import { selectAuthUser } from 'redux/auth/authSelectors';

import { useMedia } from 'react-use';

import { toast } from 'react-toastify';
import { FcReading } from 'react-icons/fc';
import { UserMenuWrapper, Hello, LogoutBtn } from './UserMenu.styled';
// ===========================================

export const UserMenu = () => {
  const isMobile = useMedia('(max-width: 768px)');
  const { name } = useSelector(selectAuthUser);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onLogout = () => {
    dispatch(logout()).then(response => {
      if (response.payload === 'Запит не виконано, помилка - 400') {
        toast.error('Ой-йо...Щось зламалось. Спробуй пізніше!');
        return;
      }
      if (!response.payload) {
        toast.success('Ти успішно вийшов! Скоріше повертайся!');
        navigate('/', { replace: true });
      }
    });
  };

  return (
    <UserMenuWrapper>
      {!isMobile && (
        <Hello>
          <FcReading size={25} style={{ marginRight: '10px' }} /> Привіт, {name}!
        </Hello>
      )}

      <LogoutBtn onClick={onLogout} type="button">
        Вийти
        <HiOutlineLogout />
      </LogoutBtn>
    </UserMenuWrapper>
  );
};