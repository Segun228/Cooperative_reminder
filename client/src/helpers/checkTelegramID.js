import GETme from "../api/requests/GETme"

const checkTelegramID = async () => {
    try{    
        const user_info = await GETme()
        if(!user_info?.id){
            throw new Error("could not access user information on the server")
        }
        if(!user_info?.telegram_id){
            return false
        }
        return true
    }
    catch(error){
        console.error(error)
        return null
    }
}

export default checkTelegramID