export default function Layout({children}){
    return(
        <>
            <h1>Header</h1>
            <div>
                {children}
            </div>
            <h1>Footer</h1>
        </>   
    )
}