// function handleSearch() {
//     let search = searchInput.value

//     let result = studentList.filter((student)=>{
//         return student.name.toLowerCase().includes(search.toLowerCase()) || student.age.includes(search) || student.grade.includes(search) || student.gender.includes(search)
//     })
//     displayStudent(result)
// }
// JavaScript code to manipulate the DOM

// Function to handle search input
function handleSearch() {
    const searchInput = document.getElementById('searchInput');
    const inputValue = searchInput.value;
    console.log('Search query:', inputValue);
    // You can perform further actions here, such as filtering or highlighting search results
  }
  
  // Function to toggle sidebar visibility
  function toggleSidebar() {
    const sidebar = document.querySelector('.left-sidebar');
    sidebar.classList.toggle('sidebar-hidden');
  }
  
  // Add event listeners to elements
  document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('searchInput');
    const headerMenuButton = document.getElementById('header-menu');
    
    // Add event listener for search input
    searchInput.addEventListener('input', handleSearch);
  
    // Add event listener for header menu button
    headerMenuButton.addEventListener('click', toggleSidebar);
  });
  