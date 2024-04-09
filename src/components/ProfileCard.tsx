import { DirectionAwareHover } from "./ui/direction-aware-hover";
import Profile from "../assets/Profile.jpg";
const ProfileCard = () => {
  return (
    <div className="w-[14rem] h-[14rem] sm:h-[16rem] sm:w-[16rem] lg:h-[20rem] lg:w-[20rem] border-2  border-black rounded-full z-40 flex items-center justify-center">
      <DirectionAwareHover imageUrl={Profile}>
        <p></p>
      </DirectionAwareHover>
    </div>
  );
};

export default ProfileCard;
