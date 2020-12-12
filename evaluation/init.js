if (window.location.href.indexOf('http') !== -1) {
  window.onload = () => {
    const validateContainer = document.createElement('div');
    validateContainer.style = 'text-align:center;';

    const validateHTML = document.createElement('button');
    validateHTML.innerHTML = 'validate HTML';
    validateHTML.onclick = () => window.open('https://validator.w3.org/nu/?doc=' + encodeURIComponent(window.location.href), '_blank');
    validateContainer.appendChild(validateHTML);

    const validateCSS = document.createElement('button');
    validateCSS.innerHTML = 'validate CSS';
    validateCSS.onclick = () => window.open('https://jigsaw.w3.org/css-validator/validator?uri=' + encodeURIComponent(window.location.href), '_blank');
    validateContainer.appendChild(validateCSS);

    const accessibilityCheckButton = document.createElement('button');
    accessibilityCheckButton.innerHTML = 'accessibility check';
    accessibilityCheckButton.onclick = () => window.open(`https://wave.webaim.org/report#/${encodeURIComponent(window.location.href)}`, '_blank');
    validateContainer.appendChild(accessibilityCheckButton);

    const spellCheckButton = document.createElement('button');
    spellCheckButton.innerHTML = 'spelling check';
    spellCheckButton.onclick = () => window.open(`https://datayze.com/website-spell-checker?domain=${encodeURIComponent(window.location.href)}&parameters=&exclude=&elementtype=limit&elements=&ignored=`, '_blank');
    validateContainer.appendChild(spellCheckButton);

    const splitHref = window.location.href.split('.');
    const userName = splitHref[0].split('/').filter(str => str !== '').pop();
    const repository = splitHref[2].split('/').filter(str => str !== '').pop();
    const repoUrl = `https://github.com/${userName}/${repository}`;

    const repositoryButton = document.createElement('button');
    repositoryButton.innerHTML = 'repository';
    const repositoryA = document.createElement('a');
    repositoryA.href = repoUrl;
    repositoryA.target = '_blank';
    repositoryA.appendChild(repositoryButton);
    validateContainer.appendChild(repositoryA);

    document.body.insertBefore(validateContainer, document.body.firstChild);
  }
}

