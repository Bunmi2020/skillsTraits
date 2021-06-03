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
    document.getElementById("load").innerHTML = trait;
}

const Skillslist = [".NET Core", "TypeScript", "Landing pages", "E-books", "Android", "Electronic design", "Presentation"
    
]

const topSkills = () => {
    document.getElementById("one").innerHTML = ".NET Core";
    document.getElementById("two").innerHTML = "TypeScript";
    document.getElementById("three").innerHTML = "Landing pages";
    document.getElementById("four").innerHTML = "Digital marketing";
    document.getElementById("five").innerHTML = "Android";
    document.getElementById("six").innerHTML = "Electronic design";
    document.getElementById("seven").innerHTML = "Presentation";
}