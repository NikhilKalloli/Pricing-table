export default function Price({oldPrice,newPrice}) {
  let oldStyles = { 
    textDecoration: "line-through",
    color: "red",
  };
  let newStyles={
    color: "lightgreen",
  }
  return (
    <div>
        <span style={oldStyles}>{oldPrice}</span>
        &nbsp; &nbsp;
        <span style={newStyles}> {newPrice}</span>
       
    </div>
  );
   
}