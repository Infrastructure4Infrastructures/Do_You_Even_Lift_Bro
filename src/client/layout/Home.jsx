import HomePic from "./images/muscular-sportsman-building-biceps-with-dumbbell_7502-4744 (1).jpg";

export default function Home() {
  return (
    <>
      <section>
        <header>
          <center>
            <h1>Welcome To Your Full Body Workout</h1>
          </center>
        </header>
        <img src={HomePic} className='center'></img>
      </section>
    </>
  );
}
