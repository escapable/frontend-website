import { Component } from "react"

import Header from "../components/header.js"
import Footer from "../components/footer.js"
import HeadMetadata from "../components/headMetadata.js"
import GoogleAnalytics from "../components/googleAnalytics.js"

export default class extends Component {
    render () {
        return (
            <html>
                <head>
                    <HeadMetadata title="about | escpabale.space blog" description="Hi 👋 I'm MJ, a Solution Deployment Manager 🧑‍💻 and computer science grad student 🎓" />
                    <GoogleAnalytics />
                </head>
                <body>
                    <div className="layout-wrapper">
                        <Header />
                        
                        <div className="about-container">
                            
                            <div className="about-section">
                                <h1>About me</h1>
                                <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                                <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            </div>
                            
                            <div className="about-section">
                                <h2>My projects</h2>
                                <ul>
                                    <li><a href="https://github.com/discourse/discourse">Project name</a> - The project's tagline. And sub-tagline.</li>
                                    <li><a href="https://github.com/discourse/discourse">Project name</a> - The project's tagline. And sub-tagline.</li>
                                    <li><a href="https://github.com/discourse/discourse">Project name</a> - The project's tagline. And sub-tagline.</li>
                                </ul>
                            </div>
                            
                            <div className="about-section">
                                <h2>Currently using</h2>
                                <ul>
                                    <li><strong>Computer</strong>: MacBook Air, early 2020</li>
                                    <li><strong>Hosting</strong>: <a href="https://www.digitalocean.com/">DigitalOcean</a></li>
                                    <li><strong>Editor</strong>: <a href="https://code.visualstudio.com/">Visual Studio Code</a></li>
                                    <li><strong>Coding Framework</strong>: <a href="https://nextjs.org">Next.js</a></li>
                                    <li><strong>Syntax Highlighting</strong>: <a href="https://prismjs.com">PrismJS</a></li>
                                </ul>
                            </div>
                        </div>

                        <Footer />
                    </div>
                </body>
            </html>
        )
    }
}