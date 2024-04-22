// console.log("Sadsadjskaldjaslj")

function getContent(){
    const article = document.querySelector("div.meteredContent");

    if (article) {
        const text = article.textContent;
        let prompt = `this is prompt: ${text}`;

        // https://developer.mozilla.org/en-US/docs/Web/API/fetch
        let url = "https://climate-lens-cpk6gb64hq-uc.a.run.app/api/v1/climate_lens?user_region=hongkong&user_lang=english&url=https://www.washingtonpost.com/weather/2024/04/16/dubai-flooding-heavy-rain-airport/?pwapi_token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJyZWFzb24iOiJnaWZ0IiwibmJmIjoxNzEzMjQwMDAwLCJpc3MiOiJzdWJzY3JpcHRpb25zIiwiZXhwIjoxNzE0NjIyMzk5LCJpYXQiOjE3MTMyNDAwMDAsImp0aSI6IjRiMTE5NjdkLTQzODEtNDY5YS05ZTJlLTFlN2JlM2ZhYjAzNiIsInVybCI6Imh0dHBzOi8vd3d3Lndhc2hpbmd0b25wb3N0LmNvbS93ZWF0aGVyLzIwMjQvMDQvMTYvZHViYWktZmxvb2RpbmctaGVhdnktcmFpbi1haXJwb3J0LyJ9.bFEzdG2-t1W5_zIkmdhEa8awAmakAQQshz1DUvGL_uI"

        fetch(url)
            .then(r => r.json())
            .then(result => {
                // Result now contains the response text, do what you want...
                console.log(result.summary)
            })
    }
    else {
        console.log('not content found')
    }
}
