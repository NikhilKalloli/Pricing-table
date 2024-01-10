import Product from "./Product"

function ProductTab(){
    let styles = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100vh",
        flexWrap: "wrap",
    }

    return(
        <div style={styles}>
            <Product title="Logitech MX Master"  idx={0} />
            <Product title="Apple pencil (2nd Gen)" idx={1} />
            <Product title="Zebronics zeb-transformer" idx={2} />
            <Product title="Petronics Toad 23" idx={3}/>
        </div>
    );
}

export default ProductTab