import fetch from "node-fetch";

// setTimeout(() => {
//   console.log("1");
// }, 1000);

// setTimeout(() => {
//   console.log("2");
// }, 1000);

// setTimeout(() => {
//   console.log("3");
// }, 1000);

// const demoCallback = () => {
//   setTimeout(() => {
//     console.log("1");
//     setTimeout(() => {
//       console.log("2");
//       setTimeout(() => {
//         console.log("3");
//         setTimeout(() => {
//           console.log("4");
//           setTimeout(() => {
//             console.log("5");
//             setTimeout(() => {
//               console.log("6");
//               setTimeout(() => {
//                 console.log("7");
//               }, 1000);
//             }, 1000);
//           }, 1000);
//         }, 1000);
//       }, 1000);
//     }, 1000);
//   }, 1000);
// };

// fetch("https://jsonplaceholder.typicode.com/posts")
//   .then((res) => {
//     return res.json();
//   })
//   .then((data) => {
//     // throw new Error("Loi roi");
//     console.log(data);
//     return data;
//   })
//   .then((data1) => {
//     console.log(data1);
//     return data1;
//   })
//   .then((data2) => {
//     console.log(data2);
//   })
//   .catch((err) => {
//     console.log("Day la loi", err);
//   })
//   .finally(() => {
//     console.log("Luc nao cung chay");
//   });

const getPost = async () => {
  try {
    const res = await fetch(
      "https://jsonplaceholder.typicode.com/posts?_limit=1"
    );
    const data = await res.json();
    throw new Error("Loi roi");
    // console.log(data);
    // const data1 = data;
    // console.log(data1);
    // const data2 = data1;
    // console.log(data2);
  } catch (error) {
    console.log("Day la loi", error);
  } finally {
    console.log("Luc nao cung chay");
  }
};

getPost();
