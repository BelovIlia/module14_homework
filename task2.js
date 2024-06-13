const xmlString = `<list><student><name lang="en"><first>Ivan</first><second>Ivanov</second></name><age>35</age><prof>teacher</prof></student><student><name lang="ru"><first>Петр</first><second>Петров</second></name><age>58</age><prof>driver</prof></student></list>`;

function xmlToObject(xmlString) {
  const parser = new DOMParser();
  const xmlDoc = parser.parseFromString(xmlString, "text/xml");

  return {
    list: Array.from(xmlDoc.querySelectorAll('student')).map(student => ({
      name: `${student.querySelector('name > first').textContent} ${student.querySelector('name > second').textContent}`,
      age: parseInt(student.querySelector('age').textContent),
      prof: student.querySelector('prof').textContent,
      lang: student.querySelector('name').getAttribute('lang')
    }))
  };
}

console.log(xmlToObject(xmlString));


const JSONString =`{
    "list": [
     {
      "name": "Petr",
      "age": "20",
      "prof": "mechanic"
     },
     {
      "name": "Vova",
      "age": "60",
      "prof": "pilot"
     }
    ]
   }`

   const jsonString = `{
    "list": [
     {
      "name": "Petr",
      "age": "20",
      "prof": "mechanic"
     },
     {
      "name": "Vova",
      "age": "60",
      "prof": "pilot"
     }
    ]
   }`;
   
   function jsonToObject(jsonString) {
     const jsonObject = JSON.parse(jsonString);
     const { list } = jsonObject;
     const jsObject = {
       list: list.map(item => ({
         name: item.name,
         age: parseInt(item.age),
         prof: item.prof
       }))
     };
     return jsObject;
   }
   
   const jsObject = jsonToObject(jsonString);
   console.log(jsObject);
   