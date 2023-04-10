// Change table
const preTableEle = document.getElementById('previous-table');
const nextTableEle = document.getElementById('next-table');
const numberOfRows = document.getElementById('number-of-rows');
const tableEle = document.querySelectorAll('table');
const tableRows = document.querySelectorAll('table tbody tr');
const orderNumber = document.getElementById('order-number');
const sumOfRows = document.getElementById('number-of-pages');

let curPage = 1;
const amountOfItems = tableEle[0].rows.length;
const perPage = 10;
const numberOfPages = Math.ceil(amountOfItems / perPage);

sumOfRows.innerHTML = amountOfItems;

const btnDisabled = (button) => {
    button.classList.add("disabled");
    button.setAttribute("disabled", true);
}

const btnEnabled = (button) => {
    button.classList.remove("disabled");
    button.removeAttribute("disabled");
}

const handlePageButtonsStatus = () => {
    if (curPage === 1) {
        btnDisabled(preTableEle);
    } else {
        btnEnabled(preTableEle);
    }

    if (numberOfPages === curPage) {
        btnDisabled(nextTableEle);
    } else {
        btnEnabled(nextTableEle);    
    }
};

function changePage(pageNum){
    curPage = pageNum
    handlePageButtonsStatus();

    let lowerBoundItem = (pageNum - 1) * perPage + 1; // 11
    let upperBoundItem = pageNum * perPage; //20

    
    for (let i = 1; i < amountOfItems; i++){
        tableEle[0].rows[i].style.display = "none";
        if (i >= lowerBoundItem && i <= upperBoundItem){
            tableEle[0].rows[i].style.display = "";
        }
    }
    orderNumber.innerHTML = lowerBoundItem;
    numberOfRows.innerHTML = pageNum === numberOfPages ? amountOfItems - 1 : upperBoundItem;
}

// window.addEventListener("load", () => {
changePage(1);

preTableEle.addEventListener('click', () => {
    changePage(curPage - 1);
})

nextTableEle.addEventListener('click', () => {
    changePage(curPage + 1);
})
// })