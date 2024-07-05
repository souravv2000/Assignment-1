// const ReactDOM = require('react-dom');


function Content() {
    return <div>
        <h1>Learn web development</h1>
        <p>Welcome to the MDN learning area. This set of articles aims to provide complete <br /> beginners to web development with fundamental skills for coding websites.</p>

        <p>The aim is not to take you from "beginner" to <br /> "expert" but to take you from "beginner" to  "comfortable." From there, you should be able to start <br /> making your way, learning from the <a href="https://developer.mozilla.org/en-US/">rest of MDN</a>, and other intermediate to <br /> advanced resources that assume a lot of previous knowledge.</p>

        <p>If you are a complete beginner, web development can be challenging — we will hold <br /> your hand and provide enough detail for you to feel comfortable and learn the topics <br /> properly. You should feel at home whether you are a student learning web <br />development (on your own or as part of a class), a teacher looking for class <br /> materials, a hobbyist, or someone who just wants to understand more about how  <br />web technologies work.</p>
    </div>
}

ReactDOM.render(<Content />, document.getElementById('root'));