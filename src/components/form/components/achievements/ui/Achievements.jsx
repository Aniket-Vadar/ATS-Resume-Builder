import React, { useContext } from "react";
import { ResumeContext } from "../../../../builder";
import FormButton from "../../FormButton";

const AchievementLine = ({ achievement, index }) => {
  const { resumeData, setResumeData } = useContext(ResumeContext);

  const handleChange = (e) => {
    const newAchievements = [...resumeData.achievements];
    newAchievements[index] = e.target.value;
    setResumeData({ ...resumeData, achievements: newAchievements });
  };

  return (
    <input
      type="text"
      placeholder={`Achievement ${index + 1}`}
      name="achievement"
      className="other-input w-full"
      value={achievement}
      onChange={handleChange}
    />
  );
};

const Achievements = () => {
  const { resumeData, setResumeData } = useContext(ResumeContext);
  const achievements = resumeData.achievements || [];

  const addAchievement = () => {
    setResumeData({
      ...resumeData,
      achievements: [...achievements, ""],
    });
  };

  const removeAchievement = () => {
    const newAchievements = [...achievements];
    newAchievements.pop();
    setResumeData({ ...resumeData, achievements: newAchievements });
  };

  return (
    <div>
      {achievements.map((achievement, index) => (
        <AchievementLine key={index} achievement={achievement} index={index} />
      ))}
      <FormButton
        size={achievements.length}
        add={addAchievement}
        remove={removeAchievement}
      />
    </div>
  );
};

export default Achievements;
