import React from "react";
import { useSprings, animated } from "react-spring";

function Photos({ items, src }) {
    const spring = { mass: 2, tension: 1000, friction: 50 };

    const springs = useSprings(
        items.length,
        items.map((item, i) => ({
            config: spring,
            from: {
                opacity: 0,
                transform: `scale(0.9) translate3d(0,1rem,0)`,
            },
            to: {
                opacity: 1,
                transform: `scale(1) translate3d(0,0rem,0)`,
            },
            delay: i * 100,
        }))
    );

    return (
        <div className="grid gap-4 grid-cols-1 md:grid-cols-3 object-cover mt-10 mb-24 cursor-pointer z-0">
            {springs.map((props, i) => {
                const item = items[i];
                return (
                    <animated.img
                        src={item.img_src}
                        key={item.id}
                        className="object-cover object-center h-74 w-full rounded-md col-span-1 bg-gray-200"
                        style={props}
                    />
                );
            })}
        </div>
    );
}

export default Photos;
