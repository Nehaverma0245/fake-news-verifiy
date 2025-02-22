const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(express.static('.'));

app.post('/detect', (req, res) => {
    const newsArticle = req.body.article;

    // Enhanced detection logic with console log for debugging
    console.log("Received article:", newsArticle);
    if (newsArticle.includes("fake") || newsArticle.includes("hoax") || newsArticle.includes("false")) {
        return res.json({ result: "This article is likely fake news." });
    } else if (newsArticle.includes("real") || newsArticle.includes("true")) {
        return res.json({ result: "This article appears to be legitimate." });
    } else {
        return res.json({ result: "The authenticity of this article is unclear." });
    }
});



// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
