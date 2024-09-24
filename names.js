(async () => {

    const getBaseName = async function (diminutive) {

        const apiKey = 'SUPER_SECRET_OPENAI_API_KEY';

        try {

            const response = await fetch('https://api.openai.com/v1/engines/davinci-codex/completions', {

                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${apiKey}`
                },
                body: JSON.stringify({
                    prompt: `podaj najpopularniejszą, dorosłą wersję imienia ${diminutive} w mianowniku, użyj tylko jednego słowa, nie stosuj interpunkcji`,
                    max_tokens: 1
                })
            });

            if(response.status != 200)
                throw new Error('error, getBaseName, response');

            let result = await response.json();
            result = result.choices[0].text.trim();

            return result;
        }
        catch (e) {

            console.log('error, getBaseName');
        }
    }

    const names = ['jaś', 'małgosia'];
    const result = [];

    for(let n of names)
        result[result.length] = { id: n, name: await getBaseName(names[n]) };

    console.log(result);
})();