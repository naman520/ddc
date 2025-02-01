import React, { useState ,useEffect} from 'react'

export default function Testimonials() {

    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);
    const [count3, setCount3] = useState(0);

    useEffect(() => {
        if (count1 < 5) {
          const interval = setInterval(() => {
            setCount1((prev) => prev + 1);
          }, 80); // Adjust speed by changing this value (50ms)
    
          return () => clearInterval(interval);
        }
      }, [count1]);
    
      useEffect(() => {
        if (count2 < 100) {
          const interval = setInterval(() => {
            setCount2((prev) => prev + 1);
          }, 5); // Adjust speed by changing this value (50ms)
    
          return () => clearInterval(interval);
        }
      }, [count2]);
    
      useEffect(() => {
        if (count3 < 500) {
          const interval = setInterval(() => {
            setCount3((prev) => prev + 1);
          }, 1); // Adjust speed by changing this value (50ms)
    
          return () => clearInterval(interval);
        }
      }, [count3]);


  return (
    <div>
        <div>
        <p className="text-center md:text-5xl max-sm:text-3xl pb-5 pt-5 font-bold">
          Our Milestones
        </p>
        <div className="flex md:text-6xl items-center justify-center  md:gap-48 max-sm:gap-10 md:pt-40 text-4xl pt-10 font-semibold">
          <p>
            {count1}+ <span className="text-sm flex"> Partners </span>
          </p>
          <p>
            {count2}+ <span className="text-sm flex"> Premium Properties </span>
          </p>
          <p>
            {count3}+ <span className="text-sm flex"> Happy Customers </span>
          </p>
        </div>
      </div>
    </div>
  )
}
