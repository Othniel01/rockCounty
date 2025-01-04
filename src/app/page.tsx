// import Blink from "@/components/blinker";
// import CustomCursor from "@/components/custom-cursor";
// import Dash from "@/components/image-dash";
// import Image from "next/image";
// import Marquee from "react-fast-marquee";

// export default function App() {
//   return (
//     <div className="w-full h-fit min-[1005px]:pb-0 pb-40 min-[1005px]:h-[100vh]  relative">
//       <CustomCursor />
//       <Image
//         src={"/img/bg-pic.png"}
//         alt="Cover Image"
//         className="object-cover left-0 top-0 absolute h-full w-full  "
//         width={6740}
//         height={6740}
//         quality={100}
//       />
//       <div
//         className="flex w-full gap-20 h-fit

//       justify-center"
//       >
//         <div
//           className="flex  pt-14 min-[1305px]:pt-0   min-[1305px]:w-full

//         min-[1097px]:w-[1100px]

//         w-full

//         min-[1437px]:pl-0
//         min-[1437px]:pr-0

//         pl-2
//         pr-2

//         justify-start

//         min-[1437px]:w-[1400px] min-[1005px]:justify-between  "
//         >
//           <div className=" w-fit hidden min-[1005px]:flex">
//             <h1 className=" text-[11rem]  min-[1305px]:text-[14rem] scale-y-[1.3]  text-[#F8F8F8] font-bold  tracking-[-23px]">
//               R
//             </h1>
//             <h1 className="text-[11rem]  min-[1305px]:text-[14rem] scale-y-[1.3]  text-[#F8F8F8] font-bold  tracking-[-23px]">
//               O
//             </h1>
//             <h1 className="text-[11rem]  min-[1305px]:text-[14rem] scale-y-[1.3]  text-[#F8F8F8] font-bold  tracking-[-23px]">
//               C
//             </h1>
//             <h1 className="text-[11rem]  min-[1305px]:text-[14rem] scale-y-[1.3]  text-[#F8F8F8] font-bold  tracking-[-23px]">
//               K
//             </h1>
//           </div>

//           <div className="w-fit h-fit pt-[3.6rem] min-[489px]:pt-[4rem]  min-[1005px]:hidden block">
//             <h1
//               className="  text-[5.7rem] min-[489px]:text-[7rem]   h-fit w-fit rotate-[-90deg] scale-y-[1.3]  text-[#F8F8F8] font-bold

//               translate-x-[-40px]

//               min-[489px]:translate-x-[-20px]
//             min-[581px]:translate-x-0  min-[489px]:tracking-[-23px] tracking-[-12px]"
//             >
//               ROCK
//             </h1>
//           </div>
//           <div
//             className="w-fit
//             translate-x-[-80px]
//            min-[489px]:translate-x-[-60px]
//           min-[581px]:translate-x-[-40px]  min-[1005px]:translate-x-0 flex  h-fit"
//           >
//             <h1
//               className=" text-[5rem] min-[489px]:text-[7rem] min-[665px]:text-[8rem] min-[1005px]:text-[11rem]  min-[1305px]:text-[14rem]    min-[1005px]:scale-y-[1.3] scale-y-[1.4]  text-[#F8F8F8] font-bold min-[1005px]:tracking-[-18px]

