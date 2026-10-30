function formatDate(str) {
    return new Date(str).toLocaleDateString('ru-RU');
}

function createDealRow(deal) {
    const tr = document.createElement('tr');
    tr.onclick = () => openModal(deal);
    
    tr.innerHTML = `
        <td data-label="ID">${deal.id}</td>
        <td data-label="Название">${deal.title}</td>
        <td data-label="Статус">
            <span class="badge ${deal.status === "active" ? "badge-active" : "badge-new"}">
                ${deal.status === "active" ? "В работе" : "Новая"}
            </span>
        </td>
        <td data-label="Дата">${formatDate(deal.date)}</td>
    `;
    return tr;
}

function createDealCard(deal) {
    const article = document.createElement('article');
    article.className = 'card';
    article.onclick = () => openModal(deal);
    
    article.innerHTML = `
        <div class="card-header">
            <span>${deal.title}</span>
            <span class="badge ${deal.status === "active" ? "badge-active" : "badge-new"}">
                ${deal.status === "active" ? "В работе" : "Новая"}
            </span>
        </div>
        <p>${deal.description}</p>
        <div class="card-meta">
            <span>${formatDate(deal.date)}</span>
            <span>Приоритет: ${deal.priority}</span>
        </div>
    `;
    return article;
}

function createClientCard(client) {
    const article = document.createElement('article');
    article.className = 'card';
    article.innerHTML = `
        <h3>${client.title}</h3>
        <p>${client.description}</p>
        <div class="card-meta">Менеджер: ${client.manager}</div>
    `;
    return article;
}

function createActivityItem(act) {
    const li = document.createElement('li');
    li.className = 'activity-item';
    li.style.borderBottom = '1px solid var(--border-color)';
    li.style.padding = '12px 0';
    li.innerHTML = `
        <h4 style="margin-bottom: 4px;">${act.title}</h4>
        <p style="color: var(--text-muted); font-size: 14px;">${act.description}</p>
        <time style="font-size: 12px; color: var(--text-muted);">${formatDate(act.date)}</time>
    `;
    return li;
}
    