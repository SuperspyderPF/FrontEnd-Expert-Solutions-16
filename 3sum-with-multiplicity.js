function nCr(n, r,dp) { //o(1)
    return Number(dp[n] / (dp[r] * dp[n - r]));
  }
  function CreateSegregatedArray(arr){ //o(n)
      let map={}
      for (let j=0;j<arr.length;j++){
          if (map[arr[j]]){
              map[arr[j]].push(arr[j])
          }
          else map[arr[j]]=[arr[j]]
      }
      return map
  }
  function CreateFactorialDp(n){ //o(n)
    let dp = [];
    dp[0] = 1n;
    dp[1] = 1n;
    for (let i = 2; i <= n; i++) {
      dp[i] = BigInt(i) * dp[i - 1];
    }
    return dp
  }
  var threeSumMulti = function(arr, target) {
      let dp=CreateFactorialDp(arr.length)//o(n)
      let map=CreateSegregatedArray(arr) //o(n)
      let sorted=Object.values(map)
      sorted.sort((a,b)=>a[0]-b[0]) //sorting only unique elements
      let prod=0
      //two loops for ensuring o(uniqueelem^2)
      //a+b+c=target!!!
      for (let i=0;i<sorted.length;i++){
          let a=sorted[i]
          let tempProd=1
          for (let j=i;j<sorted.length;j++){
              let b=sorted[j]
              let c=target-a[0]-b[0]
              //inavlid cases
              if (map[c]==undefined || (a[0]+b[0]+c)!==target || c<a[0] ||c<b[0]) continue
              
              //valid possibilty-1
              if (a[0]==b[0] && b[0]==c){
                  if (a.length<3) continue
                  tempProd=nCr(a.length,3,dp) //o(1)
                  prod+=tempProd
              }
              //valid possibilty-2
              else if (a[0]==b[0] || b[0]==c){
                  if (a[0]==b[0]){
                      if (b.length<2) continue //that means a and b cant have same value
                      tempProd=nCr(a.length,2,dp)*map[c].length
                  }
                  else{
                      if (b.length<2) continue
                      tempProd=nCr(b.length,2,dp)*a.length
                  }
                  prod+=tempProd
              }
              //valid possibilty 3
              else{
                  tempProd=a.length*map[c].length*b.length
                  prod+=tempProd
              }
          }
      }
      return prod%(1e9+7)
  }