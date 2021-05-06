import React, {useState} from 'react';
import {Button, Card} from 'antd';
import CommentContainer from "../CommentContainer";
const style = { backgroundColor: 'lightgrey', margin: '8px' };

const Character = ({name, birthdate}) => {
  const [isComment, setIsComment] = useState(false);
  const showComment = () => {
    setIsComment(!isComment);
  }
  return (
      <Card style={style} title={name} bordered={true}>
        <div>
          <p>Birth date: {birthdate}</p>
          <Button onClick={showComment} type="primary">{isComment ? 'Close' : 'Comment'}</Button>
          {isComment && <CommentContainer key={Date.now * 1000}/>}
        </div>
      </Card>
  );
};

export default Character;