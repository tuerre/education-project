languagesBtn = document.getElementById('languagesBtn');
frameworksBtn = document.getElementById('frameworksBtn');
languages = document.getElementById('languages');
frameworks = document.getElementById('frameworks');

frameworksBtn.addEventListener('click', () => {
    languages.style.display = 'none';
    languages.style.opacity = '0';
    frameworks.style.display = 'flex'
    frameworks.style.opacity = '1'
    frameworksBtn.style.backgroundColor = '#FFFFFF'
    frameworksBtn.style.color = '#000000'
    languagesBtn.style.backgroundColor = 'transparent'
    languagesBtn.style.color = '#FFFFFF'
});

languagesBtn.addEventListener('click', () => {
    frameworks.style.display = 'none';
    frameworks.style.opacity = '0';
    languages.style.display = 'flex'
    languages.style.opacity = '1'
    languagesBtn.style.backgroundColor = '#FFFFFF'
    languagesBtn.style.color = '#000000'
    frameworksBtn.style.backgroundColor = 'transparent'
    frameworksBtn.style.color = '#FFFFFF'
});

function redirectToJavascript() {
    window.location.href = "./cursos definitivos/javascript.html";
}

function redirectToPython() {
    window.location.href = "./cursos definitivos/python.html";
}

function redirectToTypescript() {
    window.location.href = "./cursos definitivos/typescript.html";
}

function redirectToPillow() {
    window.location.href = "./cursos definitivos/pillow.html";
}

function redirectToTailwind() {
    window.location.href = "./cursos definitivos/tailwind.html";
}

function redirectToBoostrap() {
    window.location.href = "./cursos definitivos/boostrap.html";
}