

class Posts extends React.Component {
    render() {
      console.log(`Posts render ${++count}`);
      return (
        <div>
          <h3>Posts</h3>
          <ul>
            {this.props.posts.map ( (x,index) => {
            return(<li key ={index}> {x} </li>)
            })}
          </ul>
        </div>
      );
    }
}

const mapState = (state) => {
  return({
    posts : state.postListing
  })
}
