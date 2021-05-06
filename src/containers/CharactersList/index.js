import React from 'react';
import {useSelector} from "react-redux";
import Character from "../../components/Character";
import { v4 as uuidv4 } from 'uuid';
import {Col, Row} from 'antd';


const CharacterList = () => {
  const characters = useSelector(state => state.characters);

  const data = characters.map(item =>
    <Col span={24} key={uuidv4()}>
      <Character
        name={item.name}
        birthdate={item.birth_year}
      />
    </Col>
  );
  return (
    <Row>
      {data}
    </Row>
  );
};

export default CharacterList;