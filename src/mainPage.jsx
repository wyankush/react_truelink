import React from 'react';
import AllPosts from "./allPosts.jsx";
import Post from "./post.jsx";

class MainPage extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            showAll: true,
            allPosts: [],
            loading: true
        }

        this.users = [];
        this.postDetails = {};
        this.userDetails = {};

        this.onPostClick = this.onPostClick.bind(this);
        this.fetchPosts = this.fetchPosts.bind(this);
        this.fetchUsers = this.fetchUsers.bind(this);
        this.onAllPosts = this.onAllPosts.bind(this);
    }

    componentDidMount() {
        /* These API calls can be shifted to individual components if the data changes are quite often
        *   Assuming that new posts and user changes is not a frequent activity
        */
        this.fetchPosts();
        this.fetchUsers();
    }

    fetchPosts() {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(json => {
                this.setState({
                    allPosts: json,
                    loading: false
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

    onAllPosts() {
        this.setState({
            showAll: true
        });
    }

    render() {
        return ( 
            <React.Fragment>
                {this.state.showAll == true ? 
                    <AllPosts onPostClick={this.onPostClick} posts={this.state.allPosts} loading={this.state.loading}/> 
                :
                    <Post postDetails={this.postDetails} userDetails={this.userDetails} onAllPosts={this.onAllPosts}/>
                }
            </React.Fragment>
        );
    }
}

export default MainPage;