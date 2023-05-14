import PropTypes from 'prop-types';
import { Wrapper, FilterLabel, Input } from './Filter.styled';

export const Filter = ({ value, onChange }) => {
  return (
    <Wrapper>
      <FilterLabel>
        Filter
        <Input type="text" value={value} onChange={onChange}></Input>
      </FilterLabel>
    </Wrapper>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
