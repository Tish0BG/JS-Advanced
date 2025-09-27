function extract(content) {
    const element = document.getElementById(content);
    const text = element.textContent;

    const matches = [...text.matchAll(/\(([^)]+)\)/g)];
    const result = matches.map(m => m[1]).join('; ');
    return result
}