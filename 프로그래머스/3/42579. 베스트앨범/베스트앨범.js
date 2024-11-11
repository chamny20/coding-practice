function solution(genres, plays) {
    let answer = [];
    let data = [{}];
    let songsByGenre = {}; 
    let sumGenre = {};
    
    for (let i=0; i<genres.length; i++) {
        const genre = genres[i];
        const play = plays[i];
        if (!sumGenre[genre]) sumGenre[genre] = 0;
        sumGenre[genre] += play;
        
        if (!songsByGenre[genre]) songsByGenre[genre] = [];
        songsByGenre[genre].push({ index: i, play });
    }
    // console.log(songsByGenre);
    const sortedGenres = Object.keys(sumGenre).sort(
        (a, b) => sumGenre[b] - sumGenre[a]
    );
    
    for (let genre of sortedGenres) {
        let song = songsByGenre[genre];
        song.sort((a,b) => b.play-a.play | a.index-b.index);
        // console.log(song);
        answer.push(song[0].index);
        if (song.length>1)
            answer.push(song[1].index);
    }
    
    
    return answer;
}

