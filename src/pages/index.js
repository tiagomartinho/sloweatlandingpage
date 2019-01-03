import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Banner from '../components/Banner'

import pic01 from '../assets/images/pic01.jpg'
import pic02 from '../assets/images/pic02.jpg'
import pic03 from '../assets/images/pic03.jpg'

class HomeIndex extends React.Component {
    render() {

        return (
            <Layout>
                <Helmet
                    title="Slow Eat"
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
                                <p>The brain takes 20 minutes to understand the full range of satiety signals</p>
                            </header>
                        </article>
                        <article style={{backgroundImage: `url(${pic01})`}}>
                        </article>
                        <article style={{backgroundImage: `url(${pic02})`}}>
                        </article>
                        <article>
                            <header className="major">
                                <h3>Benefit</h3>
                                <p>By eating slower you can improve your digestion and eat less. But don't take our word for it, instead rely on accredited university studies:
                                <a href="https://www.ncbi.nlm.nih.gov/pubmed/18589027">[1]</a>
                                <a href="https://bmjopen.bmj.com/content/8/1/e019589">[2]</a>
                                <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3544627/">[3]</a>
                                <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4212566/">[4]</a>
                                <a href="https://www.ncbi.nlm.nih.gov/pubmed/21802566">[5]</a>
                                <a href="https://www.ahajournals.org/doi/abs/10.1161/circ.136.suppl_1.20249">[6]</a>
                                <a href="https://today.uri.edu/news/uri-researcher-provides-further-evidence-that-slow-eating-reduces-food-intake">[7]</a>
                                <a href="https://blogs.bmj.com/bmjopen/2018/02/12/slow-eating-speed-may-be-linked-to-weight-loss/">[8]</a>
                                </p>
                            </header>
                        </article>
                        <article>
                            <header className="major">
                                <h3>How it works?</h3>
                                <p>Measure how fast you eat and number of bites using the front facing camera of your phone.</p>
                            </header>
                        </article>
                        <article style={{backgroundImage: `url(${pic03})`}}>
                        </article>
                    </section>
                    <section id="two">
                        <div className="inner">
                            <header className="major">
                                <h2>The Challenge</h2>
                            </header>
                            <h3>Day 1 - Assess</h3>
                            <p>In the first day you are going to use the app to record every bite you take during the day. This will allow to set a baseline of how fast you eat.</p>
                            <h3>Day 2 to 7 - Measure and Learn</h3>
                            <p>In the following days the app will give you information before, while and after you eat. This will allow you to understand your goals and how to achieve them.</p>
                            <h3>Day 7 - Predict</h3>
                            <p>In the last day the app will give you a report of your progress during the week and predict how you will improve along the year.</p>
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