//               min-[489px]:tracking-[-12px] tracking-[-5px]"
//             >
//               C
//             </h1>
//             <h1
//               className=" text-[5rem] min-[489px]:text-[7rem] min-[665px]:text-[8rem] min-[1005px]:text-[11rem]  min-[1305px]:text-[14rem]   min-[1005px]:scale-y-[1.3] scale-y-[1.4]   text-[#F8F8F8] font-bold min-[1005px]:tracking-[-18px]
//              min-[489px]:tracking-[-12px] tracking-[-5px]"
//             >
//               O
//             </h1>
//             <h1
//               className=" text-[5rem] min-[489px]:text-[7rem] min-[665px]:text-[8rem] min-[1005px]:text-[11rem]  min-[1305px]:text-[14rem]   min-[1005px]:scale-y-[1.3] scale-y-[1.4]   text-[#F8F8F8] font-bold min-[1005px]:tracking-[-18px]
//              min-[489px]:tracking-[-12px] tracking-[-5px]"
//             >
//               U
//             </h1>
//             <h1
//               className=" text-[5rem] min-[489px]:text-[7rem] min-[665px]:text-[8rem] min-[1005px]:text-[11rem]  min-[1305px]:text-[14rem]   min-[1005px]:scale-y-[1.3] scale-y-[1.4]   text-[#F8F8F8] font-bold min-[1005px]:tracking-[-18px]
//              min-[489px]:tracking-[-12px] tracking-[-5px]"
//             >
//               N
//             </h1>
//             <h1
//               className=" text-[5rem] min-[489px]:text-[7rem] min-[665px]:text-[8rem] min-[1005px]:text-[11rem]  min-[1305px]:text-[14rem]   min-[1005px]:scale-y-[1.3] scale-y-[1.4]   text-[#F8F8F8] font-bold min-[1005px]:tracking-[-18px]
//              min-[489px]:tracking-[-12px] tracking-[-5px]"
//             >
//               T
//             </h1>
//             <h1 className=" text-[5rem] min-[489px]:text-[7rem] min-[665px]:text-[8rem] min-[1005px]:text-[11rem]  min-[1305px]:text-[14rem]   min-[1005px]:scale-y-[1.3] scale-y-[1.4]   text-[#F8F8F8] font-bold min-[1005px]:tracking-[-18px]">
//               Y
//             </h1>
//           </div>
//           <div className="absolute block min-[500px]:hidden min-[500px]hidden w-[310px] right-0 top-[12rem] min-[490px]:top-[15rem]">
//             <Marquee
//               pauseOnHover
//               className="w-full h-[60px] overflow-hidden   flex items-center "
//             >
//               <p className="text-white ml-[3rem] text-[4rem]">ROCK COUNTY</p>
//               <Image
//                 src={"/img/logo-one.png"}
//                 alt="Cover Image"
//                 className="object-cover ml-[3rem] pointer-events-none w-[80px] "
//                 width={6740}
//                 height={6740}
//                 quality={100}
//               />
//               <p className="text-white ml-[3rem] text-[4rem]">ROCK COUNTY</p>
//               <Image
//                 src={"/img/logo-one.png"}
//                 alt="Cover Image"
//                 className="object-cover ml-[3rem] pointer-events-none w-[80px] "
//                 width={6740}
//                 height={6740}
//                 quality={100}
//               />
//               <p className="text-white ml-[3rem] text-[4rem]">ROCK COUNTY</p>
//               <Image
//                 src={"/img/logo-one.png"}
//                 alt="Cover Image"
//                 className="object-cover ml-[3rem] pointer-events-none w-[80px] "
//                 width={6740}
//                 height={6740}
//                 quality={100}
//               />
//               {/* <Image
//             src={"/img/logo-four.png"}
//             alt="Cover Image"
//             className="object-cover ml-[3rem] pointer-events-none w-[210px] "
//             width={6740}
//             height={6740}
//             quality={100}
//           /> */}
//               <p className="text-white ml-[3rem] text-[4rem]">ROCK COUNTY</p>
//               <Image
//                 src={"/img/logo-one.png"}
//                 alt="Cover Image"
//                 className="object-cover ml-[3rem] pointer-events-none w-[80px] "
//                 width={6740}
//                 height={6740}
//                 quality={100}
//               />
//               <p className="text-white ml-[3rem] text-[4rem]">ROCK COUNTY</p>
//               <Image
//                 src={"/img/logo-one.png"}
//                 alt="Cover Image"
//                 className="object-cover ml-[3rem] pointer-events-none w-[80px] "
//                 width={6740}
//                 height={6740}
//                 quality={100}
//               />
//               <p className="text-white ml-[3rem] text-[4rem]">ROCK COUNTY</p>
//               <Image
//                 src={"/img/logo-one.png"}
//                 alt="Cover Image"
//                 className="object-cover ml-[3rem] pointer-events-none w-[80px] "
//                 width={6740}
//                 height={6740}
//                 quality={100}
//               />
//               <p className="text-white ml-[3rem] text-[4rem]">ROCK COUNTY</p>
//             </Marquee>
//           </div>
//         </div>
//       </div>

//       <div className="w-full  flex flex-row min-[1005px]:translate-y-[-10px] translate-y-[40px] justify-start pl-4 min-[489px]:pl-[2rem] min-[665px]:pl-[4rem] min-[1005px]:pl-0   min-[1005px]:justify-center ">
//         <div className="flex  min-[1005px]:w-auto flex-col min-[1005px]:flex-row">
//           <div className="flex flex-row  min-[1005px]:justify-between">
//             <div
//               className="ring-[1px] min-[1005px]:h-[420px]

//               min-[489px]:h-[380px]

//               h-[320px]

//               w-[240px]

//                min-[489px]:w-[300px]

// min-[657px]:w-[390px]
//               min-[1097px]:w-[420px]

