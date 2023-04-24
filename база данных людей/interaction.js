let users = ['Vanya', 'Gleb', 'Andrey', 'Kirill', 'Ishtvan', 'Ishtvan',];
let usersTwo = ['Zhenya','Vanya','Gleb', 'Andrey', 'Kirill', 'Ishtvan', 'Ishtvan',];
users.push('Olya');
console.log(users);
users.forEach(function (item, index, array) {
  
  if (item === 'Ishtvan') {
    return users[index] = 'Petya';
  };
});
console.log(users);
function deleteElem(array) {
  let newUsers = array.slice();
  let result = newUsers.splice(0, 1);
  return result;
};

function addNewElems(array, newElem1, newElem2) {
  
  array.splice(0, 0, `${newElem1}`, `${newElem2}`);
  return array;
};
function arrToStr(array) {
  array.join(",  ");
  return array;

};
console.log(deleteElem(usersTwo));
console.log(usersTwo);
console.log(addNewElems(usersTwo, "Egor", "Vlad"));
console.log(arrToStr(usersTwo));
let elemDiv = document.createElement('p');
elemDiv.innerText = arrToStr(addNewElems(usersTwo, "Egor", "Vlad"));
document.body.append(elemDiv);

