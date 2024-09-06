async function dataShow() {
    let mytable=`
    <table>
    <tr>
    <th>Employee</th>
    <th>Name</th>
    <th>City</th>
    <th>Salary<th>
    <th>Actions</th>
    </tr>

    `;

    let url="http://localhost:3000/employees";

    let myobj=await fetch(url);
    console.log(myobj);

    let mydata=await myobj.json();
    console.log(mydata);
    


    mydata.map((key)=>{
        mytable +=`
        <tr>
        <td><input type="text" value="${key.employeeno}" id="eno-${key.id}" readonly</td>
        <td><input type="text" value="${key.name}" id="nm-${key.id}" readonly</td>
        <td><input type="text" value="${key.city}" id="city-${key.id}" readonly</td>
        <td><input type="text" value="${key.salary}" id="salary-${key.id}" readonly</td>\
    
        <td>
        <a href="#" onclick="myrecordRemove(${key.id})" class="button button-delete">Delete</a>
        <a href="#" onclick="editRow(${key.id})" id="edit-${key.id}"class="button button-edit">Edit</a>
        <a href="#" onclick="saveRow(${key.id})" id="save-${key.id}"class="button button-save" style="display: none;">Save</a>
       </td>
       </tr>

        `;
    });
    mytable +=`</table>`;
document.getElementById("demo").innerHTML=mytable;
}
dataShow();






// Function to remove a record (Delete)
function myrecordRemove(id) {
    // Make an API call to delete the record from the server
    fetch(`http://localhost:3000/employees/${id}`, { method: 'DELETE' })
      .then(response => {
        if (response.ok) {
          // Remove the row from the table
          document.getElementById(`row-${id}`).remove();
          console.log('Record deleted successfully');
        } else {
          console.error('Failed to delete the record');
        }
      })
      .catch(error => console.error('Error deleting record:', error));
  }
  
  // Function to edit a row (Edit)
  function editRow(id) {
    // Make input fields editable
    document.getElementById(`eno-${id}`).removeAttribute('readonly');
    document.getElementById(`nm-${id}`).removeAttribute('readonly');
    document.getElementById(`city-${id}`).removeAttribute('readonly');
    document.getElementById(`salary-${id}`).removeAttribute('readonly');
  
    // Show "Save" button and hide "Edit" button
    document.getElementById(`edit-${id}`).style.display = 'none';
    document.getElementById(`save-${id}`).style.display = 'inline-block';
  }
  
  // Function to save a row (Save)
  function saveRow(id) {
    // Read the updated values
    const updatedData = {
      employeeno: document.getElementById(`eno-${id}`).value,
      name: document.getElementById(`nm-${id}`).value,
      city: document.getElementById(`city-${id}`).value,
      salary: document.getElementById(`salary-${id}`).value
    };
  
    // Make an API call to save the updated data to the server
    fetch(`http://localhost:3000/employees/${id}`, {
      method: 'PUT', // or 'PATCH' depending on your API
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(updatedData)
    })
      .then(response => {
        if (response.ok) {
          console.log('Record updated successfully');
  
          // Make input fields read-only again
          document.getElementById(`eno-${id}`).setAttribute('readonly', true);
          document.getElementById(`nm-${id}`).setAttribute('readonly', true);
          document.getElementById(`city-${id}`).setAttribute('readonly', true);
          document.getElementById(`salary-${id}`).setAttribute('readonly', true);
  
          // Show "Edit" button and hide "Save" button
          document.getElementById(`edit-${id}`).style.display = 'inline-block';
          document.getElementById(`save-${id}`).style.display = 'none';
        } else {
          console.error('Failed to update the record');
        }
      })
      .catch(error => console.error('Error updating record:', error));
  }





