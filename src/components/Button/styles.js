import styled from 'styled-components';
import variables from '../../variables';
import { lighten } from 'polished';

export const Container = styled.div`
  align-items: center;
  background: ${ (props) => props.backgroundColor ? props.backgroundColor : variables.opt1Color};
  border-radius: 3px;
  display: flex;
  flex-flow: row;
  justify-content: center;
  margin: 10px auto;
  max-width: 370px;
  width: 80%;
  
  &:hover {
    background: ${ (props) => lighten('0.1', props.backgroundColor)};
  }
}
`;

export const Icon = styled.i`
  padding: 5px;
`;

export const Name = styled.p`
  color: ${variables.textColor};
  padding: 20px 0;
`;