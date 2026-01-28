const container = document.getElementById("weapon-list");
const search = document.getElementById("search");

function render(list) {
    container.innerHTML = `
    <table>
        <thead>
            <tr>
                <th>Tier</th>
                <th>Weapon</th>
                <th>Damage</th>
                <th>Recoil</th>
                <th>Fire Rate</th>
            </tr>
        </thead>
        <tbody>
            ${list.map(w => `
                <tr>
                    <td>${w.tier}</td>
                    <td>${w.name}</td>
                    <td>${w.damage}</td>
                    <td>${w.recoil}</td>
                    <td>${w.fireRate}</td>
                </tr>
            `).join("")}
        </tbody>
    </table>
    `;
}

render(weapons);

search.addEventListener("input", () => {
    const value = search.value.toLowerCase();
    render(weapons.filter(w => w.name.toLowerCase().includes(value)));
});
