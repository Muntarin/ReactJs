/*
const hi="Welcome";
const month= new Date();
const currentmonth= month.getMonth();*/

/*const headingstyle ={
  backgroundColor : "purple",
  color : "red",
  textAlign : "center",
  padding : "15px"
}*/
const date = new Date();
const day = date.getDate();
const newMonth = date.getMonth();
const year = date.getFullYear();


function Card(props){
  const {titleText,descText} = props;
  return <div className="card">
      <h3 className="cardTitle">{titleText}</h3>
      <p className="cardDes">{descText}</p>
      <p className="cardFooter">I Love Bangladesh</p>
      <p>{new Date().getFullYear()}</p>
      <p>{day + "/" + newMonth + "/" + year}</p>
    </div>
}
export default Card;
