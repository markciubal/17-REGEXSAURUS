
const regexsaurusHandler = async (event) => {
    // TODO: Add a comment describing the functionality of this statement
    event.preventDefault();
    // TODO: Add a comment describing the functionality of these expressions
    const regex = document.querySelector('#regex').value.trim();
    const regexOutput = document.querySelector('#regex-output');
    const devourButton = document.querySelector('#devour-button');
    const devourText = document.querySelector('#devour-text');
    const devourSpinner = document.querySelector('#devour-spinner');

    if (regex) {
        devourButton.disabled = true;
        devourSpinner.style.display = 'inline-block';
        devourText.textContent = 'Devouring...';
      // TODO: Add a comment describing the functionality of this expression
      const response = await fetch('/regexsaurus', {
        method: 'POST',
        body: JSON.stringify({ regex }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        regexOutput.textContent = await response.json();
      } else {
        alert('Failed to identify REGEX pattern. Rar!');
      }
        devourSpinner.style.display = 'none';
        devourButton.disabled = false;
        devourText.textContent = 'Devour';
    }
  };
  
  document.querySelector('.regex-form').addEventListener('submit', regexsaurusHandler);
  