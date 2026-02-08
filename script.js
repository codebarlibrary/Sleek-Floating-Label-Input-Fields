const ageInput = document.getElementById('ageInput');

ageInput.addEventListener('input', (e) => {
    console.log("Current Age:", e.target.value);
});