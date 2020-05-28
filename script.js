// alert("hello")



//Variables
var submitButton = document.getElementById('submit-button');
var firstInput = document.querySelector('.firstInput');
var secondInput = document.querySelector('.secondInput');
var firstAnswer = document.getElementById('answer-0');
var secondAnswer = document.getElementById('answer-1');
var thirdAnswer = document.getElementById('answer-2');
var answerContainer = document.getElementById('answer-container');
answerContainer.classList.add('opacity');



function findChange(num, spend){
  

    var change = num - spend;
    

    //Simple Checks so the user doesn't bug the algo
      if (num == "" || spend == ""){
        alert('nothing in fields')
      }
     else if (change <= 0){
      alert("Check your Inputs well");
      if (change === 0){
        alert('There is no change left');
      }
    }   else if (change < 500) {
      alert('This program is adjusted for values higher than 500');
    }
    else {

    //Array of all possible denominations.
    let numArray = [1000,500,200,100,50,20,10];
    
    
    
    //change to receive
          var change = num - spend;
     
          firstAnswer.innerText = change;


          //removes class that hides the text.
          answerContainer.classList.remove('opacity');
      // alert(change);
  
    
    // Next, we filter the denom's equal to or lower than the change, so it can be used to add up to the change in a different way.
    var specNum = numArray.filter(x => x < change);
  //   console.log(specNum);
    
    //new array to store the first stage of the breakdown of the change
    let newArr = [];
   
  //   const reducer = (a, b) => a + b;
    
    
    //to break the change down to 2 values so we can work with it.
    var value = change - specNum[0];
     
    //push the broken down values into newArr
    
   
      newArr.push(specNum[0]);
      newArr.push(value);
    
    
    // sort them in ascending order
    var twoVals = newArr.sort((a,b)=> b - a);
    console.log(twoVals);
    
   
    
    //new array to store the further broken values
    var secondStep = [];
    
    //first value of the originally splitted number
  //   var firstIndex = twoVals[0];
    function pushValues(numToPush, amount, arr, rem){
      for (var i = 0; i < amount; i++){
      arr.push(numToPush);
      
    }
      if (rem !== 0){
        arr.push(rem);
      }
      
      console.log(arr);
    }
    
    function breakDown(arr,valToTest){
      while (arr.indexOf(valToTest[0]) == -1){
   var newVal = twoVals[0] - arr[0];
  //     console.log(newVal);
      
      var newOrder = twoVals;
      newOrder.shift();
      newOrder.unshift(arr[0]);
      newOrder.unshift(newVal);
      newOrder.sort((a,b)=> b - a);
    }
      console.log("This one below is 1000");
    console.log(newOrder);
      
    
    function countInArray(array, what) {
      return array.filter(item => item == what).length;
  }
      var testedArr = newOrder;
      var fresherArr = [];
      for (var i = 0; i < testedArr.length; i++){
       
        if (fresherArr.indexOf(testedArr[i]) == -1){
          fresherArr.push(testedArr[i]);
        }
      }
      
      console.log('compare one')
      console.log(fresherArr);
      
      var noOfTimes = []
      console.log('no of times it appears');
      for (var i = 0; i < fresherArr.length; i++){
        noOfTimes.push(countInArray(newOrder, fresherArr[i]));
      }
      console.log(noOfTimes);

      var finalText2 = 'The following: ';
      for(var i = 0; i < fresherArr.length; i++){
        if (i == 0){
            finalText2 = finalText2 + noOfTimes[i] + ' N' + fresherArr[i] + " note(s)";
        }
        
//      finalText2 = finalText2 + ", " + noOfTimes[i] + ' N' + fresherArr[i] + " note(s)";
        
        if (i == noOfTimes.length - 1){
             finalText2 = finalText2 + " and " + noOfTimes[i] + ' N' + fresherArr[i];
        }
    }

    //here
    // alert(finalText2);
    secondAnswer.innerText = finalText2;
     
      
    
      for (var i = 0; i < newOrder.length; i++){
         if (newOrder[i] === 1000){
           
        newOrder[i] = "500,500";
      var changedNum = newOrder[i].split(',').map(x => parseInt(x));
      
         newOrder[i] = changedNum;
      
      }
        
            if (newOrder[i] === 500){
           newOrder[i] = "200,200,100";
      var changedNum = newOrder[i].split(',').map(x => parseInt(x));
      
      newOrder[i] = changedNum;
    
      }
      }
      
          var orderFiveH = [];
      
      orderFiveH.push(newOrder);
     
     var lastSideCheck = orderFiveH[0][orderFiveH[0].length - 1];
      
      var lastSort = numArray.filter(x => x < lastSideCheck);
     
      
      
     console.log(newOrder);
      
      
  //      console.log(lastSort);
     var count = lastSideCheck;
      var newStups = [];
    
      for (var i = 0; i < lastSort.length; i++){
         while (count > lastSort[i]){
        if (count > lastSort[i]){
           count = count - lastSort[i];
  //       console.log(count);
          newStups.push(lastSort[i]);
         
         
  //         console.log(newStups);
        }
  //         
       
  //       else (count < lastSort[]){
          
  //       }
      }
      
      }
  //       console.log(count)
      newStups.push(count)
      console.log("final breakdown");
      console.log(newStups);
      newOrder.pop();
      newOrder.push(newStups);
      console.log(newOrder);
     
      
      
      
      
      
    
     var tested2Arr = newOrder;
    
     var finalFinal = [];
       var fresher2Arr = []
       
      for (var i = 0; i < tested2Arr.length; i++){
        var goodIdea = tested2Arr[i];
        if (Array.isArray(goodIdea)){
          goodIdea.forEach(x => finalFinal.push(x))
        }
        else {
          finalFinal.push(goodIdea);
        }
      }
       
       console.log('final final');
       console.log(finalFinal);
       
    for (var i = 0; i < finalFinal.length; i++){
      if (fresher2Arr.indexOf(finalFinal[i]) == -1){
        fresher2Arr.push(finalFinal[i])
      }
    }
       console.log(fresher2Arr);
       
       var noOfTimes2 = [];
       console.log("these are no of times it appears")
       for (var i = 0; i < fresher2Arr.length; i++){
         noOfTimes2.push(countInArray(finalFinal, fresher2Arr[i]));

       }

       var finalText = 'The denominations are: ';
       for(var i = 0; i < noOfTimes2.length; i++){
         if (i == 0){
             finalText = finalText + noOfTimes2[i] + ' N' + fresher2Arr[i] + " note(s)";
         }
         else if (i == noOfTimes2.length - 1){
          finalText = finalText + " and" +  ", " + noOfTimes2[i] + ' N' + fresher2Arr[i] + " note(s)";
         }
         else {
              finalText = finalText + ", " + noOfTimes2[i] + ' N' + fresher2Arr[i] + " note(s)";
         }
   
         
        //  if (i == noOfTimes.length){
        //       finalText = finalText + "and " + noOfTimes2[i] + ' N' + fresher2Arr[i] + " note(s) ";
        //  }
        console.log(i);
        console.log(noOfTimes2.length);
     }

    //  alert(finalText);

     thirdAnswer.innerText = finalText;
     


     
      
     
      
      
      
    }
  //C:\Program Files\MongoDB\Server\4.2\data\
  //   for (var i = 0; i < twoVals.length; i++){
      var newWorld =  specNum.filter(x => x < twoVals[0]);
      var goodIdea = twoVals[0];
  //     console.log(newWorld);
    
   breakDown(newWorld, twoVals);
      
  
  
    }

 
  }
  // findChange(8000, 750); 
  

  submitButton.addEventListener('click', ()=>{
    var costPrice = firstInput.value;
    var amountReceived = secondInput.value;

    findChange(costPrice, amountReceived);
  })
