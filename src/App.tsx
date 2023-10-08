// import "./style1.css";
import { useContext } from 'react';
import {AuthContext} from './contexts/AuthContext';
// import LoginModalPage from './components/LoginModelPage';
import { Home } from './components/Home';
import { Feed } from './components/Feed';

function App() {
    const { profile } = useContext(AuthContext);

    if (profile) {
      return (
        <Feed />
      )
    } else {
      return (
        <Home />
  );
};


// import React from "react";
// import "./style.css";

// export const Index = () => {
//   return (
//     <div className="index">
//       <div className="overlap-wrapper">
//         <div className="overlap">
//           <div className="rectangle" />
//           <div className="group">
//             <div className="div">
//               <div className="text-wrapper">CoopenSource</div>
//               <p className="p">
//                 Texto que ainda nao sei oq colocar entao é isso Texto que ainda nao sei oq colocar entao é issoTexto que
//                 ainda nao sei oq colocar entao é issoTexto que ainda nao sei oq colocar entao é issoTexto que ainda nao
//                 sei oq colocar entao é issoTexto que ainda nao sei oq colocar entao é isso.
//               </p>
//             </div>
//           </div>
//           <div className="overlap-group-wrapper">
//             <div className="overlap-group">
//               <div className="text-wrapper-2">Login</div>
//               <div className="text-wrapper-3">Cadastro</div>
//             </div>
//           </div>
//           <div className="text-wrapper-4">Projetos</div>
//           <div className="group-2">
//             <img
//               className="img"
//               alt="Rectangle"
//               src="https://cdn.animaapp.com/projects/65220af01a7275d4cbcecf74/releases/65220dff3419821dd604bacd/img/rectangle-20.svg"
//             />
//             <img
//               className="rectangle-2"
//               alt="Rectangle"
//               src="https://cdn.animaapp.com/projects/65220af01a7275d4cbcecf74/releases/65220dff3419821dd604bacd/img/rectangle-21.svg"
//             />
//             <img
//               className="rectangle-3"
//               alt="Rectangle"
//               src="https://cdn.animaapp.com/projects/65220af01a7275d4cbcecf74/releases/65220dff3419821dd604bacd/img/rectangle-22.svg"
//             />
//           </div>
//           <img
//             className="element"
//             alt="Element"
//             src="https://cdn.animaapp.com/projects/65220af01a7275d4cbcecf74/releases/65220dff3419821dd604bacd/img/3636b54c-a2c9-4e4a-b4fd-74e03ec08da7-removebg-preview-1@2x.png"
//           />
//           <img
//             className="unsplash"
//             alt="Unsplash"
//             src="https://cdn.animaapp.com/projects/65220af01a7275d4cbcecf74/releases/65220dff3419821dd604bacd/img/unsplash-ogvqxgl7xo4.png"
//           />
//           <img
//             className="rectangle-4"
//             alt="Rectangle"
//             src="https://cdn.animaapp.com/projects/65220af01a7275d4cbcecf74/releases/65220dff3419821dd604bacd/img/rectangle-17.svg"
//           />
//           <div className="div-wrapper">
//             <div className="overlap-2">
//               <div className="rectangle-5" />
//               <div className="rectangle-6" />
//               <div className="text-wrapper-5">Login</div>
//               <div className="text-wrapper-6">User/Email</div>
//               <div className="text-wrapper-7">Senha</div>
//               <div className="frame">
//                 <div className="flat-color-icons">
//                   <div className="overlap-group-2">
//                     <img
//                       className="vector"
//                       alt="Vector"
//                       src="https://cdn.animaapp.com/projects/65220af01a7275d4cbcecf74/releases/65220dff3419821dd604bacd/img/vector-1.svg"
//                     />
//                     <div className="overlap-3">
//                       <img
//                         className="vector-2"
//                         alt="Vector"
//                         src="https://cdn.animaapp.com/projects/65220af01a7275d4cbcecf74/releases/65220dff3419821dd604bacd/img/vector-2.svg"
//                       />
//                       <img
//                         className="vector-3"
//                         alt="Vector"
//                         src="https://cdn.animaapp.com/projects/65220af01a7275d4cbcecf74/releases/65220dff3419821dd604bacd/img/vector-3.svg"
//                       />
//                     </div>
//                   </div>
//                 </div>
//                 <div className="text-wrapper-8">Entrar com o Google</div>
//               </div>
//               <div className="frame-2">
//                 <div className="text-wrapper-9">Entrar</div>
//               </div>
//               <div className="rectangle-7" />
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

    //   )
    // }


    // return (
    //     <div>
    //         <h2>React Google Login</h2>
    //         <br />
    //         <br />
    //         {profile ? (
    //             <div>
    //                 <img className='w-96' src={profile.picture} alt="user image" />
    //                 <h3>User Logged in</h3>
    //                 <p>Name: {profile?.name}</p>
    //                 <p>Email Address: {profile.email}</p>
    //                 <br />
    //                 <br />
    //                 <button onClick={logOut}>Log out</button>
    //             </div>
    //         ) : (
    //             <button onClick={() => login()}>Sign in with Google 🚀 </button>
    //         )}
    //     </div>
    // );
}
export default App;