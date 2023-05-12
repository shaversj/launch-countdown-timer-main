import './App.css'
import CountdownBoard from "./CountdownBoard.jsx";
import facebook  from "./assets/images/icon-facebook.svg"
import instagram  from "./assets/images/icon-instagram.svg"
import pinterest  from "./assets/images/icon-pinterest.svg"
import bg_stars from "./assets/images/bg-stars.svg"
import pattern_hills from "./assets/images/pattern-hills.svg"


function App() {

    return (
        <>
                <div
                    className={"bg-gradient-to-b from-very-dark-mostly-black-blue to-custom-purple flex min-w-full min-h-screen"}>
                    <div className={"relative min-w-full"}>
                        <div
                            className={"absolute sm:top-[35%] lg:top-[25%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center"}>
                        <span
                            className={"uppercase font-redHatText sm:text-lg font-light lg:text-2xl text-white tracking-[0.3rem]"}>We're Launching Soon</span>
                        </div>

                        <div className={"absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"}>
                            <div>
                                <CountdownBoard/>
                            </div>
                        </div>

                        <img className={"min-h-full min-w-full"} src={bg_stars} alt=""/>
                        <img className={"absolute bottom-0 min-h-[200px] object-cover min-w-full"}
                             src={pattern_hills} alt=""/>

                        <div
                            className={"absolute bottom-14 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex gap-8"}>
                            <button className={"hover:bg-soft-red hover:opacity-75"}>
                                <img className={"hover:bg-soft-red hover:opacity-75"}
                                     src={facebook} alt={""}/>
                            </button>
                            <button className={"hover:bg-soft-red hover:opacity-75 hover:overflow-hidden rounded-2xl"}>
                                <img className={"hover:bg-soft-red hover:opacity-75"}
                                     src={pinterest} alt={""}/>
                            </button>
                            <button className={"hover:bg-soft-red hover:opacity-75 hover:overflow-hidden"}>
                                <img className={"hover:bg-soft-red hover:opacity-75"}
                                     src={instagram} alt={""}/>
                            </button>
                        </div>

                    </div>
                </div>

        </>
    )
}

export default App
