import React, {useState} from 'react';
import './App.css';
import Rating, {RatingValueType} from "./components/Rating/Rating";
import UncontrolledOnOff from "./components/UncontrolledOnOff/UncontrolledOnOff";


function App(props: any) {
    let [ratingValue, setRatingValue] = useState<RatingValueType>(0)
    // let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)
    let [switchOn, setSwitchOn] = useState<boolean>(false)

    return (
        <div className="App">

            <Rating value={ratingValue}
                    onClick={setRatingValue}/>

            {/*<UncontrolledRating />*/}

            {/*<Accordion titleValue={"Menu"}*/}
            {/*           collapsed={accordionCollapsed}*/}
            {/*           onChange={() => {*/}
            {/*               setAccordionCollapsed(!accordionCollapsed)*/}
            {/*           }}/>*/}
{/*

            <OnOff on={switchOn} onChange={(on) => {
                setSwitchOn(on)
            }}/>
*/}

            <UncontrolledOnOff onChange={setSwitchOn}/> {switchOn.toString()}

            {/*   <PageTitle title={"This App components"}/>
            Article 1
            <Rating value={3}/>
            <Accordion titleValue={"Menu"} collapsed={true}/>
            <Accordion titleValue={"Users"} collapsed={false}/>
            Article 2
            <Rating value={0}/>
            <Rating value={1}/>
            <Rating value={2}/>
            <Rating value={3}/>
            <Rating value={4}/>
            <Rating value={5}/>*/}
        </div>
    )
}

//
// type PageTitlePropsType = {
//     title: string
// }
//
// function PageTitle(props: PageTitlePropsType) {
//     return <h3> {props.title}</h3>
// }
//

export default App;
