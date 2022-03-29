import { Component } from "react"

import Header from "../components/header.js"
import Footer from "../components/footer.js"
import HeadMetadata from "../components/headMetadata.js"

export default class extends Component {
    render () {
        return (
            <html>
                <head>
                    <HeadMetadata title="contact | escpabale.space blog" description="If you have any comments, questions, ideas, random stray thoughts, use the links here to reach out!" />
                </head>
                <body>
                    <div className="layout-wrapper">
                        <Header />
                        <div className="contact-container">
                            <div className="contact-section">
                                <h1>Contact</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            </div>
                            <div className="contact-section">
                                <h2>Around the web</h2>
                                <ul>
                                    <li><strong>Email</strong>: escapable.space@gmail.com</li>
                                    <li><strong>Github</strong>: <a href="https://www.github.com">profile name</a></li>
                                    <li><strong>Twitter</strong>: <a href="https://www.twitter.com">profile name</a></li>
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