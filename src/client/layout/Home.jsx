import HomePic from "./images/muscular-sportsman-building-biceps-with-dumbbell_7502-4744 (1).jpg";
import "./Home.less";

export default function Home() {
  return (
    <section className='home'>
      <header className='home-header'>
        <h1>Welcome To Your Full Body Workout</h1>
      </header>
      <div className='image-container'>
        <img src={HomePic} alt='Workout' className='home-image' />
      </div>
    </section>
  );
}
