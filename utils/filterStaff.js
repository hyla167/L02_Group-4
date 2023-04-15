const btnSearchStaff = document.getElementById('btn-search');
const btnSearchResetStaff = document.getElementById('btn-search-reset');
const tableSecEle = document.querySelectorAll('#second-table');
const tableSecRows = document.querySelectorAll('#second-table tbody tr');
const nameIdStaff = document.getElementById('id-name-staff');
const positionStaffEle = document.getElementById('search-position-staff');

const previousBtn = document.getElementById('previous-table-filter-2');
const nextBtn = document.getElementById('next-table-filter-2');
const numRows = document.getElementById('number-of-rows-filter-2');
const orderNums = document.getElementById('order-number-filter-2');
const sumRows = document.getElementById('number-of-pages-filter-2');
const flipFlopPart = document.querySelector(".flip-flop-part");
const flipFlopFiltering = document.querySelector(".flip-flop-filtering");

var firstTime = true;

const disableBtn = (button) => {
    button.classList.add("disabled");
    button.setAttribute("disabled", true);
}

const enableBtn = (button) => {
    button.classList.remove("disabled");
    button.removeAttribute("disabled");
}
let currentPage = 1;
let numberOfItems = 0;
const itemPerPage = 7;
btnSearchResetStaff.addEventListener('click', () => {
    location.replace('/staff');
})
function setCurrentPage(pageNum, tempArr){
    currentPage = pageNum;
    if (currentPage === 1){
        disableBtn(previousBtn);
    }
    else{
        enableBtn(previousBtn);
    }

    if (Math.ceil(numberOfItems / itemPerPage) === currentPage){
        disableBtn(nextBtn);
    }
    else{
        enableBtn(nextBtn);    
    }

    let lowerBoundItem = (pageNum - 1) * itemPerPage; // 11
    let upperBoundItem = pageNum * itemPerPage; //20
    console.log("Number of items: " + numberOfItems);
    for (let i = 0; i < numberOfItems; i++){
        console.log(tempArr[i]);
        tempArr[i].style.display = "none";
        if (i >= lowerBoundItem && i < upperBoundItem){
            tempArr[i].style.display = "";
        }
    }
    if (tempArr.length == 0) { 
        orderNums.innerHTML = 0;
        numRows.innerHTML = 0;
        disableBtn(nextBtn);
    }
    else {
        orderNums.innerHTML = lowerBoundItem + 1;
        numRows.innerHTML = pageNum === Math.ceil(numberOfItems / itemPerPage) ? tempArr.length : upperBoundItem;
    }
}
function changeTable(tempArr){
    setCurrentPage(1, tempArr);
    if (firstTime) {
        previousBtn.addEventListener('click', () => {
            setCurrentPage(currentPage - 1, tempArr);
        })

        nextBtn.addEventListener('click', () => {
            setCurrentPage(currentPage + 1, tempArr);
        })
        firstTime = false;
    }
}


btnSearchStaff.addEventListener('click', () => {
    flipFlopPart.style.display = "none";
    flipFlopFiltering.style.display = "flex";
    let num = 0, tempArr = [];
    const selectValue = positionStaffEle.options[positionStaffEle.selectedIndex].text; // need to put in this function, putting outside always give the first option
    if (selectValue !== "Chọn vị trí" && nameIdStaff.value){
        for (let i = 0; i < tableSecRows.length; i++){
            let pos = tableSecRows[i].getElementsByTagName('th')[4].innerHTML;
            let nameStaff = tableSecRows[i].getElementsByTagName('th')[1].innerHTML;
            let idStaff = tableSecRows[i].getElementsByTagName('th')[0].innerHTML;
            if (pos == selectValue && (nameStaff == nameIdStaff.value || idStaff == nameIdStaff.value)){
                tempArr.push(tableSecRows[i]);
                num++;
            }
            else{
                tableSecRows[i].style.display = "none";
            }
        }
    }else if (selectValue !== "Chọn vị trí" && nameIdStaff.value == ""){
        for (let i = 0; i < tableSecRows.length; i++){
            let pos = tableSecRows[i].getElementsByTagName('th')[4].innerHTML;
            if (pos == selectValue){
                tempArr.push(tableSecRows[i]);
                num++;
            }
            else{
                tableSecRows[i].style.display = "none";
            }
        }
    }
    else if (nameIdStaff.value){
        for (let i = 0; i < tableSecRows.length; i++){
            let nameStaff = tableSecRows[i].getElementsByTagName('th')[1].innerHTML;
            let idStaff = tableSecRows[i].getElementsByTagName('th')[0].innerHTML;
            if (nameStaff == nameIdStaff.value || idStaff == nameIdStaff.value){
                tempArr.push(tableSecRows[i]);
                num++;
            }
            else{
                tableSecRows[i].style.display = "none";
            }
        }
    }
    else {
        location.replace('/staff');
    }
    numberOfItems = num;
    sumRows.innerHTML = numberOfItems;
    changeTable(tempArr);
})
