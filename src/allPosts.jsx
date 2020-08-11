import React from 'react';

class AllPosts extends React.Component {

    componentDidMount() {
        // fetch('https://jsonplaceholder.typicode.com/posts')
        //     .then(response => response.json())
        //     .then(json => {
        //         this.setState({
        //             posts: json
        //         });
        //     });
    }

    render() {
        return (
            <div className="container">
                <div className="text-center">
                    <h1>All Posts</h1>
                </div>
                <table>
                    <thead>
                        <tr>
                            <th >Id</th>
                            <th >UserId</th>
                            <th >Title</th>
                        </tr>
                    </thead>
                        
                    <tbody>
                        {this.props.posts.map( (obj,index) => {
                            return <tr key={index} onClick={() => this.props.onPostClick(obj.id)}>
                                <td>{obj.id}</td>
                                <td>{obj.userId}</td>
                                <td>{obj.title}</td>
                            </tr>
                        })}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default AllPosts;