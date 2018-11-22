function insertSort(arr, n=arr.length)
{
  let t, j;
  for(let i = 1; i<n; i++)
  {
    j = i-1;
    t= arr[i];
    while(j>=0 && t<arr[j])
    {
      arr[j+1]=arr[j];
      j--;
    }
    arr[j+1]=t;
  }
}

function binarySearch(arr, left, right, data) 
{ 
  let count = 0;
  if (right >= left)
  {
    let mid = parseInt(left + (right - left)/2); 

    if (arr[mid] == data) {
      console.log(`${++count} times guess: ${arr[mid]}; Answer: Correct`);
      return mid;
    }

    if (arr[mid] > data)  {
      console.log(`${++count} times guess: ${arr[mid]}; Answer: Too high`);
      return binarySearch(arr, left, mid-1, data);
    }

    console.log(`${++count} times guess: ${arr[mid]}; Answer: Too low`);
    return binarySearch(arr, mid+1, right, data); 
  }
  return -1;
}

function linearSearch(arr, data) {

  for (let i = 0; i < arr.length; i++) {
    if (arr[i]==data) {
      console.log(`${i} times guess: ${arr[i]}; Answer: Correct`);
      return arr[i];
    }
    console.log(`${i} times guess: ${arr[i]}; Answer: Wrong`);
  }

}

let nums = [10,21,1,100,83,56,33,65,92,76,44,22,36,46,59,62,73,88,93,9,15,28,34,48,59,61,79,84,95];
const secretNum = nums[Math.floor(Math.random() * 11)];

let startTime = Date.now();
linearSearch(nums, secretNum);
let endTime = Date.now();
console.log(`>>>>>>linearSearch thực hiện trong ${endTime-startTime} ms`);

startTime = Date.now();
insertSort(nums);
binarySearch(nums, 0, nums.length-1, secretNum);
endTime = Date.now();
console.log(`>>>>>>binarySearch thực hiện trong ${endTime-startTime} ms`);
