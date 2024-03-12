function fetchEmployees() {
    fetch('https://example.com/api/employees')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        console.log(data); // Process and display the data as needed
    })
    .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
    });
}

function addEmployee(employeeData) {
    fetch('https://example.com/api/employees', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(employeeData), // Convert the JavaScript object to a JSON string
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        console.log('Employee added successfully:', data);
    })
    .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
    });
}

// Example usage of addEmployee
const newEmployee = {
    name: "John Doe",
    position: "Software Developer",
    department: "Engineering"
};

addEmployee(newEmployee);
