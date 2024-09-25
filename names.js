(async () => {

    const getBaseName = async function (diminutives) {

        const apiKey = 'SUPER_SECRET_OPENAI_API_KEY';

        try {

            if(!Array.isArray(diminutives))
                throw new Error('error, getBaseName, incorrect argument');

            const response = await fetch('https://api.openai.com/v1/engines/davinci-codex/completions', {

                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${apiKey}`
                },
                body: JSON.stringify({
                    prompt: `podaj listę rozdzieloną przecinkami, najpopularniejszych, dorosłych wersji imion: ${diminutives.join(',')} w mianowniku, użyj po jednym słowie na imię`,
                    max_tokens: 1
                })
            });

            if(response.status != 200)
                throw new Error('error, getBaseName, response');

            let result = await response.json();
            let namesList = result.choices[0].text.trim().split(',').map(item => item.trim());

            return namesList;
        }
        catch (e) {

            console.log('error, getBaseName');
        }
    }

    const output = [];
    const diminutiveNames = ['jaś', 'małgosia'];
    const regularNames = await getBaseName(diminutiveNames);

    for(let idx of regularNames)
        output[output.length] = { id: n, name: regularNames[idx] };

    console.log(output);
})();