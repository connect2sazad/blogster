import React from "react";

import WebHead from "../components/webhead.component";
import MenuBar from "../components/menubar.component";
import BlogDoubleColumnsGroup from '../components/blogdoublecolumns.component'
import Footer from "../components/footer.component";

class TrendingTopics extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            head_insiders: {
                page_title: "Home",
                keywords: ["Best Site", "Best Site 2", "Best Site 3"],
                description: 'Test Description'
            },
            
        }
    }

    componentDidMount() {
        // Move your side effect code here
    }

    render() {

        return (
            <>
                <WebHead headInsiders={this.state.head_insiders} />

                <div className="hero_area">
                    <MenuBar />

                    <BlogDoubleColumnsGroup/>
                    <BlogDoubleColumnsGroup/>

                    <Footer />
                </div>

                
            </>
        );
    }
}

export default TrendingTopics;