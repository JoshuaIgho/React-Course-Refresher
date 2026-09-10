const skills = "Js, Html, CSS, etc.";
const main = "React";


// function Skills({CardTitle, Desc}) { destruct directly 
function Skills(props) {
  const {CardTitle, Desc} = props

  return (
    <div>
      <p className="background">
        I've different skills is like {skills} including {main} 
      </p>
      <p>
        I've different name is like {CardTitle} & {Desc}
        
        
        {/* 

        <p> I've different name is like {prop.CardTitle} & {prop.Desc} </p>
        use this, if you don't wanna distruct 
        */}

      </p>
    </div>
  );
}

export default Skills;
