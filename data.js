function makeDeals(n) {
    let arr = [];
    for (let i = 1; i <= n; i++) {
        arr.push({
            id: "D-" + i,
            title: "Сделка " + i,
            description: "Описание сделки " + i,
            status: i % 2 === 0 ? "active" : "new",
            date: "2026-10-" + String(10 + (i % 9)).padStart(2, '0') + "T10:00:00Z",
            priority: (i % 3) + 1,
            manager: "Азизов Э.З."
        });
    }
    return arr;
}

function makeClients(n) {
    let arr = [];
    for (let i = 1; i <= n; i++) {
        arr.push({
            id: "C-" + i,
            title: "Клиент " + i,
            description: "ООО Компания " + i,
            status: "active",
            date: "2026-09-15T10:00:00Z",
            manager: "Саргсян К.М."
        });
    }
    return arr;
}

function makeActivities(n) {
    let arr = [];
    for (let i = 1; i <= n; i++) {
        arr.push({
            id: "A-" + i,
            title: "Звонок " + i,
            description: "Обсуждение условий",
            date: "2026-10-20T14:30:00Z",
            status: "done"
        });
    }
    return arr;
}

const deals = makeDeals(15);
const clients = makeClients(15);
const activities = makeActivities(15);
