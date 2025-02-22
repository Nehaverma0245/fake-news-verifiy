document.getElementById('submitBtn').addEventListener('click', function() {
    const newsArticle = document.getElementById('newsInput').value;
    console.log("Sending article:", newsArticle); // Debugging log

    // Send the article to the backend for detection
    fetch('http://localhost:3000/detect', {


        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ article: newsArticle })
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('resultOutput').innerText = data.result;
    })
    .catch(error => {
        console.error('Error:', error);
        document.getElementById('resultOutput').innerText = "An error occurred while processing the article.";
    });
});
