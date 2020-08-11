import React from 'react';

class Post extends React.Component {

    componentDidMount() {
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
            <React.Fragment>
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
                        <div>
                            <span>
                                {this.props.postDetails.body}
                            </span>
                        </div>
                        <hr />
                        <div>
                            <img src="./img/avatar.jpg" width="80" height="80" style={{"borderRadius": "50%"}}/>
                            <div className="padding-left-15 display-inline-block v-align-top">
                                <div className="margin-b-5"><span>{this.props.userDetails.name}</span></div>
                                <div  className="margin-b-5">
                                    <span >{this.props.userDetails.username} works for {this.props.userDetails.company.name} @ {this.props.userDetails.website}</span>
                                </div>
                                <div>
                                    <span className="small-font">contact details {this.props.userDetails.email}, {this.props.userDetails.phone}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
            </React.Fragment>
        );
    }
}

export default Post;