import React from 'react';
import {createSelector} from 'reselect'
import {connect} from 'react-redux';

let count = 0;

class Posts extends React.Component {
  render() {
    console.log(`Posts render ${++count}`);
    return (
      <div>
        <h3>Posts</h3>
        <ul>
          {this.props.posts.map(x =>
            <li key={x.id}>
              {`${x.title} - ${x.user.first} ${x.user.last}`}
            </li>
          )}
        </ul>
      </div>
    );
  }
}

/* 
  when we use array.map , each time retun send us new array
  so , may be the contents are same but the array is different

  React shallow compare the previous array with new array ,
  and findout that , the array is different ,
  so it rerender the component


*/



//------------------ with reselect ----------------------------//

const getListing = createSelector(
  state => state.postsById,   // function give back postsByid
  state => state.usersById,   // function give back usersById
  state => state.postListing, // function give back postListing
  (posts, users, listing) => listing.map(id => {
    const post = posts[id];
    return {...post, user: users[post.author]}
  })
);


const mapStateToProps_With_reselect = (state) => {
  return {posts: getListing(state)};
};



//------------------ without reselect ----------------------------//

const mapStateToProps_Without_reselect = (state) =>{
    const posts = state.postsById;
    const users =  state.usersById;
    const listing =  state.postListing;
    return {
        posts : listing.map(id => {
            const post = posts[id];
            return {...post, user: users[post.author]}
        })
    }
    
}

export default connect(mapStateToProps_With_reselect)(Posts);