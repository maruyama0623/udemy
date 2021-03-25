const arry = [1,2,3,4,5];

arry.forEach(function (val){
  console.log(val);
});
//valに配列の一つ一つ値が取得される→取得した値は表示する

for( let i = 0; i < arry.length ; i++){
  const val = arry[i];
  console.log(val);
};

//上記２つは同じ


arry.reduce(function(accu, curr){
  console.log(accu,curr);
  return accu + curr;
})


