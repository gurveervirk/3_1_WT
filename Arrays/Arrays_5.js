function bubbleSort(arr) {
    if (arr.length <= 1) {
      return arr;
    }
  
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if(arr[i] > arr[j]){
                let t = arr[i];
                arr[i] = arr[j];
                arr[j] = t;
            } 
        }
    }
  
    return arr;
  }
  
  const input = [5, 3, 1, 4, 2];
  const res = bubbleSort(input);
  console.log(res); 
  