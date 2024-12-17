const user = [
  {
    firstName: "John",
    lastName: "Doe",
    customerID: "134",
    note: "",
    profession: "engineer",
  },
  {
    firstName: "Alice",
    lastName: "Smith",
    customerID: "479",
    note: "Hello",
    profession: "student",
  },
  {
    firstName: "John",
    lastName: "",
    customerID: "628",
    note: "World",
    profession: "freelancer",
  },
  {
    firstName: "David",
    lastName: "Lan",
    customerID: "165",
    note: "World",
    profession: "systemAnalytics",
  },
  {
    firstName: "Jackson",
    lastName: "Wang",
    customerID: "781",
    note: "World",
    profession: "productOwner",
  },
];

// 1.

// Q1.
function sortUserName(user) {
  user.sort((a, b) => {
    return `${a.firstName}${a.lastName}${a.customerID}`.localeCompare(
      `${b.firstName}${b.lastName}${b.customerID}`
    );
  });
  console.log(user);
}
sortUserName(user);

// Q2.
function sortByType(user) {
  const professionWeightList = {
    systemAnalytics: 5,
    engineer: 4,
    productOwner: 3,
    freelancer: 2,
    student: 1,
  };
  user.sort((a, b) => {
    if (
      professionWeightList[a.profession] - professionWeightList[b.profession] >
      0
    ) {
      return -1;
    } else if (
      professionWeightList[a.profession] - professionWeightList[b.profession] <
      0
    ) {
      return 1;
    } else {
      return 0;
    }
  });
  console.log(user);
}
sortByType(user);

// 3

let items = [
  1, 1, 1, 5, 2, 3, 4, 3, 3, 3, 3, 3, 3, 7, 8, 5, 4, 9, 0, 1, 3, 2, 6, 7, 5, 4,
  4, 7, 8, 8, 0, 1, 2, 3, 1,
];
// Please write down a function to console log unique value from this array.

function getUniqueNumber(items) {
  let hashMap = new Map();
  let result = [];
  items.forEach((element) => {
    if (hashMap.get(element) !== undefined) {
      hashMap.set(element, hashMap.get(element) + 1);
    } else {
      hashMap.set(element, 1);
    }
  });
  hashMap.forEach((value, key) => {
    if (value === 1) {
      result.push(key);
    }
  });
  console.log(result);
  return result;
}
getUniqueNumber(items);
