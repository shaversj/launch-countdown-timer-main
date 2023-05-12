import React from 'react';

function CountdownCard({number, position}) {
    return (
        <div>
            <div className={"sm:min-w-[74px] sm:max-w-[74px] sm:min-h-[63px] lg:min-w-[148px] lg:min-h-[140px] bg-dark-desaturated-blue grid place-items-center  rounded-xl"}>
                <div>
                    <span className={"text-soft-red font-redHatText font-bold sm:text-4xl lg:text-7xl"}>{number}</span>
                </div>
            </div>
            <div className={"pt-3 lg:pt-4 flex items-center justify-center"}>
                <span className={"text-grayish-blue sm:text-[7px] lg:text-sm font-bold tracking-[0.15rem] lg:tracking-[0.3rem] "}>{position}</span>
            </div>
        </div>

    );
}

export default CountdownCard;