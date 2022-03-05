const traitList = ["", "Critical Thinking: Though there might be patterns, formats, or standardized approach to solving some of our client’s problems, some works requires you to come up with varying solutions every time. If you often find yourself in this kind of situation, then you have used/needed a critical thinking ability. Keep improving upon this ability.",
                        "Active Listening: For 'you cannot truly listen to anyone and do anything else at the same time.' ― M. Scott Peck. Most importantly, not interrupting. Are you actively listening to your clients?",
                        "Social Perceptiveness: Our language is not fair, is it? A word could have tens of different meanings. And a sentence could have hundreds of different interpretations. I hope the tone of your messages is simplified and professional enough for the person with the least social perception to understand.", 
                        "Service Orientation: Freelancing is freedom + service orientation. every freelancer is actively looking for ways to help people. When they want to, and not when a company says they can.", 
                        "Time Management: If you cannot manage time, you cannot be a freelancer; it is as simple as that. You must be good at managing your own time and the time of others.", 
                        "Persuasion: While it is true that the best-rated freelancers are the ones that do what the client wants, I hope you can persuade them to change their minds sometimes. Because what they want is not always best/feasible.",
                        "Decision Making: when, how, what, are among the decisions you’d be making. It is important to be able to consider the relative costs and benefits of each of your potential actions, and choose the most appropriate one.", 
                        "Negotiation: Do not offer a single package, there should be the standard and premium. Then every additional feature or customization should have its dollar rate. However, I hope you could reach an agreement with the client, most of your orders would go for more or of less the stated rate.",
                        "Self-Evaluation: you either not doing well enough or your orders has reduced. There is always the need to evaluate your performance and take necessary actions needed to improve or correct such performance, relative to your goals.",
                        "Integrity: 'Honesty is the cornerstone of all success. Without honesty, confidence and ability to perform shall cease to exist.' – Mary Kay Ash. Your integrity is crucial.",
                        "Attention to Detail: Be careful about every detail even the littlest of them, and be thorough in completing work tasks. Check every work, information, and plans, and organize your time and resources efficiently",
                        "Stress Tolerance: are you ready to accept criticism and deal calmly and effectively with high-stress situations? Yes? Welcome to the world of freelancing.",
                        "Speaking/Writing: Whatever you say might be the only influence you have on your potential client. Choose your words wisely communicate and convey your message effectively.",
                        "Tidiness: You must keep a neat personal appearance and keep your work area clean and sanitary. This requirement is necessary for the health and safety of their clients and increases the likelihood that clients will return.",
                        "Achievement/Effort: Unlike the traditional full-time works, where the company would set the targets, and provide motivations where possible. Freelance requires you to establish and maintaining personally challenging but achievable goals and exerting effort toward mastering tasks by yourself.", 
                        "Dependability: You wouldn’t want your client talking to your competitor. But if you not reliable, responsible, and dependable, or fulfilling obligations, it would be hard for you to hold on to your clients.", 
                        "Analytical Thinking: Been able to analyze noisy data and information, making meaningful use of it. Also using logic to address work-related issues and problems.", 
                        "Initiative: Be willing to take on responsibilities and challenges.",
                        "Self-Control: you should be able to maintain composure, keep emotions in check, control your anger at almost every time, and avoid aggressive rude tone in your conversations, even in the most difficult situations.", 
                        "Cooperation: In freelancing, you would be mostly working independently. However, whenever it may arise you should be pleasant with others on any job and display a good-natured, cooperative attitude.", 
                        "Persistence: How persistence is you in the face of obstacles? You’d face many of them in the freelance world, lack of order, continuous lower rating, among others. Are you ready to press on?", 
                        "Adaptability/Flexibility: Be open to change! that's it, that's the message.",
                        "Independence: You must develop your ways of doing things, guiding yourself with no supervision. Most times you’d have to depend on yourself to get things done. In this world, it is mostly just you.", 
                        "Concern for others: Sometimes the needs of your client might not be what you can provide, but you must be sensitive to their needs and feelings and be understanding and helpful in helping get those needs.",
                        "Leadership: Because most times you’d be working independently, so you should be willing to lead yourself and the client, or in other cases your team. Be willing to take charge, and offer opinions and direction.", 
                        "Problem Sensitivity: Are you able to tell when something is wrong or is likely to go wrong? No? You should. And I hope you can make it right too. People might be paid just to recognize problems, but it pays more to be able to solve them.", 
                        "Visualization: Are you able to visualize, I mean, are you able to daydream with a purpose? Imagine how something will look after it has been altered or rearranged. You’d need it.", 
                        "Ethical behavior: It is the lubricant that keeps the economy and every business running smoothly and progressively.", 
                        "Time-Sharing: Time-Sharing and multitasking are almost the same. Being able to shift back and forth between two or more activities or sources of information. 'The secret to multitasking is that it isn't multitasking. It's just extreme focus and organization.' - Joss Wheldon.", 
                        "Fluency of Ideas: One idea is never enough! There is the need to be able to come up with several ideas about a topic. Forget about the quality, correctness, or creativity first, just come up with multiple ideas.", 
                        "Selective Attention: Here we go, attentiveness again. It is that important. You must have heard the saying that ‘Attention is a limited resource.’ Are you able to concentrate on a task over a period without being distracted?"];

