import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <CommentDetail
          author="John"
          avatar={faker.image.avatar()}
          timeAgo="Today at 10:00 AM"
          content="Nice post!"
        />
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
          author="Jane"
          avatar={faker.image.avatar()}
          timeAgo="Today at 1:55 PM"
          content="Hmm...not sure I agree"
        />
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
          author="Amy"
          avatar={faker.image.avatar()}
          timeAgo="Yesterday at 7:30 PM"
          content="Its me ur brother"
        />
      </ApprovalCard>
    </div>
  );
};

ReactDOM.render(
  <App />,
  document.querySelector('#root')
);