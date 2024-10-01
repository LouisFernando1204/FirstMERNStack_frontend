import { Link } from 'react-router-dom'

const Public = () => {
    const content = (
        <section className="public">
            <header>
                <h1>Welcome to <span className="nowrap">TechMate!</span></h1>
            </header>
            <main className="public__main">
                <p>At TechMate, located in the heart of Silicon Valley, our expert team is ready to tackle all of your technology repair challenges.</p>
                <address className="public__addr">
                    TechMate<br />
                    123 Innovation Lane<br />
                    Silicon Valley, CA 98765<br />
                    <a href="tel:+1234567890">(123) 456-7890</a>
                </address>
                <br />
                <p>Founder: Louis Fernando</p>
            </main>
            <footer>
                <Link to="/login">Staff Access</Link>
            </footer>
        </section>
    )
    return content
}

export default Public