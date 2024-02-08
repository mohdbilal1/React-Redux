import { useGetAllPostQuery,useGetSinglePostByIdQuery,useGetLimitedDataQuery } from './services/post';
import './App.css';

//get all data

// function App() {
//   const responseInfo=useGetAllPostQuery();
//   console.log("response information :",responseInfo);
//   console.log(responseInfo.data);
//   // console.log(responseInfo.isSuccess);
//   // console.log(responseInfo.requestId);
//   return (
//     <>
//     <h1>redux toolkit -RTK query (getAllData)</h1>
//     {
//       responseInfo.data && responseInfo.data.map((val,index)=>
//         <div key={index}>
//           <h2>{val.id} {val.title}</h2>
//           <p>{val.body}</p>
//           <hr />
//         </div>
//       )
//     }
//     </>
//   );
// }

//get single data using id

// function App() {
//   const responseInfo=useGetSinglePostByIdQuery(55);
//   // console.log("response information :",responseInfo);
//   console.log(responseInfo.data);
//   // console.log(responseInfo.isSuccess);
//   // console.log(responseInfo.requestId);
//   return (
//     <>
//     <h1>redux toolkit -RTK query (get single Data)</h1>
    
//       <div>
//         <h2>{responseInfo.data && responseInfo.data.id} { responseInfo.data && responseInfo.data.title}</h2>
//         <p>{ responseInfo.data && responseInfo.data.body}</p>
//         <hr />
//       </div>
//     </>
//   );
// }


//get limited data

function App() {
  const responseInfo=useGetLimitedDataQuery(5);
  // console.log("response information :",responseInfo);
  console.log(responseInfo.data);
  // console.log(responseInfo.isSuccess);
  // console.log(responseInfo.requestId);
  return (
    <>
    <h1>redux toolkit -RTK query (get limited Data)</h1>
    {
      responseInfo.data && responseInfo.data.map((val,index)=>
        <div key={index}>
          <h2>{val.id} {val.title}</h2>
          <p>{val.body}</p>
          <hr />
        </div>
      )
    }
    </>
  );
}

export default App;
