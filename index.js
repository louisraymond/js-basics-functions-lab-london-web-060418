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
    DriverResponse='cannot travel that far'   
      break;
    case (distance>2000):
      DriverResponse=25
      break;
    case (distance>400):
      d=distance-400;
      DriverResponse=d*0.02
      break;
    default:
      DriverResponse=0
 }
  
}

 describe('calculatesFarePrice(start, destination)', function() {
    it('gives customers a free sample', function() {
      expect(calculatesFarePrice(43, 44)).to.equal(0);
    });

    it('charges 2 cents per foot when total feet travelled is between 400 and 2000 (remember the first 400 feet are free!)', function() {
      // total feet travelled is 528, minus the first 400 feet, comes to 128 -> 2.56
      expect(calculatesFarePrice(34, 32)).to.equal(2.56);
    });

    it('charges 25 dollars for a distance over 2000 feet', function() {
      expect(calculatesFarePrice(50, 58)).to.equal(25);
    });

    it('does not allow rides over 2500 feet', function() {
      expect(calculatesFarePrice(34, 24)).to.equal('cannot travel that far');
    });

