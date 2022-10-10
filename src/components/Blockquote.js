// class Blockquote extends React.Component
// {
//   render()
//   {
//     const request = new XMLHttpRequest();
//     request.open("GET",'https://programming-quotes-api.herokuapp.com/quotes/random');
//     request.send();

//     // callback
//     request.addEventListener('load', ()=>{
//         const data = JSON.parse(request.responseText);
//         console.log(data);
//         return <div>
//                 <blockquote className="blockquote text-center">
//                       <p className="mt-1" id="quote">
//                         {data.en}
//                       </p>
//                       <footer className="blockquote-footer mt-2" id="author"><cite title="Source Title"></cite></footer>
//                     </blockquote>
//               </div>
//   });
// }

// }