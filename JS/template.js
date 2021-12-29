let headTemplate = `<title>Skills and Traits</title>
<link rel="icon" href="media/images/icon1.svg" type="image/png">
<link rel="stylesheet" type="text/css" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
<link href="../css/style.css" rel="stylesheet" />
<link rel="stylesheet" href="css/normalize.min.css" />

<!-- Global site tag (gtag.js) - Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-JGF01514YJ"></script>
<script>
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());

gtag('config', 'G-JGF01514YJ');
</script>

<!-- Clarity tracking code for http://skillsandtraits.com/ --><script>    (function(c,l,a,r,i,t,y){        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i+"?ref=bwt";        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);    })(window, document, "clarity", "script", "6lk8x2wnn5");</script>
<script type="text/javascript">
(function(c,l,a,r,i,t,y){
    c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
    t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
    y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
})(window, document, "clarity", "script", "6lkdqfzzx8");
</script>

<script type="text/javascript" src="../JS/traits.js" async></script>`;


let headerTemplate = `<nav>
                <div class="home">
                        <figure>
                        <a href="">
                            <img src="media/images/icon1.svg" alt="S&T">
                        Skills and Traits</a><figcaption>...one skill is enough to freelance</figcaption>
                        </figure>
                </div>
                <ul class="main-nav">
                    <li>
                        <a href="#">Skills</a>
                            <ul class="dropdown">
                                <li><a href="#">IT, Software & Development</a></li>
                                <li><a href="#">Design & Architecture</a></li>
                                <li><a href="#">Data Entry & Analysis</a></li>
                                <li><a href="#">Media & Arts</a></li>
                                <li><a href="#">Administrative Support</a></li>
                                <li><a href="#">Sales & Marketing</a></li>
                                <li><a href="#">Business, Accounting & Finance</a></li>
                                <li><a href="#">Writing & Translation</a></li>
                                <li><a href="#">Legal & Human Resources</a></li>
                                <li><a href="#">Other</a></li>
                            </ul>
                    </li>
                    <li><a href="#">Traits</a></li>
                </ul> 
        </nav>`;

let asideTemplate = `<section class="best-trait" >
                <h3>Trait of the Day:</h3>
                <p id = "load"></p>
            </section>

            <section class="top-skills">
                <h3>Top most requested Skills</h3>
                <ul>
                    <li id="one"></li>
                    <li id="two"></li>
                    <li id="three"></li>
                    <li id="four"></li>
                    <li id="five"></li>
                    <li id="six"></li>
                    <li id="seven"></li>
                </ul>
            </section>`;
let footerTemplate = `<ul id="footer-menu">
        <a href="#">Suggest a Skill or Trait</a>
        <a href="#">About Us</a>
       </ul>
    
      <div id="copyright">
            <p>&copy; 2021 Skill and Traits </p>
        </div>

        <div id="footer-socials">
            <a href="https://twitter.com/Skills_Traits" target="_blank"><img src="media/images/twitter-con.svg" alt="twitter"></a>
            <a href="https://www.facebook.com/skillstraits" target="_blank"><img src="media/images/facebook-con.svg" alt="facebook"></a>
            <a href="https://www.linkedin.com/company/skills-and-traits" target="_blank"><img src="media/images/linked-con.png" alt="linkedIn"></a>
        </div>
        `;



console.log(headTemplate)


const template = () => {
    document.getElementsById('head-template').innerHTML = headTemplate;
    document.getElementsById('header-template').innerHTML = headerTemplate;
    document.getElementsById('aside-template').innerHTML = asideTemplate;
    document.getElementsById('footer-template'). innerHTML = footerTemplate;
}


