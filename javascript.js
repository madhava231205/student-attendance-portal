function showAddStudentForm() {
    document.getElementById('addStudentPopup').
        style.display = 'block';
}

function showAddClassForm() {
    // Show the add class popup
    document.getElementById('addClassPopup').
        style.display = 'block';
}

function addStudent() {
     array = new Array();
    // Get input values
    const newStudentName = document.
        getElementById('newStudentName').value;
    const newStudentRoll = document.
        getElementById('newStudentScholarID').value;

    if (!newStudentName || !newStudentRoll) {
        alert("Please provide both name and roll number.");
        return;
    }

    // Add the new student to the list
    const classSelector = document.
        getElementById('classSelector');
    const selectedClass = classSelector.
        options[classSelector.selectedIndex].value;
    const studentsList = document.
        getElementById('studentsList');

    const listItem = document.createElement('li');
    listItem.setAttribute('data-roll-number', newStudentRoll);
    listItem.innerHTML =
        `<strong>
            ${newStudentName}
        </strong> 
        (ScholarID. ${newStudentRoll})`;

    const absentButton =
        createButton('A', 'absent',
            () => markAttendance('absent', listItem, selectedClass));
    const presentButton =
        createButton('P', 'present',
            () => markAttendance('present', listItem, selectedClass));
    const leaveButton =
        createButton('L', 'leave',
            () => markAttendance('leave', listItem, selectedClass));
    const deletebutton = createButton('X', 'remove', () => listItem.remove());
            
    listItem.appendChild(absentButton);
    listItem.appendChild(presentButton);
    listItem.appendChild(leaveButton);
    listItem.appendChild(deletebutton);

    studentsList.appendChild(listItem);
    closePopup();
    
}

function addClass() {
    const newClassName = document.
        getElementById('newClassName').value;

    if (!newClassName) {
        alert("Please provide a class name.");
        return;
    }

    // Add the new class to the class selector
    const classSelector = document.
        getElementById('classSelector');
    const newClassOption = document.
        createElement('option');
    newClassOption.value = newClassName;
    newClassOption.text = newClassName;
    classSelector.add(newClassOption);
    closePopup();
}
function closePopup() {
    // Close the currently open popup
    document.getElementById('addStudentPopup').
        style.display = 'none';
    document.getElementById('addClassPopup').
        style.display = 'none';
        document.getElementById('summary').style.display = 'none';
    
}

function createButton(text, status, onClick) {
    const button = document.createElement('button');
    button.type = 'button';
    button.innerText = text;
    button.className = status;
    button.onclick = onClick;

    return button;

}
function markAttendance
    (status, listItem, selectedClass) {
         
    
    // Find the corresponding student name
    const studentName = listItem.
        querySelector('strong').innerText;

    // Update the background color of the student 
    // row based on the attendance status
    listItem.style.backgroundColor = 
        getStatusColor(status);

    
        
     
        
        
    
}




function getStatusColor(status) {
    switch (status) {
        case 'absent':
            return '#e74c3c';
        case 'present':
            return '#2ecc71';
        case 'leave':
            return '#f39c12';
        default:
            return '';
    }
}


getsummary= document.getElementById('getsummary')
getsummary.addEventListener('click',function getsummary(){
    document.getElementById('summary').style.display="block";
    const totalstudents= document.getElementsByTagName('li').length;
      document.getElementById('studentsnumber').innerHTML = `Total students: <strong> ${totalstudents}</strong>`;

      

    
            

    
    





})

function showStudentsList() {
    const classSelector = 
        document.getElementById('classSelector');
    const selectedClass = classSelector.
        options[classSelector.selectedIndex].value;

    const studentsList = 
        document.getElementById('studentsList');
    studentsList.innerHTML = '';
    
}
