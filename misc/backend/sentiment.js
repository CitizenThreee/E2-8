var Sentiment = require('sentiment');

function AnalyzeSentence(sentence){
    var sentiment = new Sentiment();

    var result = sentiment.analyze(sentence);
    return result.score;
}

console.log(AnalyzeSentence("This is a bad sentence"));