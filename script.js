document.addEventListener('DOMContentLoaded', function () {
    const postForm = document.getElementById('post-form');
    const checkmark = document.getElementById('checkmark');
    const imageUpload = document.getElementById('image-upload');
    const cameraInput = document.getElementById('camera-input');

    cameraInput.addEventListener('change', function () {
        if (cameraInput.files.length > 0) {
            imageUpload.value = '';
        }
    });

    imageUpload.addEventListener('change', function () {
        if (imageUpload.files.length > 0) {
            cameraInput.value = '';
        }
    });

    postForm.addEventListener('submit', function (event) {
        event.preventDefault();

        if (imageUpload.files.length === 0 && cameraInput.files.length === 0) {
            alert('Please choose an image from files or take a photo.');
            return;
        }

        // Perform your desired actions with the form data here

        // Display the checkmark
        checkmark.style.display = 'block';

        // Optionally, you can redirect or clear the form after a certain period
        // setTimeout(function () {
        //     // Redirect or clear the form
        // }, 2000);
    });
});
