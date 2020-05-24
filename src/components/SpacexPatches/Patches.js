import React from "react";
import Card from "../base/Card";
import spacex from "../../images/spacex.png";
import { animated, useSprings } from "react-spring";

function Patches({ items }) {
    const spring = { mass: 3, tension: 700, friction: 70 };

    const springs = useSprings(
        items.length,
        items.map((item, i) => ({
            config: spring,
            from: { opacity: 0, y: 100 },
            to: { opacity: 1, y: 0 },
            delay: i * 50,
        }))
    );

    return (
        <ul className="mx-auto grid gap-6 md:grid-cols-2 md:grid-cols-4 md:mb-32 cursor-pointer">
            {springs.map(({ y, opacity }, i) => {
                const item = items[i];

                return (
                    <animated.li
                        key={item.mission_name}
                        style={{
                            opacity: opacity.interpolate(
                                (opacity) => `${opacity}`
                            ),
                            transform: y.interpolate(
                                (y) => `translate3d(0,${y}px,0)`
                            ),
                        }}
                    >
                        <Card
                            link={`/app/launch/${item.mission_name}`}
                            image={
                                item.links.mission_patch
                                    ? item.links.mission_patch
                                    : spacex
                            }
                            title={item.mission_name}
                            tag1={item.flight_number}
                            tag2={item.rocket.rocket_id}
                            tag3={item.launch_year}
                        />
                    </animated.li>
                );
            })}
        </ul>
    );
}

export default Patches;
