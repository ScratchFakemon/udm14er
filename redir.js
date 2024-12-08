// Get the current URL
const currentUrl = new URL(window.location.href);

// Check if the 'udm' parameter already exists
if (!currentUrl.searchParams.has('udm')) {
  // Add the 'udm' parameter with value '14'
  currentUrl.searchParams.append('udm', '14');
  
  // Update the browser history with the modified URL
  window.history.replaceState({}, document.title, currentUrl.href);
}