//             min-[1305px]:w-[570px]
//               min-[1437px]:w-[670px] ring-white"
//             >
//               <Dash />
//             </div>
//             <div
//               className="ring-[1px] ml-[1rem]  min-[1005px]:h-[420px] min-[489px]:h-[380px]

//               h-[320px] w-[120px]  min-[1097px]:w-[170px]  min-[1305px]:w-[232px]   ring-white"
//             >
//               <Image
//                 src={"/img/image-two.png"}
//                 alt="Cover Image"
//                 className="object-cover pointer-events-none  min-[489px]:h-[380px]

//               h-[320px]  min-[1005px]:h-[420px] w-full "
//                 width={6740}
//                 height={6740}
//                 quality={100}
//               />
//             </div>
//           </div>

//           <div className="min-[1005px]:flex-col relative mt-4  min-[1005px]:mt-0 flex flex-row">
//             <div className="flex flex-col   min-[1005px]:flex-row">
//               <div
//                 className="ring-[1px]  ml-0 min-[1005px]:ml-[1rem] relative min-[657px]:h-[120px]

//                 h-[80px]

// w-[157px]

//               min-[657px]:w-[220px]  min-[1005px]:p-0 min-[1005px]:h-[420px] min-[1005px]:w-[140px]   ring-white"
//               >
//                 <h1 className="text-[#F8F8F8] scale-y-[1.3] top-[7.4rem] left-[-6.7rem] min-[1005px]:absolute w-fit h-fit rotate-0 min-[1005px]:rotate-[-90deg] font-bold tracking-[-9px] text-[60px] min-[657px]:text-[80px]  min-[1005px]:text-[130px]">
//                   AGCTP
//                 </h1>
//               </div>
//               <div className="w-[320px] pl-0  min-[1005px]:mt-0 mt-4  min-[1005px]:pl-4">
//                 <h1
//                   className="min-[1005px]:text-2xl
//                 text-lg
//                 min-[657px]:text-xl font-semibold text-[#F8F8F8]"
//                 >
//                   BROOKS GARDEN
//                 </h1>
//                 <h1
//                   className="min-[1005px]:text-2xl
//                 text-lg
//                 min-[657px]:text-xl font-semibold text-[#F8F8F8]"
//                 >
//                   NOVEMBER 29TH 2024
//                 </h1>
//                 <div className="flex items-center gap-4">
//                   <Blink />
//                   <h1
//                     className="min-[1005px]:text-2xl
//                   text-lg
//                   min-[657px]:text-xl  text-[#F8F8F8]"
//                   >
//                     2PM TO 12AM
//                   </h1>
//                 </div>
//                 <div className="w-full mt-2 flex pr-10 min-[1005px]:justify-end">
//                   <Image
//                     src={"/img/image-three.png"}
//                     alt="Cover Image"
//                     className="object-cover pointer-events-none w-[120px]"
//                     width={6740}
//                     height={6740}
//                     quality={100}
//                   />
//                 </div>
//                 <div className="ring-[1px] mt-4  h-[176px] w-[132px]  min-[1005px]:block hidden   ring-white">
//                   <Image
//                     src={"/img/logo-two.png"}
//                     alt="Cover Image"
//                     className="object-cover pointer-events-none h-[176px] w-full "
//                     width={6740}
//                     height={6740}
//                     quality={100}
//                   />
//                 </div>
//                 <div className="w-full flex-col flex ">
//                   <Image
//                     src={"/img/logo-one.png"}
//                     alt="Cover Image"
//                     className="object-cover pointer-events-none w-[160px] mt-4 "
//                     width={6740}
//                     height={6740}
//                     quality={100}
//                   />
//                 </div>
//               </div>
//             </div>

//             <div
//               className="ring-[1px]
//             translate-x-[-110px]
//             min-[657px]:translate-x-[-80px]
//             min-[579px]:static

//             block

//             min-[1005px]:hidden

// h-[320px]

// right-[-110px]
//             absolute

