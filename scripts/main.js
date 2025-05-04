async function ladeDaten() {
    const res = await fetch('data/spiele.json');
    const daten = await res.json();

    // Spiele
    const spieleContainer = document.querySelector('.spiele-liste');
    daten.spiele.forEach(spiel => {
        const el = document.createElement('div');
        el.textContent = `${spiel.datum} ${spiel.uhrzeit} – vs. ${spiel.gegner} (${spiel.ort})`;
        spieleContainer.appendChild(el);
    });

    // Ergebnisse
    const ergebnisContainer = document.querySelector('.ergebnis-liste');
    daten.ergebnisse.forEach(e => {
        const el = document.createElement('div');
        el.textContent = `${e.datum} – ${e.gegner}: ${e.ergebnis} (${e.ort})`;
        ergebnisContainer.appendChild(el);
    });

    // Tabelle
    const tabelleContainer = document.querySelector('.tabelle-wrapper');
    const table = document.createElement('table');
    table.innerHTML = `<tr><th>Platz</th><th>Team</th><th>Spiele</th><th>Siege</th><th>Niederlagen</th><th>Punkte</th></tr>`;
    daten.tabelle.forEach(team => {
        table.innerHTML += `<tr>
            <td>${team.platz}</td>
            <td>${team.team}</td>
            <td>${team.spiele}</td>
            <td>${team.siege}</td>
            <td>${team.niederlagen}</td>
            <td>${team.punkte}</td>
        </tr>`;
    });
    tabelleContainer.appendChild(table);
}

document.addEventListener('DOMContentLoaded', ladeDaten);
