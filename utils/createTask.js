// Create new Task
const createTaskEle = document.querySelector('.create-task-interface');
const btnCreateTask = document.getElementById('creat-task');
const closeDialogEle = document.getElementById('close-dialog');
const titleCreateDialog = document.querySelector('.create-task-interface .create-task-dialog h2');
document.querySelectorAll(".header ul li a")[0].classList.add("active");
btnCreateTask.addEventListener('click', () => {
    createTaskEle.style.display = "block";
    titleCreateDialog.innerHTML = "Tạo nhiệm vụ mới";
    // When the user clicks anywhere outside of the dialog, close it
    window.onclick = function(event) {
        if (event.target == createTaskEle) {
            // console.log(event.target);
            createTaskEle.style.display = "none";
        }
    }
    closeDialogEle.addEventListener('click', () => {
        console.log(2);
        createTaskEle.style.display = "none";
    })
})





// Save new task
const createMcpEle = document.querySelector('.create-mcp');
const createTaskDialogEle = document.querySelector('.create-task-dialog');
const btnBack = document.getElementById('back');
const btnSaveTask = document.getElementById('save-task');
const btnContinue = document.getElementById('btn-continue');
const saveNotice = document.querySelector('.successful-save');
const saveNoticeText = document.querySelector('.successful-save p');
// console.log(saveNoticeText.textContent)

btnContinue.addEventListener('click', () => {
    createMcpEle.style.display = "block";
    createTaskDialogEle.style.display = "none";
 /*    btnSaveTask.disabled = true;
    console.log('Button Disabled');
    setTimeout(()=>{
          btnSaveTask.disabled = false;
          console.log('Button Activated')}, 1000) */
})

btnBack.addEventListener('click', () => {
    createMcpEle.style.display = "none";
    createTaskDialogEle.style.display = "block";
})

btnSaveTask.addEventListener('click', () => {
    createTaskEle.style.display = "none";
    saveNotice.style.display = "block";
    saveNoticeText.textContent = "Lưu thành công";
    autoClose();
})

function autoClose(){
    timeout = setTimeout(() => {
        saveNotice.style.display = "none";
    }, 5000);
}

function next() {
    createTaskDialogEle.style.display = "none";
    createMcpEle.style.display = "block";
}

function prev() {
    createTaskDialogEle.style.display = "block";
    createMcpEle.style.display = "none";
}

function submit() {
    createMcpEle.style.display = "none";
    document.getElementById('new-task-form').submit();
}

function SelectFirst(SelVal) {
    var arrSelVal = SelVal.split(",")
    if (arrSelVal.length > 1) {
      Valuetoselect = arrSelVal[0];
      document.getElementById("collector").value = Valuetoselect;
    }
  }
var janitorOptionClicked = false;
var vehicleOptionClicked = false;

  function displayOption() {
    if (!janitorOptionClicked) {
    document.getElementById('collector-option').style.display = "block";
    janitorOptionClicked = true;
    }
    else {
      document.getElementById('collector-option').style.display = "none";
      janitorOptionClicked = false;
      }
  }

  function closeCollector1() {
    document.getElementById('collector').value = "Nguyễn Văn A";
    document.getElementById('collector-option').style.display = "none";
  }
  function closeCollector2() {
    document.getElementById('collector').value = "Nguyễn Văn B";
    document.getElementById('collector-option').style.display = "none";
  }
  function closeCollector3() {
    document.getElementById('collector').value = "Nguyễn Văn C";
    document.getElementById('collector-option').style.display = "none";
  }
  function closeCollector4() {
    document.getElementById('collector').value = "Nguyễn Văn D";
    document.getElementById('collector-option').style.display = "none";
  }
  function closeCollector5() {
    document.getElementById('collector').value = "Nguyễn Thị E";
    document.getElementById('collector-option').style.display = "none";
  }

  function displayOption1() {
    if (!vehicleOptionClicked) {
    document.getElementById('vehicle-option').style.display = "block";
    vehicleOptionClicked = true;
    }
    else {
      document.getElementById('vehicle-option').style.display = "none";
      vehicleOptionClicked = false;
    }
  }

  function closeVehicle1() {
    document.getElementById('vehicle').value = "64A-12345";
    document.getElementById('vehicle-option').style.display = "none";
  }
  function closeVehicle2() {
    document.getElementById('vehicle').value = "64A-12346";
    document.getElementById('vehicle-option').style.display = "none";
  }
  function closeVehicle3() {
    document.getElementById('vehicle').value = "64A-12347";
    document.getElementById('vehicle-option').style.display = "none";
  }
  function closeVehicle4() {
    document.getElementById('vehicle').value = "64A-12348";
    document.getElementById('vehicle-option').style.display = "none";
  }
  function closeVehicle5() {
    document.getElementById('vehicle').value = "64A-12349";
    document.getElementById('vehicle-option').style.display = "none";
  }

  function displayEditOption() {
    if (!janitorOptionClicked) {
    document.getElementById('collector-options').style.display = "block";
    janitorOptionClicked = true;
    }
    else {
      document.getElementById('collector-options').style.display = "none";
      janitorOptionClicked = false;
      }
  }
  function closeEditCollector1() {
    document.getElementById('collector-opt').value = "Nguyễn Văn A";
    document.getElementById('collector-options').style.display = "none";
  }
  function closeEditCollector2() {
    document.getElementById('collector-opt').value = "Nguyễn Văn B";
    document.getElementById('collector-options').style.display = "none";
  }
  function closeEditCollector3() {
    document.getElementById('collector-opt').value = "Nguyễn Văn C";
    document.getElementById('collector-options').style.display = "none";
  }
  function closeEditCollector4() {
    document.getElementById('collector-opt').value = "Nguyễn Văn D";
    document.getElementById('collector-options').style.display = "none";
  }
  function closeEditCollector5() {
    document.getElementById('collector-opt').value = "Nguyễn Thị E";
    document.getElementById('collector-options').style.display = "none";
  }

  function displayEditOption1() {
    if (!janitorOptionClicked) {
    document.getElementById('vehicle-options').style.display = "block";
    janitorOptionClicked = true;
    }
    else {
      document.getElementById('vehicle-options').style.display = "none";
      janitorOptionClicked = false;
      }
  }

  function closeEditVehicle1() {
    document.getElementById('vehicle-opt').value = "64A-12345";
    document.getElementById('vehicle-options').style.display = "none";
  }
  function closeEditVehicle2() {
    document.getElementById('vehicle-opt').value = "64A-12346";
    document.getElementById('vehicle-options').style.display = "none";
  }
  function closeEditVehicle3() {
    document.getElementById('vehicle-opt').value = "64A-12347";
    document.getElementById('vehicle-options').style.display = "none";
  }
  function closeEditVehicle4() {
    document.getElementById('vehicle-opt').value = "64A-12348";
    document.getElementById('vehicle-options').style.display = "none";
  }
  function closeEditVehicle5() {
    document.getElementById('vehicle-opt').value = "64A-12349";
    document.getElementById('vehicle-options').style.display = "none";
  }
 
