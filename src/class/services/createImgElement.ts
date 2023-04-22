export default function createImgElement(src: string): HTMLImageElement {
    const img = document.createElement('img');

    img.className = 'img-card-element'

    img.src = src;

    return img;
}