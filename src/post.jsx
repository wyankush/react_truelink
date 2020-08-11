import React from 'react';

class Post extends React.Component {

    componentDidMount() {

        /* In Case the user details change frequesntly the API call can be done here to make sure we always have updated data.
        * Also, here we can retrieve the data for individual user rather than getting all users.
        */

        // const userid = this.props.postDetails.userId;
        // const url = "https://jsonplaceholder.typicode.com/users/" + userid;

        // fetch(url)
        //     .then(response => response.json())
        //     .then(json => {
        //         this.setState({
        //             userDetails: json
        //         });
        //     });
    }


    render() {
        return ( 
            <div className="post-details">
                <div className="text-center">
                    <h1>Post Details</h1>
                </div>
                <div className="post-title">
                    <div className="container">
                        <h1 className="color-white">{this.props.postDetails.title}</h1>
                        <div className="color-white">
                            <img src="./img/avatar.jpg" width="48" height="48" style={{"borderRadius": "50%"}}/>
                            <div className="padding-left-15 display-inline-block v-align-top">
                                <div className="margin-b-5"><span>{this.props.userDetails.name}</span></div>
                                <div><span className="small-font">{this.props.userDetails.username}</span></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="content">
                        <div className="margin-b-50">
                            <span> {this.props.postDetails.body} </span>
                        </div>
                        <hr />
                        <div className="margin-t-50 author-div">
                            <img src="./img/avatar.jpg" width="80" height="80" style={{"borderRadius": "50%"}}/>
                            <div className="padding-left-15 display-inline-block v-align-top">
                                <div className="margin-b-5 font-bold"><span>{this.props.userDetails.name}</span></div>
                                <div  className="margin-b-5">
                                    <span className="secondary-font-color small-font">{this.props.userDetails.username} works for {this.props.userDetails.company.name} @ {this.props.userDetails.website}</span>
                                </div>
                                <div>
                                    <span className="secondary-font-color micro-font">Contact details: <a href={"mailto:"+this.props.userDetails.email}>{this.props.userDetails.email}</a>, {this.props.userDetails.phone}</span>
                                </div>
                            </div>
                        </div>
                        <div className="text-center margin-t-50">
                            <button onClick={this.props.onAllPosts}>Explor other posts</button>
                        </div>
                    </div>
                </div>
                
            </div>
        );
    }
}

export default Post;