let today =  new Date();
let day = today.getDate();
let trait = "";
const traitOfTheDay = () => { 
    if (day) {
        trait = `${traitList[day]}`;
    } else {
        trait = `Be what you can!`;
    }
    document.getElementById("load").innerText = trait;
}


const topSkills = () => {
    document.getElementById("one").innerHTML = '<a href="#">.NET Core</a>';
    document.getElementById("two").innerHTML = '<a href="#">TypeScript</a>';
    document.getElementById("three").innerHTML = '<a href="#">Landing pages</a>';
    document.getElementById("four").innerHTML = '<a href="#">Affiliate marketing</a>';
    document.getElementById("five").innerHTML = '<a href="#">Android</a>';
    document.getElementById("six").innerHTML = '<a href="#">Electronic design</a>';
    document.getElementById("seven").innerHTML = '<a href="#">Presentation</a>';
    body.append(document.createElement("br"), `<script type="text/javascript">
    var infolinks_pid = 3360249;
    var infolinks_wsid = 0;
    </script>
    <script type="text/javascript" src="http://resources.infolinks.com/js/infolinks_main.js"></script>`);
}

const listMenu = () => {
    document.getElementById("num-l").innerHTML = `<label for="num">#</label>
    <input type="checkbox" id="num" hidden />
       <ul class="dropdown">
            <li><a href="4D.html">4D</a></li>
            <li><a href="#"></a></li>
            <li><a href="#"></a></li>
            
            
        </ul>`;
    document.getElementById("A-l").innerHTML = `<label for="A">A</label>
    <input type="checkbox" id="A" hidden />
       <ul class="dropdown">
            <li><a href="Adobe-illustrator.html">Adobe Illustration</a></li>
            <li><a href="aix.html">AIX</a></li>
            <li><a href="ajax.html">Ajax</a></li>
            <li><a href="application-developing.html">Application development</a></li>
            <li><a href="Affiliate-marketing.html">Affiliate Marketing</a></li>
            <li><a href="#"></a></li>
            
            
        </ul>`;
    document.getElementById("B-l").innerHTML = `<label for="B">B</label>
    <input type="checkbox" id="B" hidden />
       <ul class="dropdown">
           
            <li><a href="#"></a></li>
            
        </ul>`;
    document.getElementById("C-l").innerHTML = `<label for="C">C</label>
    <input type="checkbox" id="C" hidden />
       <ul class="dropdown">
            <li><a href="c-Sharp.html">C#</a></li>
            <li><a href="c++.html">C++</a></li>
            <li><a href="call-control-xml.html">Call Control XML</a></li>
            <li><a href="concept-art.html">Concept Art</a></li>
            <li><a href="content-strategy.html">Content Strategy</a></li>
            <li><a href="copywriting.html">Copywriting</a></li>
            <li><a href="Cyber-security.html">Cyber Security</a></li>
            <li><a href="#"></a></li>
            
        </ul>`;
    document.getElementById("D-l").innerHTML = `<label for="D">D</label>
    <input type="checkbox" id="D" hidden />
       <ul class="dropdown">
            <li><a href="data-analysis.html">Data Analysis</a></li>
            
            <li><a href="Data-engineering.html">Data Engineering</a></li>
            <li><a href="Data-visualization.html">Data Visualization</a></li>
            <li><a href="database-developing.html">Database developing</a></li>
            <li><a href="debugging.html">Debugging</a></li>
            <li><a href="digital-marketing.html">Digital Marketing</a></li>
            
            <li><a href="#"></a></li>
            
        </ul>`;
    document.getElementById("E-l").innerHTML = `<label for="E">E</label>
    <input type="checkbox" id="E" hidden />
       <ul class="dropdown">
            <li><a href="educational-research.html">Educational Research</a></li>
            <li><a href="email-developing.html">Email Developing</a></li>
            <li><a href="ethical-hacking.html">Ethical Hacking</a></li>
            <li><a href="excel.html">Excel</a></li>
            <li><a href="#"></a></li>
           
            
        </ul>`;
    document.getElementById("F-l").innerHTML = `<label for="F">F</label>
    <input type="checkbox" id="F" hidden />
       <ul class="dropdown">
        <li><a href="#"></a></li>
        </ul>`;

        document.getElementById("G-l").innerHTML = `<label for="G">G</label>
        <input type="checkbox" id="G" hidden />
           <ul class="dropdown">
                <li><a href="github.html">Github</a></li>
                <li><a href="graphic-design.html">Graphic Design</a></li>
                <li><a href="#"></a></li>
                
                
            </ul>`;
        document.getElementById("H-l").innerHTML = `<label for="H">H</label>
        <input type="checkbox" id="H" hidden />
           <ul class="dropdown">
                <li><a href="html.html">HTML</a></li>
                
                <li><a href="#"></a></li>
                
                
            </ul>`;
        document.getElementById("I-l").innerHTML = `<label for="I">I</label>
        <input type="checkbox" id="I" hidden />
           <ul class="dropdown">
                
                <li><a href="#"></a></li>
                <li><a href="#"></a></li>
                
            </ul>`;
        document.getElementById("J-l").innerHTML = `<label for="J">J</label>
        <input type="checkbox" id="J" hidden />
           <ul class="dropdown">
                
                <li><a href="Javascript.html">Javascript</a></li>
                <li><a href="#"></a></li>
                
            </ul>`;
        document.getElementById("K-l").innerHTML = ``;

        document.getElementById("L-l").innerHTML = `<label for="L">L</label>
        <input type="checkbox" id="L" hidden />
           <ul class="dropdown">
                <li><a href="link-building.html">Link Building</a></li>
                
                <li><a href="#"></a></li>
                
                
            </ul>`;
        document.getElementById("M-l").innerHTML = `<label for="M">M</label>
        <input type="checkbox" id="M" hidden />
           <ul class="dropdown">
                
                <li><a href="marketing.html">Marketing</a></li>
                <li><a href="mobile-develping.html">Mobil Developing</a></li>
                <li><a href="#"></a></li>
               
            </ul>`;
        document.getElementById("N-l").innerHTML = `<label for="N">N</label>
        <input type="checkbox" id="N" hidden />
           <ul class="dropdown">
                
                <li><a href="NET.html">Net</a></li>
                
                <li><a href="#"></a></li>
               
            </ul>`;
        document.getElementById("O-l").innerHTML = `<label for="O">O</label>
        <input type="checkbox" id="O" hidden />
           <ul class="dropdown">
                <li><a href="#"></a></li>
                <li><a href="#"></a></li>
                
                
            </ul>`;
        document.getElementById("P-l").innerHTML = `<label for="P">P</label>
        <input type="checkbox" id="P" hidden />
           <ul class="dropdown">
               
                <li><a href="proofreading.html">Proofreading</a></li>
                <li><a href="#"></a></li>
                <li><a href="#"></a></li>
                
            </ul>`;
        document.getElementById("Q-l").innerHTML = ``;
        document.getElementById("R-l").innerHTML = `<label for="R">R</label>
        <input type="checkbox" id="R" hidden />
           <ul class="dropdown">
            <li><a href="#"></a></li>
            <li><a href="#"></a></li>
                
            </ul>`;
        document.getElementById("R-l").innerHTML = ``;
        document.getElementById("S-l").innerHTML = `<label for="S">S</label>
        <input type="checkbox" id="S" hidden />
           <ul class="dropdown">
            <li><a href="#"></a></li>
            <li><a href="SEO-SEM.html">SEO/SME</a></li>
            <li><a href="system-analysis.html">System Analysis</a></li> 
               
            </ul>`;
        document.getElementById("T-l").innerHTML = `<label for="T">T</label>
        <input type="checkbox" id="T" hidden />
           <ul class="dropdown">
                
                <li><a href="#"></a></li>
                
            </ul>`;
        document.getElementById("U-l").innerHTML = ``;

        document.getElementById("V-l").innerHTML = `<label for="V">V</label>
        <input type="checkbox" id="V" hidden />
           <ul class="dropdown">
              
                <li><a href="#"></a></li>
                <li><a href="#"></a></li>
            </ul>`;
        document.getElementById("W-l").innerHTML = `<label for="W">W</label>
        <input type="checkbox" id="W" hidden />
           <ul class="dropdown">
               
                <li><a href="web-developing.html">Web Developing</a></li>
                <li><a href="#"></a></li>
                <li><a href="#"></a></li>
                
                
            </ul>`;
        document.getElementById("X-l").innerHTML = ``;
        document.getElementById("Y-l").innerHTML = ``;
        document.getElementById("Z-l").innerHTML = ``;
}

