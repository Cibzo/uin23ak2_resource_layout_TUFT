const resources = [
    {
        category: "HTML",
        text: "HTML står for HyperText Markup Language, og er et strukturspråk som brukes for å lage strukturer til nettside- og applikasjonsgrensesnitt.",
        sources: [
            {
                title: "W3Schools",
                url: "https://www.w3schools.com/html/"
            },
            {
                title: "HTML Living standard",
                url: "https://html.spec.whatwg.org/multipage/"
            },
            {
                title: "HTML.com Tutorials",
                url: "https://html.com/"
            },
        ]
    },
    {
        category: "CSS",
        text: "CSS står for Cascading StyleSheets, og brukes for å sette stilregler på HTML-elementer.",
        sources: [
            {
                title: "W3Schools",
                url: "https://www.w3schools.com/css/"
            },
            {
                title: "W3C HTML & CSS Standards",
                url: "https://www.w3.org/standards/webdesign/htmlcss.html"
            },
            {
                title: "W3C CSS Validator",
                url: "https://jigsaw.w3.org/css-validator/"
            },
            {
                title: "CSS Tricks",
                url: "https://css-tricks.com/"
            },
        ]
    },
    {
        category: "JavaScript",
        text: "JavaScript er et scriptspråk basert på EcmaScript. JavaScript kjører direkte i nettleseren, og brukes ofte til å manipulere HTML og CSS i webgrensnesnitt.",
        sources: [
            {
                title: "W3Schools",
                url: "https://www.w3schools.com/js/"
            },
            {
                title: "MDN Web Docs",
                url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript"
            },
            {
                title: "How to read JavaScript Documentation",
                url: "https://www.youtube.com/watch?v=O3iR-CIufKM"
            },
        ]
    },
    {
        category: "React",
        text: "React er et rammeverk bygget i JavaScript. React bruker komponenter og states for å lage en levende frontend.",
        sources: [
            {
                title: "React documentation",
                url: "https://reactjs.org/docs/getting-started.html"
            },
            {
                title: "W3Schools",
                url: "https://www.w3schools.com/REACT/DEFAULT.ASP"
            },
            {
                title: "How to read JavaScript Documentation",
                url: "https://www.youtube.com/watch?v=O3iR-CIufKM"
            },
        ]
    },
    {
        category: "Sanity and headless CMS",
        text: "Sanity er et headless CMS som står for innholdsadministrasjon. Innhold hentes inn i applikasjoner via GROQ-spørringer.",
        sources: [
            {
                title: "Sanity documentation",
                url: "https://www.sanity.io/docs"
            },
            {
                title: "OnCrawl: a beginners guide to headless CMS",
                url: "https://www.oncrawl.com/technical-seo/beginners-guide-headless-cms/"
            },
            {
                title: "Section.io: Getting started with Sanity CMS",
                url: "https://www.section.io/engineering-education/getting-started-with-sanity-cms/"
            },
        ]
    },
]
function categorySelector(event){
   const buttonId = event.target.id
    let listHTML = ""
   // document.querySelectorAll("button").style.color = "#fffff"
    //document.querySelectorAll("button").style.backgroundColor = "red"
    let x = document.querySelectorAll("button")
    for (let i = 0; i < length; i++){
        x[i].style.backgroundColor = "red"
        console.log("hei")
    }
    resources.map((e) => {
        //Kjører en if loop som sjekker hvilken id knappen jeg trykker på, har. den kjører deretter den rette array for knappen
        if (e.category === buttonId) {
            let list = ""
            e.sources.map(source => list += `<li class= "category_list"><a href="${source.url}">${source.title}</a></li>`)
            listHTML +=
            `<h2 class="category_name">${e.category}</h2>
            <p class="category_info">${e.text}</p>
            <ul>${list}</ul>
            `}
        })
        /*if (document.getElementById(buttonId)){
            document.getElementById(buttonId).style.color = "#fffff"
            document.getElementById(buttonId).style.backgroundColor = "#25dfe6"
        } */
        
    document.querySelector("#htmlinfo").innerHTML = listHTML
}

const buttons = document.querySelectorAll("button")

buttons.forEach(knapp => knapp.addEventListener("click", categorySelector))
