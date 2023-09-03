// making sure the code runs after the dom is ready
document.addEventListener('DOMContentLoaded', function() {
    // get elements from form
    var editButton = document.getElementById('edit-button'); // edit text button
    var intro = document.getElementById('intro-textbox');
    var title = document.getElementById('title-textbox');
    var applyButton = document.getElementById('apply-button');
    var content = document.getElementById('content-textbox');
    var isVisible = false; // indicates whether items are visible or not

    // event listener for edit button click
    editButton.addEventListener('click', function() {
        // change the visibility of the required elements
        if (!isVisible) {
            intro.style.display = 'block';
            title.style.display = 'block';
            content.style.display = 'block';
            applyButton.style.display = 'block';
        } else {
            intro.style.display = 'none';
            title.style.display = 'none';
            content.style.display = 'none';
            applyButton.style.display = 'none';
        }
        // change isvisible state
        isVisible = !isVisible;
    });

    // event listener for apply button click
    applyButton.addEventListener('click', function() {
        // change text in elements
        document.getElementById('intro-text').textContent = intro.value;
        document.getElementById('title-text').textContent = title.value;
        document.getElementById('content-text').textContent = content.value;
        // alert user
        alert('Changed successfully!');
    });
});