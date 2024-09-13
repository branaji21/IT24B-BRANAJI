class Flower {
    constructor(name, color, bloomSeason, isFragrant) {
        this.name = name;
        this.color = color;
        this.bloomSeason = bloomSeason;
        this.isFragrant = isFragrant;
    }

    bloom() {
        return `The ${this.name} blooms in ${this.bloomSeason}.`;
    }

    fragrance() {
        return this.isFragrant ? `The ${this.name} is fragrant.` : `The ${this.name} is not fragrant.`;
    }

    colorDisplay() {
        return `The ${this.name} has a beautiful ${this.color} color.`;
    }
}


const flower = new Flower('Rose', 'red', 'Spring', true);


document.addEventListener('DOMContentLoaded', () => {
    const flowerInfoDiv = document.getElementById('flower-info');
    
    flowerInfoDiv.innerHTML = `
        <p>${flower.bloom()}</p>
        <p>${flower.fragrance()}</p>
        <p>${flower.colorDisplay()}</p>
    `;
});
