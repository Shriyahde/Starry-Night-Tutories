document.head.innerHTML = document.head.innerHTML + `
    <link rel="stylesheet" type="text/css" href="styles/header.css">
`;

document.body.innerHTML = 
`
   <div id="header">
        <a id="logo" class="header-link" href="/">TELL ME</a>
        <a class="header-link" href="/" id="home-link">Home</a>
        <a target="_blank" class="header-link" href="fifth_science.html" id="fifth-grade-page">Science</a>
        <a target="_blank" class="header-link" href="fifth_ela.html" id="fifth-grade-page">Language</a>
        <a target="_blank" class="header-link" href="fifth_math.html" id="fifth-grade-page">Math</a>
        <a target="_blank" class="header-link" href="fifth.html" id="fifth-grade-page">Fifth Grade</a>
   </div> 

`
 + document.body.innerHTML;

document.getElementById(document.currentScript.getAttribute("link")).style.textDecoration = "underline";