//             w-[160px]
//             min-[489px]:w-[230px]
//                  min-[657px]:w-[290px]  ring-white"
//             >
//               <Image
//                 src={"/img/image-four.webp"}
//                 alt="Cover Image"
//                 className="object-cover h-full w-full  "
//                 width={6740}
//                 height={6740}
//                 quality={100}
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="w-full h-[60px]  absolute bottom-0 ">
//         <Marquee
//           pauseOnHover
//           className="w-full h-[60px] overflow-hidden   flex items-center "
//         >
//           <p className="text-white ml-[3rem] text-[4rem]">ROCK COUNTY</p>
//           <Image
//             src={"/img/logo-one.png"}
//             alt="Cover Image"
//             className="object-cover ml-[3rem] pointer-events-none w-[80px] "
//             width={6740}
//             height={6740}
//             quality={100}
//           />
//           <p className="text-white ml-[3rem] text-[4rem]">ROCK COUNTY</p>
//           <Image
//             src={"/img/logo-one.png"}
//             alt="Cover Image"
//             className="object-cover ml-[3rem] pointer-events-none w-[80px] "
//             width={6740}
//             height={6740}
//             quality={100}
//           />
//           <p className="text-white ml-[3rem] text-[4rem]">ROCK COUNTY</p>
//           <Image
//             src={"/img/logo-one.png"}
//             alt="Cover Image"
//             className="object-cover ml-[3rem] pointer-events-none w-[80px] "
//             width={6740}
//             height={6740}
//             quality={100}
//           />
//           {/* <Image
//             src={"/img/logo-four.png"}
//             alt="Cover Image"
//             className="object-cover ml-[3rem] pointer-events-none w-[210px] "
//             width={6740}
//             height={6740}
//             quality={100}
//           /> */}
//           <p className="text-white ml-[3rem] text-[4rem]">ROCK COUNTY</p>
//           <Image
//             src={"/img/logo-one.png"}
//             alt="Cover Image"
//             className="object-cover ml-[3rem] pointer-events-none w-[80px] "
//             width={6740}
//             height={6740}
//             quality={100}
//           />
//           <p className="text-white ml-[3rem] text-[4rem]">ROCK COUNTY</p>
//           <Image
//             src={"/img/logo-one.png"}
//             alt="Cover Image"
//             className="object-cover ml-[3rem] pointer-events-none w-[80px] "
//             width={6740}
//             height={6740}
//             quality={100}
//           />
//           <p className="text-white ml-[3rem] text-[4rem]">ROCK COUNTY</p>
//           <Image
//             src={"/img/logo-one.png"}
//             alt="Cover Image"
//             className="object-cover ml-[3rem] pointer-events-none w-[80px] "
//             width={6740}
//             height={6740}
//             quality={100}
//           />
//           <p className="text-white ml-[3rem] text-[4rem]">ROCK COUNTY</p>
//         </Marquee>
//       </div>
//     </div>
//   );
// }

// // <div className="flex gap-10 items-center">
// //             <Image
// //               src={"/img/logo-one.png"}
// //               alt="Cover Image"
// //               className="object-cover  w-[300px]"
// //               width={6740}
// //               height={6740}
// //               quality={100}
// //             />

// //             <object
// //               className="w-full h-[100px]
// //              "
// //               type="image/svg+xml"
// //               data={"/svg/rectangle.svg"}
// //             ></object>
// //           </div>

// app/birthday-card/page.tsx

import React from "react";

const BirthdayCard: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-pink-400 via-red-400 to-yellow-400">
      <div className="max-w-md p-8 bg-white rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold text-center text-pink-600 mb-4">
          Happy Birthday! 🎉🎂
        </h1>
        <p className="text-lg text-gray-700 mb-4">
          <strong>Dear Frances,</strong>
        </p>
        <p className="text-gray-700 mb-4">
          Today is <span className="font-semibold">your day</span>, and it’s all
          about celebrating the amazing, beautiful, and one-of-a-kind person you
          are. 💖✨ I want you to know just how much you are loved—not just by
          me but by everyone lucky enough to know you.
        </p>
        <p className="text-gray-700 mb-4">
          From the bottom of my heart, thank you for being{" "}
          <span className="font-semibold">you</span>. Thank you for being my
          rock, my safe space, and the person I can always count on. I’m forever
          grateful for your friendship—it’s the kind of bond people pray for but
          rarely find.
        </p>
        <p className="text-gray-700 mb-4">
          You’re such an incredible soul—graceful, intelligent, funny, and
          endlessly kind. 🌟 I love how you always understand me without me
          needing to explain, how you make me laugh until my stomach hurts, and
          how you stay consistent no matter what.
        </p>
        <p className="text-gray-700 mb-4">
          I hope today brings you as much joy as you bring to everyone around
          you. Celebrate yourself because you{" "}
          <span className="font-semibold">deserve</span> all the love, laughter,
          and happiness in the world. Cheers to more laughs, more adventures,
          and more birthdays spent together. 🥂
        </p>
        <p className="text-gray-700 mb-6">
          <strong>Forever and always,</strong>
          <br />
          Your biggest fan & partner-in-crime ❤️♾️✨
        </p>
        <div className="text-center">
          <button className="px-6 py-2 text-white bg-pink-600 rounded-full shadow-md hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-opacity-50">
            Send Birthday Wishes 🎁
          </button>
        </div>
      </div>
    </div>
  );
};

export default BirthdayCard;
