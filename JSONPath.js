const JsonPath=require('./JSONPath.json')
var data={
  "friends":[
    {
      "name":"Abu Al Shahriar Rifat",
      "age":25
    },{
      "name":"Kifayet Nawajesh Keya",
      "age":25
    }
  ]
}

console.log(data.friends[0].name);
console.log(data.friends[1].name);
console.log(data.friends[0].age);
console.log(data.friends[1].age);
console.log(JsonPath.friends[0].middle_name);
console.log(JsonPath.friends[0]);
console.log(JsonPath.age);
console.log(JsonPath.friends[0].CGPA);
console.log(JsonPath.friends[0].isRegisted);
console.log(JsonPath.friends[0].Favorite_ProgrammingLanguage[0]);
console.log(JsonPath.friends[0].Favorite_ProgrammingLanguage[1]);
console.log(JsonPath.friends[0].Favrite_freinds);
console.log(JsonPath.friends[0].Favrite_freinds[0].age);

//use loope
for(var x in JsonPath){
    console.log(x);
    console.log(JsonPath[x]);
}
//conversion
//send data clinet to Server
console.log(JSON.stringify(JsonPath));
//server to clent
console.log(JSON.parse(JsonPath));
