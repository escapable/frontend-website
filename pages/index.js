import { Component } from "react"

import Header from "../components/header.js"
import Footer from "../components/footer.js"
import HeadMetadata from "../components/headMetadata.js"

import getFiveNewestPosts from "../api/getFiveNewestPosts.js"

export default class extends Component {
    static async getInitialProps () {
        const apiResult = await getFiveNewestPosts()
        
        return {
            posts: apiResult && apiResult.posts
        }
    }
    
    render() {
        return (
            <html>
                <head>
                    <HeadMetadata title="escpabale.space blog" description="Posts about 1️⃣ full-stack development, 2️⃣ coding, 3️⃣ mathematics, 4️⃣ photography, 5️⃣ LGBTQIA+ advocacy, and probably some other stuff too." />
                </head>
                <body>
                    <div className="layout-wrapper">
                        <Header />
                        <div className="homepage-container">
                            
                            <div className="homepage-introduction">
                                <h1>Hi 👋 I'm MJ, a Solution Deployment Manager 🧑‍💻 and computer science grad student 🎓 </h1>
                                <p>On this site you'll find posts about my interest which include 1️⃣ full-stack development, 2️⃣ coding, 3️⃣ mathematics, 4️⃣ photography, 5️⃣ LGBTQIA+ advocacy, and probably some other stuff too.</p>
                            </div>
                            <div className="homepage-latest-blog-posts">
                                <h2>Latest blog posts
                                    <a className="homepage-latest-blog-posts-view-all" href="/blog">View all</a>
                                </h2>
                                <div className="homepage-latest-blog-posts-list">
                                    
                                    {
                                        this.props.posts ?
                                        this.props.posts.map((post, index) => {
                                            return (
                                                <a key={index} href={`/blog/${post.urlTitle}`}>
                                                    <div className="homepage-latest-blog-post">
                                                        <div className="homepage-latest-thumbnail">
                                                            <img src={post.thumbnailImageUrl} />
                                                        </div>
                                                        <div className="homepage-latest-blog-post-title">
                                                            <h3>{post.title}</h3>
                                                        </div>
                                                    </div>
                                                </a>
                                            )
                                        }) : null
                                    }

                                </div>
                            </div>


                            <div className="homepage-projects">
                                <h2>My projects</h2>
                                <div className="homepage-projects-list">

                                    <div className="homepage-project">
                                        <h3>
                                            <a href="https://github.com/discourse/discourse">
                                                <div className="homepage-project-icon">🥑</div>
                                                <div className="homepage-project-title">Avocado</div>
                                            </a>
                                        </h3>
                                        <p>This is the tagline for the project.</p>
                                        <div className="homepage-project-btns">
                                            <a className="homepage-project-view-btn" href="https://github.com/discourse/discourse">View</a>
                                        </div>
                                    </div>

                                    <div className="homepage-project">
                                        <h3>
                                            <a href="https://github.com/discourse/discourse">
                                                <div className="homepage-project-icon">🥑</div>
                                                <div className="homepage-project-title">Avocado</div>
                                            </a>
                                        </h3>
                                        <p>This is the tagline for the project.</p>
                                        <div className="homepage-project-btns">
                                            <a className="homepage-project-view-btn" href="https://github.com/discourse/discourse">View</a>
                                        </div>
                                    </div>

                                    <div className="homepage-project">
                                        <h3>
                                            <a href="https://github.com/discourse/discourse">
                                                <div className="homepage-project-icon">🥑</div>
                                                <div className="homepage-project-title">Avocado</div>
                                            </a>
                                        </h3>
                                        <p>This is the tagline for the project.</p>
                                        <div className="homepage-project-btns">
                                            <a className="homepage-project-view-btn" href="https://github.com/discourse/discourse">View</a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <Footer />
                    </div>
                </body>
            </html>
        )
    }
}