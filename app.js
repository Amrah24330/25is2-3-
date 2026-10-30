let currentDeals = [...deals];
let sortAsc = true;


function renderAll() {
    
    const tbody = document.getElementById('deals-body');
    tbody.innerHTML = ''; 
    currentDeals.forEach(deal => tbody.appendChild(createDealRow(deal)));

   
    const dealsCards = document.getElementById('deals-cards-container');
    dealsCards.innerHTML = '';
    currentDeals.forEach(deal => dealsCards.appendChild(createDealCard(deal)));

  
    const clientsBox = document.getElementById('clients-box');
    clientsBox.innerHTML = '';
    clients.forEach(client => clientsBox.appendChild(createClientCard(client)));

    
    const actList = document.getElementById('activities-list');
    actList.innerHTML = '';
    activities.forEach(act => actList.appendChild(createActivityItem(act)));
}


function applyFilters() {
    const searchText = document.getElementById('search').value.toLowerCase();
    const statusVal = document.getElementById('status-filter').value;

    currentDeals = deals.filter(deal => {
        const matchSearch = deal.title.toLowerCase().includes(searchText);
        const matchStatus = statusVal === 'all' || deal.status === statusVal;
        return matchSearch && matchStatus;
    });

    renderAll();
}
document.querySelectorAll('th[data-sort]').forEach(th => {
    th.addEventListener('click', () => {
        const field = th.getAttribute('data-sort');
        const arrow = th.querySelector('.arrow');
        
        document.querySelectorAll('.arrow').forEach(a => a.textContent = '↕');
        
        currentDeals.sort((a, b) => {
            if (a[field] < b[field]) return sortAsc ? -1 : 1;
            if (a[field] > b[field]) return sortAsc ? 1 : -1;
            return 0;
        });

        arrow.textContent = sortAsc ? '↓' : '↑';
        sortAsc = !sortAsc;
        renderAll();
    });
});

document.querySelectorAll('input[name="view"]').forEach(radio => {
    radio.addEventListener('change', (e) => {
        const isTable = e.target.value === 'table';
        document.getElementById('table-view').classList.toggle('hidden', !isTable);
        document.getElementById('cards-view').classList.toggle('hidden', isTable);
    });
});


document.getElementById('search').addEventListener('input', applyFilters);
document.getElementById('status-filter').addEventListener('change', applyFilters);
document.getElementById('reset-btn').addEventListener('click', () => {
    document.getElementById('search').value = '';
    document.getElementById('status-filter').value = 'all';
    currentDeals = [...deals];
    renderAll();
});

const modal = document.getElementById('modal');
const modalBody = document.getElementById('modal-body');
let previousFocus = null;

function openModal(deal) {
    previousFocus = document.activeElement;
    document.body.style.overflow = 'hidden';
    
    modalBody.innerHTML = `<p><strong>ID:</strong> ${deal.id}</p>
                           <p><strong>Название:</strong> ${deal.title}</p>
                           <p><strong>Описание:</strong> ${deal.description}</p>
                           <p><strong>Менеджер:</strong> ${deal.manager}</p>`;
    
    modal.classList.remove('hidden');
    document.getElementById('close-modal').focus();
}

function closeModal() {
    modal.classList.add('hidden');
    document.body.style.overflow = '';
    if (previousFocus) previousFocus.focus();
}

document.getElementById('close-modal').addEventListener('click', closeModal);
document.getElementById('modal-cancel').addEventListener('click', closeModal);

modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
});

document.addEventListener('keydown', (e) => {
    if (modal.classList.contains('hidden')) return;
    if (e.key === 'Escape') closeModal();
    
    if (e.key === 'Tab') {
        const focusable = modal.querySelectorAll('button, [href], input, select, textarea');
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (e.shiftKey && document.activeElement === first) { last.focus(); e.preventDefault(); }
        else if (!e.shiftKey && document.activeElement === last) { first.focus(); e.preventDefault(); }
    }
});

renderAll();
const btnDeals = document.querySelector('.btn1');
const btnClients = document.querySelector('.btn2');
const btnActivities = document.querySelector('.btn3');

const sectionDeals = document.getElementById('deals');
const sectionClients = document.getElementById('clients');
const sectionActivities = document.getElementById('activities');

function hideAllSections() {
    sectionDeals.style.display = 'none';
    sectionClients.style.display = 'none';
    sectionActivities.style.display = 'none';
}


btnDeals.onclick = () => {
    hideAllSections();
    sectionDeals.style.display = 'block';
    closeMenu(); 
};

btnClients.onclick = () => {
    hideAllSections();
    sectionClients.style.display = 'block';
    closeMenu();
};

btnActivities.onclick = () => {
    hideAllSections();
    sectionActivities.style.display = 'block';
    closeMenu();
};


hideAllSections();
sectionDeals.style.display = 'block';