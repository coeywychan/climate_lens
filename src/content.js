const article = document.querySelector("div.meteredContent");

if (article) {
    const text = article.textContent;
    let prompt = `this is prompt: ${text}`;

    // https://developer.mozilla.org/en-US/docs/Web/API/fetch
    fetch('https://www.boredapi.com/api/activity')
        // .then(r => r.text())
        .then(result => {
        // Result now contains the response text, do what you want...
            console.log(result)
    })
}
else {
    console.log('not content found')
}