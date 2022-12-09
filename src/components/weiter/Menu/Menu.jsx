import './Menu.scss'

export const Menu = ({breakFats, dinner})=>{
    return(
        <section className='menu'>
        <h3 className="titleMenu">Desayunos</h3>
        <div className="containerMenu">
            {breakFats.map(item=>(
               <figure key={item.id} className="itemMenu"><img src={item.image} alt={item.name}/><figcaption><span>{item.name}</span><span>{item.price}</span></figcaption></figure>
            ))}
           </div>
        </section>
    )

    
}