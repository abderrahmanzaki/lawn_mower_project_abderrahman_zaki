var url = require('fs');
var lawnMowerReposirtory = require('./Repository/LawnMowerRepository.js');
var lawnMower = require('./Control/MowerControl.js');
var store = require('path');
var filename = "../base/inputs.xml";
var response = url.readFileSync(store.resolve(__dirname, filename), 'utf8').split("\n");
var newTxt = "";
var x;
for(x = 0; x < response.length; x++){

  response[x] = response[x].replace("\r", '');
}
response.splice (0, 1);
response.splice (0, 1);
response.splice (1, 1);
response.splice (1, 1);
response.splice (2,1);
response.splice (2,1);
response.splice (3,2);
response.splice (4,2);
response.splice (5, 5);

var lawn = response[0].split(' ').map(c => parseInt(c))

for (counter = 1; counter < response.length;counter += 2) {

  var extention = response[counter].split(' ')
  var initPosition = [parseInt(extention[0]), parseInt(extention[1])];
  var direction = extention[2];
  var mower = new lawnMower(initPosition, direction, lawn);
  var handler = new lawnMowerReposirtory(mower);
  var values = response[counter + 1].split('');
  handler.sequence(values);
  console.log(mower.extention);

}