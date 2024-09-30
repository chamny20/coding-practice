function solution(array, commands) {
    var ans = [];
    
   for (let l=0; l<commands.length; l++) {
       let i = commands[l][0];
       let j = commands[l][1];
       let k = commands[l][2];
       
       let arr = array.slice(i-1, j).sort((a,b) => a-b);
       ans.push(arr[k-1]);
       
   }
    
    return ans;
}