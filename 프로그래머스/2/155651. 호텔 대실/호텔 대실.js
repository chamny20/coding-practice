function solution(book_time) {
    const room = [];
    
    const convertToMin = (str) => {
        const [h, m] = str.split(':').map(Number);
        return h * 60 + m;
    } 
    
    book_time.sort().forEach(([start, end], _) => {
        let startMin = convertToMin(start); 
        let endMin = convertToMin(end); 
        
        let idx = room.findIndex(v => v <= startMin);
        
        if (idx === -1)
            room.push(endMin + 10);
        else
            room[idx] = endMin + 10;
        
    });
    
    return room.length;
}