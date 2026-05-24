const izvuciSliku = (html) => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');
    const img = doc.querySelector('img');
    return img ? img.src : null;
};

export default izvuciSliku;
