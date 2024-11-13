// I love you, https://regexr.com/ <3

function sanitize_prompt(prompt) {

    // remove any instances of "((()))" or "( )" and similar
    while (prompt.match(/(\( +\))/g).length > 0) {
        
        prompt = prompt.replace(/(\( +\))/g, "");
    }

    return prompt;
}
