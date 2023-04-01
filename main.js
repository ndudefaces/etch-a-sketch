const container = document.querySelector('#container');

function createBoxes(numBox) {
    for (let i=0; i < numBox; i++) {
        const row = container.appendChild(document.createElement('div'));
        for (let j=0; j < numBox; j++) {
            const square = document.createElement('div');
            square.className = 'box';
            row.appendChild(square);
        }
    }
}

createBoxes(16);