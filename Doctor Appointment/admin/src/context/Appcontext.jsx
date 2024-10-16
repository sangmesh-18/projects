import { createContext } from "react";


export const AppContext = createContext();
const AppContextProvider = (props) => {

    const currency ='$'

    const calculateAge = (dob) => {
        const tody = new Date();
        const birthDate = new Date(dob);

        let age = tody.getFullYear() - birthDate.getFullYear();

        return age;

    }
    const months = [" ", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    const slotDateFormat = (slotDate) => {
        const dateArray = slotDate.split('_');
        return dateArray[0] + " " + months[Number(dateArray[1])] + " " + dateArray[2];


    }
    const value = {
        currency,
        calculateAge,
        slotDateFormat
        // other state and methods...

    }
    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )
}

export default AppContextProvider