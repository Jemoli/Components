import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetails from './comments';
import ApprovalCard from './ApprovalCard';

const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <CommentDetails
                    author="Sam"
                    timeAgo="Today at 5:00PM"
                    content="this is test #1"
                    avatar={faker.image.avatar}
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetails
                    author="Jane"
                    timeAgo="Today at 4:00AM"
                    content="this is test #2"
                    avatar={faker.image.avatar}
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetails
                    author="Carlos"
                    timeAgo="Yesterday at 3:00PM"
                    content="this is test #3"
                    avatar={faker.image.avatar}
                />
            </ApprovalCard>
        </div>
    )
}

ReactDOM.render(<App />, document.querySelector('#root'));
