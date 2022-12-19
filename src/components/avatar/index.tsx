import Avatar from "avataaars";
import generateRandomAvatarOptions from "../../utils/avatarUtils";

const AvatarUser = ({ size }: any) => {
  return (
    <Avatar
      style={{ width: `${size}px`, height: `${size}px` }}
      avatarStyle="Circle"
      {...generateRandomAvatarOptions()}
    />
  );
};

export default AvatarUser;
