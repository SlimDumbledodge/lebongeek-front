import './Description.scss';

const Description = () => {
  return (
    <section className="hub__description__container">
      <div className="hub__avatar__pseudo">
        <h2 className="hub__pseudo">PSEUDO</h2>
        <img
          src="https://cdn.icon-icons.com/icons2/2859/PNG/512/avatar_face_girl_female_woman_profile_smiley_happy_people_icon_181662.png"
          alt=""
          className="hub__avatar"
        />
      </div>
      <p className="hub__description__text">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem cum
        tempora incidunt eum consectet
      </p>
    </section>
  );
};

export default Description;
