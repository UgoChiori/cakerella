// export default function About() {
//     return (
//         <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-[white]">
//         <div className="flex flex-col items-center justify-between">
//                 <div className="flex flex-col items-center justify-between">
//                     <div className="flex flex-col items-center justify-between">
//                         <h1 className="text-4xl font-bold text-center text-gray-800">Cakerella</h1>
//                         <h2 className="text-2xl font-bold text-center text-gray-800">Bake the world a better place</h2>
//                     </div>
//                     <div className="flex flex-col items-center justify-between">
//                         <div className="flex flex-col items-center justify-between">
//                             <h3 className="text-xl font-bold text-center text-gray-800">About</h3>
//                             <p className="text-lg font-medium text-center text-gray-800">Cakerella is a platform for bakers to share their creations with the world, and for you to find a baker near you. We believe that everyone should have the opportunity to share their creations with the world, and we want to make that possible.</p>
//                         </div>
//                         <div className="flex flex-col items-center justify-between">
//                             <h3 className="text-xl font-bold text-center text-gray-800">Contact</h3>
//                             <p className="text-lg font-medium text-center text-gray-800">If you have any questions, comments, or concerns, please email us at <a href="mailto:ugochiori@gmail.com">ugochiori@gmail.com</a>.</p>

//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </main>
//     );
// }


import React from 'react';

const About: React.FC = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-[white]">
      <div className="flex flex-col items-center justify-between">
        <div className="flex flex-col items-center justify-between">
          <div className="flex flex-col items-center justify-between">
            <h1 className="text-4xl font-bold text-center text-gray-800">Cakerella</h1>
            <h2 className="text-2xl font-bold text-center text-gray-800">Bake the world a better place</h2>
          </div>

          {/* About */}
          <div className="flex flex-col items-center justify-between mt-8 md:mt-16">
            <h3 className="text-xl font-bold text-center text-gray-800">About</h3>
            <p className="text-lg font-medium text-center text-gray-800 md:max-w-2xl mt-4">
              Cakerella is a platform for bakers to share their creations with the world, and for you to find a
              baker near you. We believe that everyone should have the opportunity to share their creations with
              the world, and we want to make that possible.
            </p>
          </div>

          {/* Contact */}
          {/* <div className="flex flex-col items-center justify-between mt-8 md:mt-16">
            <h3 className="text-xl font-bold text-center text-gray-800">Contact</h3>
            <p className="text-lg font-medium text-center text-gray-800 md:max-w-2xl mt-4">
              If you have any questions, comments, or concerns, please email us at{' '}
              <a href="mailto:ugochiori@gmail.com">ugochiori@gmail.com</a>.
            </p>
          </div> */}
        </div>
      </div>
    </main>
  );
};

export default About;