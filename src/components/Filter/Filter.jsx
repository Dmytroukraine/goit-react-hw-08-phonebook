import PropTypes from 'prop-types';
import { Label, Input } from './Filter.styled';
// =============================
export const Filter = ({ onChangeFilter }) => {
  return (
    <>
      <Label>
        Шукай контакт за ім"ям
        <Input onChange={e => onChangeFilter(e)} type="text" name="filter" />
      </Label>
    </>
  );
};

Filter.propTypes = {
  onChangeFilter: PropTypes.func.isRequired,
};