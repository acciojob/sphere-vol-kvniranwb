function volume_sphere(event) {
    if (event) event.preventDefault();

    const radiusInput = document.getElementById('radius').value;
    const volumeField = document.getElementById('volume');

    const radius = parseFloat(radiusInput);

    // Validate input: must be a number and non-negative
    if (isNaN(radius) || radius < 0) {
        volumeField.value = 'NaN';
        return false;
    }

    // Calculate volume of sphere: (4/3) * π * r^3
    const volume = (4 / 3) * Math.PI * Math.pow(radius, 3);

    // Round to 4 decimal places
    volumeField.value = volume.toFixed(4);

    return false;
}

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;