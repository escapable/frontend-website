import { Component } from "react"

import Header from "../components/header.js"
import Footer from "../components/footer.js"
import HeadMetadata from "../components/headMetadata.js"

export default class extends Component {
    static getInitialProps({ req, res, err }) {
        const statusCode = res ? res.statusCode : err ? err.statusCode : null

        return {
            statusCode: statusCode
        }
    }

    render () {
        return (
            <html>
                <head>
                <HeadMetadata title="error | escpabale.space blog" />
                </head>
                <body>

                    <div className="layout-wrapper">
                        <Header />
                        <div className="error-container">
                            {
                                this.props.statusCode === 404 ?
                                <>
                                    <h1>404 page not found</h1>
                                    <p>We can't see to find the page you're looking for. Double check the page URL. Be aware that the page you're looking for may have moved or no longer exist.</p>
                                </> :
                                <>
                                    <h1>An error occurred</h1>
                                    <p>An error occurred while trying to fulfill your request. Please try reloading the page or returning to the homepage.</p>
                                </>
                            }
                        </div>
                        <Footer />
                    </div>

                </body>
            </html>
        )
    }
}