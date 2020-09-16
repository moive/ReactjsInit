import React, { Component } from 'react'

export default class Posts extends Component {
    state = {
        posts:[]
    }

    async componentDidMount(){
        const res = await fetch('http://jsonplaceholder.typicode.com/posts')
        const data = await res.json();
        // console.log(data);
        this.setState({
            posts: data
        });
    }
    render() {
        return (
            <div>
                <h1>Posts</h1>
                {
                    this.state.posts.map(post => {
                        return <div key={post.id}>
                            <h3 className={post.id%2 === 0 ? 'text-success': 'text-primary'}>{post.title}</h3>
                            <p>{post.body}</p>
                        </div>
                    })
                }
            </div>
        )
    }
}
