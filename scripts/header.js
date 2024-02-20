
document.head.innerHTML = document.head.innerHTML + `
    <link rel="stylesheet" type="text/css" href="styles/header.css">
`;

document.body.innerHTML = 
`
   <div id="header">
        <a id="logo" class="header-link" href="/">TELL ME</a>
        <a class="header-link" href="/" id="home-link">Home</a>
        <a target="_blank" class="header-link" href="kinder.html" id="kinder-grade-page">Kindergarten</a>
        <a target="_blank" class="header-link" href="third.html" id="third-grade-page">Third Grade</a>
        <a target="_blank" class="header-link" href="fourth.html" id="fourth-grade-page">Fourth Grade</a>
        <a target="_blank" class="header-link" href="fifth.html" id="fifth-grade-page">Fifth Grade</a>
   </div> 
`
 + document.body.innerHTML;

document.getElementById(document.currentScript.getAttribute("link")).style.textDecoration = "underline";