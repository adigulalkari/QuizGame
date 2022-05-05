let scoreData = [
    { "name": 'Adi', "score": 180 },
    { "name": 'Pritish', "score": 560 },
    { "name": 'Diya', "score": 450 }
];

var sortedScore = scoreData.sort(function(a, b) {
    return a.score - b.id;
});

window.onload = () => {
    onAddScores(sortedScore);
}

const tbodyEl = document.querySelector("tbody");

function onAddScores(sortedScore) {
    for (let player of sortedScore)
        tbodyEl.innerHTML += `
            <tr>
                <td>${player.name}</td>
                <td>${player.score}</td>
            </tr>
        `;
}