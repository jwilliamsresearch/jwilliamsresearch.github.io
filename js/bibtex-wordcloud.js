var words = "";

function getWords() {
    document.querySelectorAll('.output-abstract').forEach(function (abstracts) {
        words += abstracts.innerText;
    });
    document.querySelectorAll('.output-keywords').forEach(function (abstracts) {
        words += abstracts.innerText;
    });
    setUpWordCloud();
}

function setUpWordCloud() {
    words = words.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "");
    var allWords = words.replace(/[.]/g, '').split(/\s/);
    var wordFrequency = {};
    allWords.forEach(function (w) {
        if (!wordFrequency[w.toLowerCase()]) {
            wordFrequency[w.toLowerCase()] = 0;
        }
        wordFrequency[w.toLowerCase()] += 1;
    });
    var finalWords = []
    var notIncluded = ["A", "a", "and", "And", "is", "in", "the", "of", "on", "for", "to", "he", "as", "or", "are", "this", "be", "an", "we", "with", "that", "how", "while", "not", "these"];
    Object.keys(wordFrequency).forEach(function (key) {
        if (!notIncluded.includes(key)) {
            var tempWord = [key, wordFrequency[key]];
            finalWords.push(tempWord);
        }
    });

    var element = document.getElementById('wordcloud-output');
    element.height = 1050;
    element.width = 1400;

    displayWordCloud(finalWords);
}

function displayWordCloud(words) {
    WordCloud(document.getElementById('wordcloud-output'), {
        list: words,
        backgroundColor: 'transparent',
        weightFactor: 10,
        shrinkToFit: true,
        drawOutOfBound: false,
        rotationSteps: 4,
        fontWeight: 100,
        minSize: 0.5,
        color: "hsl(0, 100%, 100%)"
    });
}