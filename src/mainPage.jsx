import React from 'react';
import AllPosts from "./allPosts.jsx";
import Post from "./post.jsx";

class MainPage extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            showAll: true,
            allPosts: []
        }

        this.users = [];
        this.postDetails = {};
        this.userDetails = {};

        this.onPostClick = this.onPostClick.bind(this);
        this.fetchPosts = this.fetchPosts.bind(this);
        this.fetchUsers = this.fetchUsers.bind(this);
    }

    componentDidMount() {
        this.fetchPosts();
        this.fetchUsers();
    }

    fetchPosts() {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(json => {
                this.setState({
                    allPosts: json
                });
            });
    }

    fetchUsers() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(json => this.users = json);
    }


    onPostClick(pPostId) {
        const posts = this.state.allPosts;
        const users = this.users;
        let userId = -1;
        let postDetails;
        let userDetails;
        for(let i in posts) {
            if(posts[i].id == pPostId) {
                userId = posts[i].userId;
                this.postDetails = posts[i];
                break;
            }
        }

        if(userId != -1) {
            for(let i in users) {
                if(users[i].id == userId) {
                    this.userDetails = users[i];
                    break;
                }
            }

            this.setState({
                showAll: false
            });
        }
        
    }

    render() {
        return ( 
            <div>
                {this.state.showAll == true ? 
                    <AllPosts onPostClick={this.onPostClick} posts={this.state.allPosts}/> 
                :
                    <Post postDetails={this.postDetails} userDetails={this.userDetails}/>
                }
                
            </div>
        );
    }
}

export default MainPage;