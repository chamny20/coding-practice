function solution(video_len, pos, op_start, op_end, commands) {
    var answer = '';
    
    function toMinutes(time) {
        const [h, m] = time.split(":");
        return Number(h) * 60 + Number(m);
    }   
    
    let mPos = toMinutes(pos);
    const mOpStart = toMinutes(op_start);
    const mOpEnd = toMinutes(op_end);
    const mVideo = toMinutes(video_len);
    
    if (mPos >= mOpStart && mPos <= mOpEnd) mPos = mOpEnd;
    
    commands.forEach((command) => {
        mPos += command === 'next' ? 10 : -10;
        
        if (mPos < 0)
            mPos = 0;
        if (mPos > mVideo)
            mPos = mVideo;
        
        if (mPos >= mOpStart && mPos <= mOpEnd) mPos = mOpEnd;
        
        console.log(mPos);
    });
    
    const min = Math.floor(mPos / 60).toString();
    const sec = Math.floor(mPos % 60).toString();
    answer = `${min.padStart(2, '0')}:${sec.padStart(2, '0')}`;
    
    return answer;
}