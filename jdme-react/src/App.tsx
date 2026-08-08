import Footer from "./cmp/Footer";
import Header from "./cmp/Header"
import * as d from './data';
export default function App() {
    return (
        <>
            <Header cssClass='hdr' items={d.headerItems} />
            <main>
                <h1>jdeko.me</h1>
                <h2>Justin DeKock's personal website/portfolio - hosted locally on a raspberry pi 5</h2>
                <p>/-|-\</p>

            </main>
            <Footer cssClass='ftr' items={d.footerItems} />
        </>
    )
};
