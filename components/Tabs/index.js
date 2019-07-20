// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

const createTab = (response, index) => {
    let tab;

    // ultimate ghetto technique 
    response.length = index

    // add text content
    response.reverse().forEach((el) => {
        tab = document.createElement('div')
        tab.classList.add('tab');
        tab.textContent = el;
    });
    return tab;

}

// get data 
axios.get(' https://lambda-times-backend.herokuapp.com/topics')
    .then(response => {
        console.log(`Success: ${response.data.topics}`);

        // create tab
        let tab1 = createTab(response.data.topics, 5);
        let tab2 = createTab(response.data.topics, 4);
        let tab3 = createTab(response.data.topics, 3);
        let tab4 = createTab(response.data.topics, 2);
        let tab5 = createTab(response.data.topics, 1);

        // append
        const topics = document.querySelector('.topics')
        topics.appendChild(tab1);
        topics.appendChild(tab2);
        topics.appendChild(tab3);
        topics.appendChild(tab4);
        topics.appendChild(tab5);

        // let tabs = [tab1, tab2, tab3, tab4, tab5]
        // tabs.forEach(el => new TabLink(el));
    })
    .catch(err => {
        console.log(err);
    });

// class TabLink {
//     constructor(tabElement) {
//         this.tabElement = tabElement;
//         this.tabData = this.tabElement.dataset.tab;

//         if (this.tabData === 'all') {
//             this.cards = document.querySelectorAll('.card');
//         } else {
//             this.cards = document.querySelectorAll(`.card[data-tab="${this.tabData}"]`);
//         }

//         this.cards = Array.from(this.cards).map(el => new TabCard(el));
//         this.tabElement.addEventListener('click', this.selectTab.bind(this));
//     }

//     selectTab() {

//         const tabs = document.querySelectorAll('.tab');
//         tabs.forEach(el => el.classList.remove('active-tab'));
//         const cards = document.querySelectorAll('.card');
//         cards.forEach(el => el.style.display = "none");
//         this.tabElement.classList.toggle('active-tab');
//         this.cards.forEach(card => card.selectCard());
//     }
// }

// class TabCard {
//     constructor(cardElement) {
//         this.cardElement = cardElement;
//     }
//     selectCard() {
//         this.cardElement.style.display = "flex";
//     }

// }