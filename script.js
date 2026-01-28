const container = document.getElementById("weapon-list");
const search = document.getElementById("search");

function render(list) {
    container.innerHTML = `
    <table>
        <thead>
            <tr>
                <th>Tier</th>
                <th>Weapon Name</th>
                <th>Level</th>
            </tr>
        </thead>
        <tbody>
            ${list.map(w => `
                <tr>
                    <td>${w.tier}</td>
                    <td>${w.name}</td>
                    <td>${w.level}</td>
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
