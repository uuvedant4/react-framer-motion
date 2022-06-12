import React, { useState } from "react";
import { motion } from "framer-motion";

const Animations = () => {
  return (
    <div className="App">
      <motion.div
        animate={{
          rotate: [0, 120, -60, 180, -120, 360],
          x: [0, 400, -200, 100, -300, 150, -400, 200],
          y: [0, 22, 33, -222, 222, 0],
          scale: 2,
        }}
        transition={{ repeat: Infinity, duration: 4 }}
      ></motion.div>
      ;
    </div>
  );
};

export default Animations;

/*
----------------------------------------------FRAMER MOTION: ANIMATIONS----------------------------------------------
1. initial={{ scale: 0 }} 
   animate={{ y: -100, scale: 1 }}

---------------------------------------------------------------------------------------------------------------------
2. const [rotate, setRotate] = useState(false);
   animate={{ rotate: rotate ? 360 : 0 }}
   onClick={() => setRotate(!rotate)}

---------------------------------------------------------------------------------------------------------------------
3. const [move, setMove] = useState(false);
   animate={{ x: move ? 500 : -500 }}
   transition={{ delay: 3 }}
   onClick={() => setMove(!move)}
   
---------------------------------------------------------------------------------------------------------------------
4. const [rotate, setRotate] = useState(false);
   animate={{ rotate: rotate ? 360 : 0 }}
   transition={{ type: "tween", duration: 1 }}
   onClick={() => setRotate(!rotate)}
   
---------------------------------------------------------------------------------------------------------------------
5. const [bounce, setBounce] = useState(false);
   animate={{ y: bounce ? 250 : -250 }}
   transition={{ type: "spring", bounce: 0.5, stiffness: 80 }}
   onClick={() => setBounce(!bounce)}

---------------------------------------------------------------------------------------------------------------------
6. const [bounce, setBounce] = useState(false);
   animate={{ y: bounce ? 289 : -289 }}
   transition={{ type: "inertia", velocity: 60 }}
   onClick={() => setBounce(!bounce)}

---------------------------------------------------------------------------------------------------------------------
7. whileHover={{ scale: 2 }}

---------------------------------------------------------------------------------------------------------------------
8. drag dragConstraints={{ left: 300 }} whileDrag={{ scale: 2 }}

---------------------------------------------------------------------------------------------------------------------
9. animate={{rotate: [0, 120, -60, 180, -120, 360],
  x: [0, 400, -200, 100, -300, 150, -400, 200],
  y: [0, 22, 33, -222, 222, 0], scale: 2}}
  transition={{ repeat: Infinity, duration: 4 }}

---------------------------------------------------------------------------------------------------------------------
  
*/
