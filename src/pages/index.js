import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Banner from '../components/Banner'

import pic01 from '../assets/images/pic01.jpg'
import pic02 from '../assets/images/pic02.jpg'
import pic03 from '../assets/images/pic03.jpg'
import pic04 from '../assets/images/pic04.jpg'
import pic05 from '../assets/images/pic05.jpg'
import pic06 from '../assets/images/pic06.jpg'

class HomeIndex extends React.Component {
    render() {

        return (
            <Layout>
                <Helmet
                    title="Gatsby Starter - Forty"
                    meta={[
                        { name: 'description', content: 'Sample' },
                        { name: 'keywords', content: 'sample, something' },
                    ]}
                >
                </Helmet>

                <Banner />

                <div id="main">
                    <section id="one" className="tiles">
                        <article>
                            <header className="major">
                                <h3>Why should I eat slower?</h3>
                                <p>Did you know it takes 20 minutes for the brain to understand the full range of satiety signals?</p>
                            </header>
                        </article>
                        <article style={{backgroundImage: `url(${pic02})`}}>
                        </article>
                        <article style={{backgroundImage: `url(${pic02})`}}>
                        </article>
                        <article>
                            <header className="major">
                                <h3>Benefits</h3>
                                <p>By eating slower you can improve your digestion and eat less. But don't take our word for it, instead rely on accredited university studies
                                <a href="https://www.ncbi.nlm.nih.gov/pubmed/18589027">[1]</a>
                                </p>
                            </header>
                        </article>
                        <article>
                            <header className="major">
                                <h3>How it works?</h3>
                                <p>Measure how fast you eat and number of bites using the front facing camera of your phone.</p>
                            </header>
                            <Link to="/landing" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${pic04})`}}>
                        </article>
                    </section>
                    <section id="two">
                        <div className="inner">
                            <header className="major">
                                <h2>Massa libero</h2>
                            </header>
                            <p>Nullam et orci eu lorem consequat tincidunt vivamus et sagittis libero. Mauris aliquet magna magna sed nunc rhoncus pharetra. Pellentesque condimentum sem. In efficitur ligula tate urna. Maecenas laoreet massa vel lacinia pellentesque lorem ipsum dolor. Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis libero. Mauris aliquet magna magna sed nunc rhoncus amet pharetra et feugiat tempus.</p>
                            <ul className="actions">
                                <li><Link to="/landing" className="button next">Get Started</Link></li>
                            </ul>
                        </div>
                    </section>
                </div>

            </Layout>
        )
    }
}

export default HomeIndex
