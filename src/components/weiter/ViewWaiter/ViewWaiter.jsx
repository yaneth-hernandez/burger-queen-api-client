import { HeaderWaiter } from '../HeaderWaiter/HeaderWaiter'
import { Menu } from '../Menu/Menu'

export const ViewWaiter = ()=>{
    return(
        <>
            <HeaderWaiter/>
            <Menu/>
        </>
    )
}