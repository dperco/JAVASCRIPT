function layout({children}){

    return  <div className="layout">
        <img style={{ heigth:"100vh",width:"100%",objectFit:"cover"}}src={'\homework\img-screen\fondo_clima.png'} alt=''/>
       
    <div  style={{
            heigth:"100vh",
            width:"100%",
            backgroundColor:"#000000FF",
            position:"absolute"
    }}/>
         <header  className="header">

           <img  src={'\src\img\logoHenry.png'} alt=""/>

           <Nav>
               

           </Nav>
         </header>
         {children}
        
    </div>;
        

    
}


export default layout;