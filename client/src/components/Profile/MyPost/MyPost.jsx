import React,{memo} from 'react';
import s from './MyPost.module.css';
import Post from './Post/Post';
import {Field,reduxForm} from 'redux-form';
import { maxLengthCreator, requiredField } from '../../utils/validators/validators';
import { Textarea } from '../../../common/FormsControls';

const maxLength10 = maxLengthCreator(10)

const MyPost = memo(props => {
  const posts = props.profilePage.postDate.map((prop) => <Post date={prop.date} key={prop.id} />);
  return (
    <div className={s.postBlock}>
      <form onSubmit={props.handleSubmit}>
        <div>
          <Field placeholder='post' component={Textarea} name={'post'} validate={[requiredField, maxLength10]} />
          <button>ADD</button>
        </div>
      </form>
      {posts}
    </div>
  );
})


const MyPostReduxForm = reduxForm({form:'post'})(MyPost)

const postContainer = function (props) { 
  const onSubmit = (formData) =>{
    props.addPost(formData.post)
  }

  return <MyPostReduxForm onSubmit={onSubmit}{...props}/>
};
export default postContainer;



