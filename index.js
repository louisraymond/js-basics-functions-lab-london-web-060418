// Code your solution in this file!


function distanceFromHqInBlocks(block){
  output=0
  if (block<42) {
    output=42-block
  }
  else {
    output=block-42
  }
  return output
}

function distanceFromHqInFeet(block){
return distanceFromHqInBlocks(block)*264
}
  
function distanceTravelledInFeet(start,end){
  let blocks=0
  let distance=0
  
  if (start>end){
    blocks=start-end}
  else{
    blocks=end-start}
    
    distance=blocks*264
    return distance
}

function calculatesFarePrice(start, destination){
 DriverResponse=0
 distance=distanceTravelledInFeet(start,destination)
 
 switch (DriverResponse){
   case (distance>2500):
     
    case (distance)
 }
  
}

