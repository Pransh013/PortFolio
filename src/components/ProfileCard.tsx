import { DirectionAwareHover } from "./ui/direction-aware-hover";
import Profile from "../assets/Profile.jpg";
const ProfileCard = () => {
  return (
    <div className="h-[20rem] w-[20rem] border border-black rounded-full relative top-1/2 -translate-y-1/2 z-40 flex items-center justify-center">
      <DirectionAwareHover imageUrl={Profile}>
        <p></p>
      </DirectionAwareHover>
    </div>
  );
};

export default ProfileCard;
