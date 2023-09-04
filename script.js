// making sure the code runs after the dom is ready
document.addEventListener('DOMContentLoaded', function() {

    // helper function to divide text into paragraphs based on \n 
    function splitToParagraphs(textToSplit, elem) {
        // split content into lines
        var lines = textToSplit.split('\n');
        // create a new paragraph element for each line and append it to text container
        lines.forEach(function(line) {
            var paragraph = document.createElement('p');
            paragraph.textContent = line;
            elem.appendChild(paragraph);
        });
    }
    
    // get elements from form
    var editButton = document.getElementById('edit-button'); // edit text button
    var intro = document.getElementById('intro-textbox');
    var title = document.getElementById('title-textbox');
    var applyButton = document.getElementById('apply-button');
    var content = document.getElementById('content-textbox');
    var isVisible = false; // indicates whether items are visible or not

    // get items from local storage
    var introValue = localStorage.getItem('introValue');
    var titleValue = localStorage.getItem('titleValue');
    var contentValue = localStorage.getItem('contentValue');
    
    // if null, change text
    if (introValue == null) {
        introValue = "A long time ago in a galaxy far,\nfar away...."
    }
    var introValueElement = document.getElementById('introValue');
    splitToParagraphs(introValue, introValueElement);
        
    if (titleValue == null) {
        titleValue = "episode iv\na new hope";
    }
    var titleValueElement = document.getElementById('titleValue');
    splitToParagraphs(titleValue, titleValueElement);
        
    if (contentValue == null) {
        contentValue = "It is a period of civil war.\n" +
        "Rebel spaceships, striking\n" +
        "from a hidden base, have won\n" +
        "their first victory against\n"+
        "the evil Galactic Empire."+
        "\n" + "\n"+
        "During the battle, Rebel\n" +
        "spies managed to steal secret\n" +
        "plans to the Empire's\n" +
        "ultimate weapon, the DEATH\n" +
        "STAR, and space\n" +
        "station with enough power to\n" +
        "destroy an entire planet." +
        "\n\n"+
        "Pursued by the Empire's\n"+
        "sinister agents, Princess\n"+
        "Leia races home aboard her\n"+
        "starship, custodian of the\n"+
        "stolen plans that can save\n"+
        "her people and restore\n"+
        "freedom to the galaxy....";
    }
    var contentValueElement = document.getElementById('contentValue');
    splitToParagraphs(contentValue, contentValueElement);

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
        // get elements
        var introInput = document.getElementById('intro-editor');
        var titleInput = document.getElementById('title-editor');
        var contentInput = document.getElementById('content-editor');
        // get items from local storage and save values in them
        localStorage.setItem('introValue', introInput.value);
        localStorage.setItem('titleValue', titleInput.value);
        localStorage.setItem('contentValue', contentInput.value);
        // alert user of success
        alert('Changed successfully! Please wait for page to refresh.');
        // refresh page
        location.reload();
    });
});