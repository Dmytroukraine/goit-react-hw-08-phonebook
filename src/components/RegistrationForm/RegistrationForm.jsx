import { useState } from 'react';
import { VscPass } from 'react-icons/vsc';
import { useDispatch, useSelector } from 'react-redux';
import { register } from 'redux/auth/authOperations';

import { toast } from 'react-toastify';

import { Title, Label, Input, Button } from './RegistrationForm.styled';
import { useNavigate } from 'react-router-dom';
import { Loader } from 'components/Loader/Loader';
import { selectAuthIsLoading } from 'redux/auth/authSelectors';
// ==============================

export const RegistrationForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isLoading = useSelector(selectAuthIsLoading);

  const userRegisterData = {
    name,
    email,
    password,
  };

  const onInputChange = ({ target: { name: inputName, value } }) => {
    switch (inputName) {
      case 'name':
        setName(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
        return null;
    }
  };

  const onFormSubmit = e => {
    e.preventDefault();
    dispatch(register(userRegisterData)).then(response => {
      if (response.payload === 'Запит не виконано, помилка - 400') {
        toast.error('Ой-йо...Такий користувач вже існує!');
        return;
      }
      if (response.payload === 'Network Error') {
        toast.error('Ой-йо...Помилка мережі!');
        return;
      }
      if (response.payload.token) {
        toast.success('Вітаю! Ти успішно зареєструвався!');
        navigate('/', { replace: true });
        onFormReset();
      }
    });
  };

  const onFormReset = () => {
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <>
      <Title>Реєстраційна форма</Title>
      <form onSubmit={onFormSubmit}>
        <Label>
          Ім'я
          <Input
            onChange={onInputChange}
            type="text"
            name="name"
            value={name}
            required
            placeholder="Введіть своє ім'я"
          />
        </Label>
        <Label>
          Пошта
          <Input
            onChange={onInputChange}
            value={email}
            type="email"
            name="email"
            required
            placeholder="Введіть свою пошту"
          />
        </Label>
        <Label>
          Пароль
          <Input
            onChange={onInputChange}
            value={password}
            type="password"
            name="password"
            required
            placeholder="Введіть пароль"
          />
        </Label>

        <Button type="submit">
          Реєстрація <VscPass />
        </Button>
      </form>
      {isLoading && <Loader />}
    </>
  );
};