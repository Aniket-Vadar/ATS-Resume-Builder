const Achievements = ({ title, achievements }) => {
  return (
    achievements &&
    achievements.length > 0 &&
    achievements.some((a) => a && a.trim().length > 0) && (
      <div className="mb-1">
        <h2 className="section-title mb-1 border-b-2 border-gray-300">
          {title}
        </h2>
        <ul className="list-disc ul-padding content">
          {achievements
            .filter((a) => a && a.trim().length > 0)
            .map((achievement, index) => (
              <li key={index}>{achievement}</li>
            ))}
        </ul>
      </div>
    )
  );
};

export default Achievements;
