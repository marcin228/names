# Short recruitment assignment

The task was to change an array of diminutives into their proper form and enclose them in seperate objects with unique ids.
At first I wanted to scrape and process some open source lists with names. Unfortunately there were no lists available.
So I came up with an idea of asking AI API for it.

I have prepared an async function that makes an API call via proper method with headers and body content that complies with OpenAI API.
There are two error handling mechanisms:
* check of a status of a response
* try/catch block that wraps whole fetch call and data extraction from the response

What about performance? To minify the overhead of many small calls I have prepared a query that will receive result in a form of list so the number of tokens spent is optimized.